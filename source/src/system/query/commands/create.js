"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_COM_CREATE = void 0;
var static_1 = require("../../data/static");
var table_1 = require("../table");
var DB_COM_CREATE = /** @class */ (function () {
    function DB_COM_CREATE(_option) {
        var _this = this;
        this.app = _option;
        this.Obuild = new static_1.OptBuilder;
        this.SuperDB = setTimeout(function () { _this.app.save(); }, 500).unref();
        //this.Obuild.String("test",["2","33"]) 
    }
    DB_COM_CREATE.prototype.table = function (_data, call) {
        var _this = this;
        this.app.run.then(function (status) {
            var _a;
            var _com = static_1.sys_session.Get(_this.app["option"]["option"]["user"]);
            if (!_com)
                throw { status: false, code: 6089, message: "SESSION_FAILED" };
            if (!_com.permission["CREATE"])
                throw { status: false, code: 1989, message: "NO_PERMISSION" };
            if (static_1.sys_dba.StringByte(_data.column) > static_1.sys_app.cache.size) {
                throw ({ status: false, code: 3131, message: "OVER_MAX_SIZE" });
            }
            ;
            if (static_1.sys_dba.toEscape((_a = _data.column) === null || _a === void 0 ? void 0 : _a.join("")) > 0) {
                throw ({ status: false, code: 3511, message: "INVALID_CHARACTER" });
            }
            ;
            if (static_1.sys_dba.toEscape(_data.table) > 0) {
                throw (new static_1.SYS_MSG().Messsage("03x23h41"));
            }
            ;
            if (!static_1.sys_dba.toType(_data.table, "string"))
                throw (new static_1.SYS_MSG().Messsage("03x23h22"));
            if (!static_1.sys_dba.toType(_data.column, "array"))
                throw (new static_1.SYS_MSG().Messsage("03x63h52"));
            if (!static_1.sys_dba.toArray(_data.column))
                throw (new static_1.SYS_MSG().Messsage("03x13h12"));
            var database = function (call) {
                var Ifdbf = false;
                static_1.sys_ram_db.database.forEach(function (__dbval, _i) {
                    var __acc = String(__dbval["access"] || "").split(",").indexOf(_com["user"]);
                    var __all = String(__dbval["access"] || "").split(",").indexOf("*");
                    if (__dbval["name"] == _this.app["option"]["option"]["database"]) {
                        if (__acc == -1 && __all == -1)
                            throw { status: false, code: 1989, message: "USER_CANNOT_ACCESS" };
                        Ifdbf = true;
                        call(__dbval);
                    }
                    else if (_i == static_1.sys_ram_db.database.size && !Ifdbf) {
                        throw { status: false, code: 1989, message: "DB_NOT_FOUND" };
                    }
                });
            };
            database(function (_d) {
                var __for = new static_1.forEach(10);
                var _auto_icm = (static_1.sys_ram_db.table.size + 1);
                var _file_date = new static_1.ftid("null").time;
                var __userDB = _this.app["option"]["option"]["database"];
                var __map = Array.from(static_1.sys_ram_db.table, function (_a) {
                    var name = _a[0], value = _a[1];
                    return ({ value: value }).value;
                });
                __for.forEach(__map, function (__index, _vres, __status) {
                    var _a;
                    if (_data.table == _vres.table && _vres.db == __userDB) {
                        throw { status: false, code: 1989, message: "ALREADY_EXIST" };
                    }
                    else if (__status.code == 1) {
                        static_1.sys_ram_db.table.set(String(_auto_icm), {
                            id: _auto_icm, index: "1", table: _data.table, date: _file_date,
                            db: __userDB, fields: ((_a = _data.column) === null || _a === void 0 ? void 0 : _a.join(",")) || "",
                            option: "{ file: \"".concat((0, static_1.sha256)(String(_data.table).concat(_file_date)), "\", part: [] }")
                        });
                        var emptyFile = new table_1.SYS_TABLE(_this.app).CreateEmpty("".concat((0, static_1.sha256)(String(_data.table).concat(_file_date))));
                        _this.SuperDB.ref();
                        call({ "status": true, "code": 100, "message": "DONE" });
                    }
                });
            });
        }).catch(function (e) {
            call(e);
        });
    };
    DB_COM_CREATE.prototype.database = function (_data, call) {
        var _this = this;
        this.app.run.then(function (status) {
            try {
                var __for = new static_1.forEach(10);
                var _com = static_1.sys_session.Get(_this.app["option"]["option"]["user"]);
                if (!_com)
                    throw { status: false, code: 6089, message: "SESSION_FAILED" };
                if (!_com.permission["CREATE"])
                    throw { status: false, code: 1989, message: "NO_PERMISSION" };
                if (static_1.sys_dba.toEscape(_data.name) > 0)
                    throw (new static_1.SYS_MSG().Messsage("03x23h41"));
                var database = function (call) {
                    var __map = Array.from(static_1.sys_ram_db.database, function (_a) {
                        var name = _a[0], value = _a[1];
                        return ({ value: value }).value;
                    });
                    __for.forEach(__map, function (__index, __dbval, __status) {
                        var _a;
                        var __acc = String(__dbval["access"] || "").split(",").indexOf(_com["user"]);
                        // console.log(__dbval["access"],_com["user"], __acc);
                        if (__dbval["name"] == _data["name"]) {
                            __for.stop();
                            throw { status: false, code: 1289, message: "DB_ALREADY_EXIST" };
                        }
                        else if (__status.code == 1) {
                            if (!static_1.sys_dba.toType(_data.option, "object"))
                                throw new static_1.SYS_MSG().Messsage("04x74h15");
                            if (!static_1.sys_dba.toType(_data.access, "array"))
                                throw new static_1.SYS_MSG().Messsage("04x74h12");
                            if (!static_1.sys_dba.toType(_data.encoding, "string"))
                                throw new static_1.SYS_MSG().Messsage("04x70h11");
                            var _sh2Name = static_1.SYS_PATH.join(_this.app["option"]["location"], (0, static_1.sha256)(_data.name));
                            var folExt = new static_1.SYS_FILE_S().fs.existsSync(_sh2Name);
                            if (!folExt)
                                new static_1.SYS_FILE_S().fs.mkdirSync(_sh2Name, { recursive: true });
                            if (!Object(_data).hasOwnProperty("id")) {
                                Object(_data).id = (static_1.sys_ram_db.database.size + 1);
                            }
                            ;
                            if (Object(_data).hasOwnProperty("access")) {
                                if (Object(_data).access.length > 0) {
                                    Object(_data).access = (_a = _data.access) === null || _a === void 0 ? void 0 : _a.join(",");
                                }
                                else {
                                    Object(_data).access = "*";
                                }
                            }
                            ;
                            if (!Object(_data.option).hasOwnProperty("date")) {
                                Object(_data.option).date = Date.now();
                            }
                            ;
                            if (!Object(_data.option).hasOwnProperty("crc")) {
                                Object(_data.option).crc = (0, static_1.sha256)(_data.name);
                            }
                            ;
                            if (!Object(_data.option).hasOwnProperty("mode")) {
                                Object(_data.option).mode = "rw-";
                            }
                            ;
                            __for.stop();
                            call(_data, false);
                        }
                    });
                };
                database(function (_d) {
                    static_1.sys_ram_db.database.set(String(_d["id"]), {
                        id: _d["id"], name: _d["name"], encoding: _d["encoding"],
                        access: _d["access"],
                        option: JSON.stringify(_d["option"], null, 0)
                    });
                    _this.SuperDB.ref();
                    call({ "status": true, "code": 100, "message": "DONE" });
                });
            }
            catch (error) {
                call(error);
            }
        }).catch(function (error) {
            call(error);
        });
    };
    return DB_COM_CREATE;
}());
exports.DB_COM_CREATE = DB_COM_CREATE;
//# sourceMappingURL=create.js.map