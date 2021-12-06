"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_COM_ADD = void 0;
var static_1 = require("../../data/static");
var builder_1 = require("../../data/builder");
var DB_COM_ADD = /** @class */ (function (_super) {
    __extends(DB_COM_ADD, _super);
    function DB_COM_ADD(_option) {
        var _this = _super.call(this) || this;
        _this.app = _option;
        _this.tbltag = { blob: "", tag: "data" };
        _this.SuperDB = setTimeout(function () { _this.app.save(); }, 500).unref();
        _this.Obuild = new static_1.OptBuilder;
        return _this;
    }
    Object.defineProperty(DB_COM_ADD.prototype, "table", {
        get: function () {
            var _this = this;
            return {
                column: function (_data, call) {
                    _this.app.run.then(function (status) {
                        var _a;
                        var __for = new static_1.forEach(10);
                        var _com = static_1.sys_session.Get(_this.app["option"]["option"]["user"]);
                        if (!_com)
                            throw { status: false, code: 6089, message: "SESSION_FAILED" };
                        if (static_1.sys_ram_db.table.size <= 0)
                            throw { status: false, code: 4139, message: "ZERO_TABLE" };
                        if (!_com.permission["ADD"])
                            throw { status: false, code: 1989, message: "NO_PERMISSION" };
                        if (!static_1.sys_dba.toArray(_data.column))
                            throw { status: false, code: 3081, message: "NULL_COLUMN_ARRAY" };
                        if (static_1.sys_dba.toEscape((_a = _data.column) === null || _a === void 0 ? void 0 : _a.join("")) > 0) {
                            throw ({ status: false, code: 3511, message: "INVALID_CHARACTER" });
                        }
                        ;
                        if (static_1.sys_dba.toEscape(_data.table) > 0) {
                            throw ({ status: false, code: 3511, message: "INVALID_CHARACTER" });
                        }
                        ;
                        if (!static_1.sys_dba.toType(_data.table, "string")) {
                            throw ({ status: false, code: 3131, message: "INVAILED_TYPE" });
                        }
                        ;
                        if (static_1.sys_dba.StringByte(_data.column) + static_1.sys_dba.StringByte(_data.value) > static_1.sys_app.cache.size) {
                            throw ({ status: false, code: 3131, message: "OVER_MAX_SIZE" });
                        }
                        ;
                        var __dbname = _this.app["option"]["option"]["database"];
                        var __procID = (0, static_1.sha256)(String(_data.table).concat("".concat(Date.now())));
                        var __procDB = {};
                        var __map = Array.from(static_1.sys_ram_db.table, function (_a) {
                            var name = _a[0], value = _a[1];
                            return ({ value: value }).value;
                        });
                        __for.forEach(__map, function (__index, _vres, __status) {
                            if (_vres.table == _data.table && _vres.db == __dbname) {
                                var __Farr_1 = (String(_vres.fields).length > 0) ? String(_vres.fields).split(",") : [];
                                var colPos = function (call) {
                                    for (var _a = 0, _b = Object(_data.column); _a < _b.length; _a++) {
                                        var _col = _b[_a];
                                        call((__Farr_1.indexOf(_col) == -1 ? true : false), _col);
                                    }
                                };
                                colPos(function (_stu, _res) {
                                    if (!_stu)
                                        throw { status: false, code: 3735, message: "column (".concat(_res, ") already exist") };
                                    if (String(_res).length <= 0)
                                        throw { status: false, code: 3735, message: "Empty column name" };
                                    __Farr_1.push(_res);
                                });
                                var __opt = _this.Obuild.Object(_vres["option"]);
                                var __fileList_2 = static_1.sys_dba.TableOption().files(__opt);
                                var _loop_1 = function (filname) {
                                    new Promise(function (resolve) {
                                        __procDB[__procID + "TAG"] = "";
                                        __procDB[__procID + "DATA"] = "";
                                        __procDB[__procID + "I"] = 0;
                                        new builder_1.SYS_TB_READER(_this.app["option"], filname).load(function (__s, __f, __d) {
                                            if (__s.code == 100) {
                                                _vres.fields = (String(__Farr_1).length > 1) ? __Farr_1.join(",") : [];
                                                new static_1.SYS_FILE_S().write(__d, __procDB[__procID + "DATA"]);
                                                __procDB[__procID + "I"]++;
                                                if (__procDB[__procID + "I"] == __fileList_2.length) {
                                                    _this.SuperDB.ref();
                                                    call({ "status": true, "code": 100, "message": "DONE" });
                                                }
                                            }
                                            else if (__s.code == 1) {
                                                __Farr_1.forEach(function (__v, __i) {
                                                    var _a;
                                                    var __fed = Object(_data.value)[Object(_data.column).indexOf(__v)] || "null";
                                                    var __res = Object(typeof ((_a = static_1.sys_dba.field(__v, __f)) === null || _a === void 0 ? void 0 : _a.length) == "undefined" ? ["<".concat(__v, ">").concat(__fed, "</").concat(__v, ">")] : static_1.sys_dba.field(__v, __f))[0];
                                                    if (__i == __Farr_1.length - 1) {
                                                        if (Buffer.from(__procDB[__procID + "TAG"]).length > static_1.sys_app.cache.size)
                                                            throw { status: false, code: 2466, message: "OVER_MAX_SIZE" };
                                                        __procDB[__procID + "TAG"] += __res;
                                                        __procDB[__procID + "DATA"] += String("<".concat(_this.tbltag.tag, ">")).concat(__procDB[__procID + "TAG"]).concat("</".concat(_this.tbltag.tag, ">")).concat("\r");
                                                        __procDB[__procID + "TAG"] = "";
                                                    }
                                                    else {
                                                        __procDB[__procID + "TAG"] += __res;
                                                    }
                                                });
                                            }
                                        });
                                    });
                                };
                                for (var _a = 0, __fileList_1 = __fileList_2; _a < __fileList_1.length; _a++) {
                                    var filname = __fileList_1[_a];
                                    _loop_1(filname);
                                }
                                __for.stop();
                            }
                        });
                    }).catch(function (e) {
                        call(e);
                    });
                },
                row: function (_data, call) {
                    _this.app.run.then(function (status) {
                        var __dbname = _this.app["option"]["option"]["database"];
                        var _com = static_1.sys_session.Get(_this.app["option"]["option"]["user"]);
                        if (!_com)
                            throw { status: false, code: 6089, message: "SESSION_FAILED" };
                        if (!_com.permission["ADD"])
                            throw { status: false, code: 1989, message: "NO_PERMISSION" };
                        if (static_1.sys_ram_db.table.size <= 0)
                            throw { status: false, code: 4139, message: "ZERO_TABLE" };
                        if (static_1.sys_dba.toEscape(_data.table) > 0) {
                            throw ({ status: false, code: 3511, message: "INVALID_CHARACTER" });
                        }
                        ;
                        if (!static_1.sys_dba.toType(_data.column, "object"))
                            throw { status: false, code: 3081, message: "INVALID_COLUMN_TYPE" };
                        if (!static_1.sys_dba.toType(_data.table, "string")) {
                            throw ({ status: false, code: 3131, message: "INVAILED_TYPE" });
                        }
                        ;
                        if (static_1.sys_dba.StringByte(_data.column) > static_1.sys_app.cache.size) {
                            throw ({ status: false, code: 3131, message: "OVER_MAX_SIZE" });
                        }
                        ;
                        var __for = new static_1.forEach(10);
                        var __procID = (0, static_1.sha256)(String(_data.table).concat("".concat(Date.now())));
                        var __procDB = {};
                        __procDB[__procID + "row"] = "";
                        __procDB[__procID + "field"] = "";
                        __procDB[__procID + "bool"] = false;
                        _this.newModel(_data.column, "types", function (result) {
                            if (result.code == 100) {
                                var __map = Array.from(static_1.sys_ram_db.table, function (_a) {
                                    var name = _a[0], value = _a[1];
                                    return ({ value: value }).value;
                                });
                                __for.forEach(__map, function (__index, __item, __status) {
                                    if (__status.code == 1 && !__procDB[__procID + "bool"]) {
                                        throw { status: false, code: 4139, message: "INVAILED_TABLE_NAME" };
                                    }
                                    else if (__item.table == _data.table && __item.db == __dbname) {
                                        __procDB[__procID + "bool"] = true;
                                        __procDB[__procID + "row"] = __item;
                                        var __tfld = static_1.sys_dba.TableOption().field(__item); //String(__item.fields).length > 1 ? String(__item.fields).split(",") : [];
                                        for (var key in __tfld) {
                                            if (_data.column.hasOwnProperty(__tfld[key])) {
                                                if (Buffer.from(_data.column[__tfld[key]]).length > static_1.sys_app.cache.size)
                                                    throw { status: false, code: 2466, message: "OVER_MAX_SIZE" };
                                                __procDB[__procID + "field"] += String("<".concat(__tfld[key], ">")).concat("".concat((_data.column[__tfld[key]]))).concat("</".concat(__tfld[key], ">"));
                                            }
                                            else if (!_data.column.hasOwnProperty(__tfld[key])) {
                                                __procDB[__procID + "field"] += String("<".concat(__tfld[key], ">")).concat("null").concat("</".concat(__tfld[key], ">"));
                                            }
                                        }
                                    }
                                    if (__status.code == 1) {
                                        var __op_1 = _this.Obuild.Object(__procDB[__procID + "row"]["option"]);
                                        var __ke_1 = String(__op_1.file).concat((__op_1.part.length > 0 ? "," : "")).concat(__op_1.part.join(",")).split(",") || [];
                                        var __dcn_1 = __op_1;
                                        var SyncDrive = function () {
                                            return new Promise(function (resolve, reject) {
                                                var __FID = function () {
                                                    try {
                                                        var nFUID = new static_1.ftid(__op_1.file).part;
                                                        __dcn_1.part.push(nFUID);
                                                        __procDB[__procID + "row"]["option"] = JSON.stringify(__dcn_1, null, 0);
                                                        new static_1.SYS_FILE_S().write(static_1.SYS_PATH.join(_this.app["option"].location, (0, static_1.sha256)(_this.app["option"]["option"]["database"]), "".concat(nFUID, ".").concat(static_1.sys_app.ext)), "");
                                                        return nFUID;
                                                    }
                                                    catch (error) {
                                                        reject({ status: false, code: 6921, message: "ITEM_BUILD_FAILED" });
                                                    }
                                                };
                                                for (var _i = 0; _i < __ke_1.length; _i++) {
                                                    var GetFsize = function (__fs) {
                                                        var __lfp = static_1.SYS_PATH.join(_this.app["option"].location, (0, static_1.sha256)(_this.app["option"]["option"]["database"]), "".concat(__fs, ".").concat(static_1.sys_app.ext));
                                                        if (!static_1.sys_part_file.check(__lfp)) {
                                                            try {
                                                                new static_1.SYS_FILE_S().write(__lfp, "");
                                                                return ({ path: __lfp, size: static_1.sys_part_file.check(__lfp).size });
                                                            }
                                                            catch (error) {
                                                                reject(error);
                                                            }
                                                        }
                                                        else {
                                                            return ({ path: __lfp, size: static_1.sys_part_file.check(__lfp).size });
                                                        }
                                                        reject(false);
                                                    };
                                                    var _f = GetFsize(__ke_1[_i]);
                                                    if (_f.size >= static_1.sys_app.cache.size) {
                                                        if ((__ke_1.length - 1) == _i) {
                                                            var __nph = static_1.SYS_PATH.join(_this.app["option"].location, (0, static_1.sha256)(_this.app["option"]["option"]["database"]), "".concat(__FID(), ".").concat(static_1.sys_app.ext));
                                                            resolve(__nph);
                                                            break;
                                                        }
                                                    }
                                                    else {
                                                        resolve(_f.path);
                                                        break;
                                                    }
                                                }
                                            });
                                        };
                                        SyncDrive().then(function (_syncFID) {
                                            new static_1.SYS_FILE_S().append(_syncFID, String("<".concat(_this.tbltag.tag, ">")).concat(__procDB[__procID + "field"]).concat("</".concat(_this.tbltag.tag, ">")).concat("\r"));
                                        }).finally(function () {
                                            _this.SuperDB.ref();
                                            call({ "status": true, "code": 100, "message": "DONE" });
                                        }).catch(function (e) {
                                            call(e);
                                        });
                                    }
                                });
                            }
                            else {
                                call(result);
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
    return DB_COM_ADD;
}(static_1.SYS_MODAL_TYPE));
exports.DB_COM_ADD = DB_COM_ADD;
//# sourceMappingURL=add.js.map