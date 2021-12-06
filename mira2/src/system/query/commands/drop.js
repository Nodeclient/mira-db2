"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_COM_DROP = void 0;
var static_1 = require("../../data/static");
var DB_COM_DROP = /** @class */ (function () {
    function DB_COM_DROP(_option) {
        var _this = this;
        this.app = _option;
        this.SuperDB = setTimeout(function () { _this.app.save(); }, 500).unref();
        this.Obuild = new static_1.OptBuilder;
    }
    Object.defineProperty(DB_COM_DROP.prototype, "drop", {
        get: function () {
            var _this = this;
            return {
                database: function (_data, call) {
                    _this.app.run.then(function (status) {
                        var _a;
                        var _com = static_1.sys_session.Get(_this.app["option"]["option"]["user"]);
                        if (!_com)
                            throw { status: false, code: 6089, message: "SESSION_FAILED" };
                        if (!_com.permission["DROP"])
                            throw { status: false, code: 1989, message: "NO_PERMISSION" };
                        if (!static_1.sys_dba.toArray(_data.database))
                            throw { status: false, code: 3081, message: "NULL_ARRAY" };
                        if (static_1.sys_ram_db.database.size <= 0)
                            throw { status: false, code: 4139, message: "ZERO_DATABASE" };
                        if (static_1.sys_dba.toEscape((_a = _data.database) === null || _a === void 0 ? void 0 : _a.join("")) > 0) {
                            throw ({ status: false, code: 3511, message: "INVALID_CHARACTER" });
                        }
                        ;
                        var __procID = (0, static_1.sha256)(String("database").concat("".concat(Date.now())));
                        var __procDB = {};
                        __procDB[__procID + "bool"] = false;
                        static_1.sys_ram_db.database.forEach(function (_vres) {
                            var __dbVal = _data.database.indexOf(_vres["name"]);
                            if (__dbVal != -1) {
                                var __acc = String(_vres["access"] || "").split(",").indexOf(_com["user"]);
                                var __all = String(_vres["access"] || "").split(",").indexOf("*");
                                if (__acc == -1 && __all == -1) {
                                    //NOPERM//
                                }
                                else {
                                    var _dbf = static_1.SYS_PATH.join(_this.app["option"]["location"], _this.Obuild.Object(_vres.option).crc);
                                    static_1.sys_ram_db.database.delete(String(_vres["id"]));
                                    static_1.sys_ram_db.table.forEach(function (_t) {
                                        if (_t["db"] == _vres["name"]) {
                                            static_1.sys_ram_db.table.delete(String(_t.id));
                                        }
                                    });
                                    if (new static_1.SYS_FILE_S().fs.existsSync(_dbf)) {
                                        new static_1.SYS_FILE_S().fs.rmSync(_dbf, { recursive: true, force: true });
                                    }
                                    ;
                                    __procDB[__procID + "bool"] = true;
                                }
                            }
                        });
                        if (__procDB[__procID + "bool"] && static_1.sys_ram_db.table.size > 0) {
                            _this.SuperDB.ref();
                        }
                        else if (__procDB[__procID + "bool"]) {
                            var _tbf = static_1.SYS_PATH.join(_this.app["option"]["location"], static_1.sys_data_file.table);
                            if (new static_1.SYS_FILE_S().fs.existsSync(_tbf)) {
                                new static_1.SYS_FILE_S().fs.unlinkSync(_tbf);
                            }
                        }
                        if (__procDB[__procID + "bool"] && static_1.sys_ram_db.database.size > 0) {
                            _this.SuperDB.ref();
                        }
                        else if (__procDB[__procID + "bool"]) {
                            var _abf = static_1.SYS_PATH.join(_this.app["option"]["location"], static_1.sys_data_file.database);
                            if (new static_1.SYS_FILE_S().fs.existsSync(_abf)) {
                                new static_1.SYS_FILE_S().fs.unlinkSync(_abf);
                            }
                        }
                        if (!__procDB[__procID + "bool"]) {
                            call({ "status": false, "code": 5130, "message": "DB_NOT_FOUND" });
                        }
                        else {
                            call({ "status": true, "code": 100, "message": "DONE" });
                        }
                    }).catch(function (e) {
                        call(e);
                    });
                },
                table: function (_data, call) {
                    _this.app.run.then(function (status) {
                        var _com = static_1.sys_session.Get(_this.app["option"]["option"]["user"]);
                        if (!_com)
                            throw { status: false, code: 6089, message: "SESSION_FAILED" };
                        if (!_com.permission["DROP"])
                            throw { status: false, code: 1989, message: "NO_PERMISSION" };
                        if (!static_1.sys_dba.toArray(_data.table))
                            throw { status: false, code: 3081, message: "NULL_ARRAY" };
                        if (static_1.sys_ram_db.table.size <= 0)
                            throw { status: false, code: 4139, message: "ZERO_TABLE" };
                        var __procID = (0, static_1.sha256)(String("database").concat("".concat(Date.now())));
                        var __procDB = {};
                        __procDB[__procID + "bool"] = false;
                        __procDB[__procID + "size"] = static_1.sys_ram_db.table.size;
                        static_1.sys_ram_db.table.forEach(function (_vres, _index) {
                            if (_data.table.indexOf(_vres.table) != -1 && _vres.db === _this.app["option"]["option"]["database"]) {
                                var __opt = _this.Obuild.Object(_vres["option"]);
                                var __fileList = static_1.sys_dba.TableOption().files(__opt);
                                __fileList.forEach(function (_j) {
                                    var _acd = static_1.SYS_PATH.join(_this.app["option"]["location"], (0, static_1.sha256)(_vres.db), String("".concat(_j, ".").concat(static_1.sys_app.ext)));
                                    if (new static_1.SYS_FILE_S().fs.existsSync(_acd)) {
                                        new static_1.SYS_FILE_S().fs.unlinkSync(_acd);
                                    }
                                });
                                __procDB[__procID + "bool"] = true;
                                static_1.sys_ram_db.table.delete(String(_vres.id));
                            }
                            if (_index == __procDB[__procID + "size"]) {
                                if (__procDB[__procID + "bool"]) {
                                    if (static_1.sys_ram_db.table.size > 0) {
                                        _this.SuperDB.ref();
                                    }
                                    else {
                                        var _tbf = static_1.SYS_PATH.join(_this.app["option"]["location"], static_1.sys_data_file.table);
                                        if (new static_1.SYS_FILE_S().fs.existsSync(_tbf)) {
                                            new static_1.SYS_FILE_S().fs.unlinkSync(_tbf);
                                        }
                                    }
                                    call({ "status": true, "code": 100, "message": "DONE" });
                                }
                                else {
                                    call({ "status": false, "code": 5560, "message": "TABLE_NOT_FOUND" });
                                }
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
    return DB_COM_DROP;
}());
exports.DB_COM_DROP = DB_COM_DROP;
//# sourceMappingURL=drop.js.map