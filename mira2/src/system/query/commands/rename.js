"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_COM_RENAME = void 0;
var static_1 = require("../../data/static");
var builder_1 = require("../../data/builder");
var DB_COM_RENAME = /** @class */ (function () {
    function DB_COM_RENAME(_option) {
        var _this = this;
        this.app = _option;
        this.tbltag = { blob: "", tag: "data" };
        this.SuperDB = setTimeout(function () { _this.app.save(); }, 500).unref();
        this.Obuild = new static_1.OptBuilder;
    }
    Object.defineProperty(DB_COM_RENAME.prototype, "rename", {
        get: function () {
            var _this = this;
            return {
                table: function (_data, call) {
                    _this.app.run.then(function (status) {
                        var _com = static_1.sys_session.Get(_this.app["option"]["option"]["user"]);
                        if (!_com)
                            throw { status: false, code: 6089, message: "SESSION_FAILED" };
                        if (!_com.permission["RENAME"])
                            throw { status: false, code: 1989, message: "NO_PERMISSION" };
                        if (static_1.sys_dba.toEscape(_data.table) > 0) {
                            throw ({ status: false, code: 3511, message: "INVALID_CHARACTER" });
                        }
                        ;
                        if (static_1.sys_dba.toEscape(_data.value) > 0) {
                            throw ({ status: false, code: 3511, message: "INVALID_CHARACTER" });
                        }
                        ;
                        if (static_1.sys_ram_db.table.size <= 0)
                            throw { status: false, code: 4139, message: "ZERO_TABLE" };
                        if (static_1.sys_dba.StringByte(_data.value) > static_1.sys_app.cache.size) {
                            throw ({ status: false, code: 3131, message: "OVER_MAX_SIZE" });
                        }
                        ;
                        if (!Object(_data).hasOwnProperty("value") || !Object(_data).hasOwnProperty("table"))
                            throw ({ status: false, code: 3131, message: "INVAILED_QUERY" });
                        var __procID = (0, static_1.sha256)(String(_data.table).concat("".concat(Date.now())));
                        var __procDB = {};
                        __procDB[__procID + "record"] = false;
                        static_1.sys_ram_db.table.forEach(function (_vres, _ix) {
                            if (_vres.table != _data.value) {
                                if (_vres.table == _data.table && _vres.db == _this.app["option"]["option"]["database"]) {
                                    _vres.table = _data.value;
                                    _this.SuperDB.ref();
                                    __procDB[__procID + "record"] = true;
                                }
                                if (_ix == static_1.sys_ram_db.table.size && __procDB[__procID + "record"]) {
                                    call({ "status": true, "code": 100, "message": "DONE" });
                                }
                                else if (_ix == static_1.sys_ram_db.table.size && !__procDB[__procID + "record"]) {
                                    throw ({ "status": false, "code": 4002, "message": "INVAILED_TABLE_NAME" });
                                }
                            }
                            else {
                                throw ({ "status": false, "code": 3182, "message": "TABLE_ALREADY_EXIST" });
                            }
                        });
                    }).catch(function (e) {
                        call(e);
                    });
                },
                database: function (_data, call) {
                    _this.app.run.then(function (status) {
                        var __dbname = _this.app["option"]["option"]["database"];
                        var __dbor = (0, static_1.sha256)(String(__dbname));
                        var __dbne = (0, static_1.sha256)(String(_data.value));
                        var _com = static_1.sys_session.Get(_this.app["option"]["option"]["user"]);
                        if (!_com)
                            throw { status: false, code: 6089, message: "SESSION_FAILED" };
                        if (!_com.permission["RENAME"])
                            throw { status: false, code: 1989, message: "NO_PERMISSION" };
                        if (static_1.sys_dba.toEscape(_data.value) > 0) {
                            throw ({ status: false, code: 3511, message: "INVALID_CHARACTER" });
                        }
                        ;
                        if (!Object(_data).hasOwnProperty("value"))
                            throw ({ status: false, code: 3131, message: "INVAILED_QUERY" });
                        if (static_1.sys_dba.StringByte(_data.value) > static_1.sys_app.cache.size) {
                            throw ({ status: false, code: 3131, message: "OVER_MAX_SIZE" });
                        }
                        ;
                        var __procID = (0, static_1.sha256)(String(_data.value).concat("".concat(Date.now())));
                        var __procDB = {};
                        /*DB PERM */
                        static_1.sys_ram_db.database.forEach(function (_vres, _idx) {
                            var __acc = String(_vres["access"] || "").split(",").indexOf(_com["user"]);
                            var __all = String(_vres["access"] || "").split(",").indexOf("*");
                            if (_vres.name == __dbname) {
                                __procDB[__procID + "_vres"] = _vres;
                            }
                            if (_vres.name == _data.value) {
                                __procDB[__procID + "bool"] = true;
                                throw { status: false, code: 8583, message: "DB_NAME_ALREADY_EXIST" };
                            }
                            else if (_vres.name == __dbname && __acc == -1 && __all == -1) {
                                __procDB[__procID + "bool"] = true;
                            }
                            else if (static_1.sys_ram_db.database.size == _idx && !__procDB[__procID + "bool"]) {
                                if (typeof __procDB[__procID + "_vres"] !== "undefined") {
                                    _vres = __procDB[__procID + "_vres"];
                                    var _opt = _this.Obuild.Object(_vres.option);
                                    var __old = static_1.SYS_PATH.join(_this.app["option"]["location"], __dbor);
                                    var __new = static_1.SYS_PATH.join(_this.app["option"]["location"], __dbne);
                                    _opt.crc = __dbne;
                                    _opt.date = new static_1.ftid("null").time;
                                    _vres.name = _data.value;
                                    _vres.option = JSON.stringify(_opt, null, 0);
                                    new static_1.SYS_FILE_S().fs.renameSync(__old, __new);
                                    static_1.sys_ram_db.table.forEach(function (_tbes, _ix) {
                                        if (_tbes.db == __dbname) {
                                            _tbes.db = _data.value;
                                        }
                                    });
                                    _this.SuperDB.ref();
                                    call({ "status": true, "code": 100, "message": "DONE" });
                                }
                                else {
                                    throw { status: false, code: 1509, message: "DB_NOT_FOUND" };
                                }
                            }
                            else if (static_1.sys_ram_db.database.size == _idx && __procDB[__procID + "bool"]) {
                                throw { status: false, code: 1989, message: "NO_PERMISSION" };
                            }
                        });
                        /*DB PERM */
                    }).catch(function (e) {
                        call(e);
                    });
                },
                column: function (_data, call) {
                    _this.app.run.then(function (status) {
                        var __dbname = _this.app["option"]["option"]["database"];
                        var _com = static_1.sys_session.Get(_this.app["option"]["option"]["user"]);
                        if (!_com)
                            throw { status: false, code: 6089, message: "SESSION_FAILED" };
                        if (!_com.permission["RENAME"])
                            throw { status: false, code: 1989, message: "NO_PERMISSION" };
                        if (static_1.sys_ram_db.table.size <= 0)
                            throw { status: false, code: 4139, message: "ZERO_TABLE" };
                        if (static_1.sys_dba.toEscape(_data.table) > 0) {
                            throw ({ status: false, code: 3511, message: "INVALID_CHARACTER" });
                        }
                        ;
                        if (!static_1.sys_dba.toType(_data.table, "string")) {
                            throw ({ status: false, code: 3131, message: "INVAILED_TYPE" });
                        }
                        ;
                        if (!static_1.sys_dba.toType(_data.column, "object")) {
                            throw ({ status: false, code: 3131, message: "INVAILED_TYPE" });
                        }
                        ;
                        if (static_1.sys_dba.toArray(_data.column))
                            throw { status: false, code: 7081, message: "INVAILED_TYPE" };
                        if (static_1.sys_dba.StringByte(_data.column) > static_1.sys_app.cache.size) {
                            throw ({ status: false, code: 3131, message: "OVER_MAX_SIZE" });
                        }
                        ;
                        if (!Object(_data).hasOwnProperty("table") && !Object(_data).hasOwnProperty("column"))
                            throw ({ status: false, code: 3131, message: "INVAILED_QUERY" });
                        var __procID = (0, static_1.sha256)(String(_data.table).concat("".concat(Date.now())));
                        var __procDB = {};
                        __procDB[__procID + "newf"] = [];
                        __procDB[__procID + "data"] = "";
                        __procDB[__procID + "row"] = "";
                        __procDB[__procID + "bool"] = false;
                        static_1.sys_ram_db.table.forEach(function (_vres, _vri) {
                            if (_vres.table == _data.table && _vres.db == __dbname) {
                                var _cfie = static_1.sys_dba.TableOption().field(_vres);
                                var _extCells = static_1.sys_dba.TableOption().column(_data.column, _vres);
                                var __opt = _this.Obuild.Object(_vres["option"]);
                                var __files = static_1.sys_dba.TableOption().files(__opt);
                                __procDB[__procID + "bool"] = true;
                                if (_extCells.length > 0) {
                                    var __for = new static_1.forEach(50);
                                    __for.forEach(__files, function (index, item, status) {
                                        new builder_1.SYS_TB_READER(_this.app["option"], item).load(function (__s, __f, __d) {
                                            if (__s.code == 680)
                                                throw (__s.message);
                                            if (__s.code == 100) {
                                                new static_1.SYS_FILE_S().write(__d, __procDB[__procID + "data"]);
                                                __procDB[__procID + "data"] = "";
                                                __for.next();
                                            }
                                            else if (__s.code == 1) {
                                                _cfie.forEach(function (__v) {
                                                    if (_extCells.indexOf(__v) == -1) {
                                                        var __data = Object(static_1.sys_dba.field(__v, __f))[0];
                                                        __procDB[__procID + "row"] += __data;
                                                    }
                                                    else {
                                                        var __data = Object(static_1.sys_dba.field(__v, __f))[1];
                                                        var __value = String(_data.column[__v]).length > 0 ? _data.column[__v] : false;
                                                        if (__value) {
                                                            var row_part = String("<".concat(_data.column[__v], ">")).concat(__data).concat("</".concat(_data.column[__v], ">"));
                                                            __procDB[__procID + "row"] += row_part;
                                                        }
                                                    }
                                                });
                                                __procDB[__procID + "data"] += String("<".concat(_this.tbltag.tag, ">")).concat(__procDB[__procID + "row"]).concat("</".concat(_this.tbltag.tag, ">")).concat("\r");
                                                __procDB[__procID + "row"] = "";
                                            }
                                        });
                                        if (status.code == 1) {
                                            _cfie.forEach(function (__ch, __ix) {
                                                if (_extCells.indexOf(__ch) == -1) {
                                                    __procDB[__procID + "newf"].push(__ch);
                                                }
                                                else {
                                                    __procDB[__procID + "newf"].push(_data.column[__ch]);
                                                }
                                                if ((__ix + 1) == _cfie.length) {
                                                    _vres.fields = __procDB[__procID + "newf"];
                                                }
                                            });
                                            _this.SuperDB.ref();
                                            call({ "status": true, "code": 100, "message": "DONE" });
                                        }
                                        __for.pause();
                                    });
                                }
                                else {
                                    throw ({ status: false, code: 7771, message: "INVAILED_COL_NAME" });
                                }
                            }
                            else if (!__procDB[__procID + "bool"] && _vri == static_1.sys_ram_db.table.size) {
                                throw ({ "status": false, "code": 4002, "message": "FAILED" });
                            }
                        });
                    }).catch(function (e) {
                        call(e);
                    });
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    return DB_COM_RENAME;
}());
exports.DB_COM_RENAME = DB_COM_RENAME;
//# sourceMappingURL=rename.js.map