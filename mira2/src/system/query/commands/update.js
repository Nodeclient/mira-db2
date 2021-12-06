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
exports.DB_COM_UPDATE = void 0;
var static_1 = require("../../data/static");
var builder_1 = require("../../data/builder");
var DB_COM_UPDATE = /** @class */ (function (_super) {
    __extends(DB_COM_UPDATE, _super);
    function DB_COM_UPDATE(_option) {
        var _this = _super.call(this) || this;
        _this.app = _option;
        _this.tbltag = { blob: "", tag: "data" };
        _this.SuperDB = setTimeout(function () { _this.app.save(); }, 500).unref();
        _this.Obuild = new static_1.OptBuilder;
        return _this;
    }
    Object.defineProperty(DB_COM_UPDATE.prototype, "update", {
        get: function () {
            var _this = this;
            return {
                row: function (_data, call) {
                    _this.app.run.then(function (status) {
                        var _com = static_1.sys_session.Get(_this.app["option"]["option"]["user"]);
                        if (!_com)
                            throw { status: false, code: 6089, message: "SESSION_FAILED" };
                        if (!_com.permission["UPDATE"])
                            throw { status: false, code: 1989, message: "NO_PERMISSION" };
                        if (static_1.sys_ram_db.table.size <= 0)
                            throw { status: false, code: 4139, message: "ZERO_TABLE" };
                        if (static_1.sys_dba.toEscape(_data.table) > 0) {
                            throw ({ status: false, code: 3511, message: "INVALID_CHARACTER" });
                        }
                        ;
                        if (!static_1.sys_dba.toType(_data.find, "object"))
                            throw { status: false, code: 3081, message: "INVALID_COLUMN_TYPE" };
                        if (!static_1.sys_dba.toType(_data.column, "object"))
                            throw { status: false, code: 3081, message: "INVALID_COLUMN_TYPE" };
                        if (static_1.sys_dba.toArray(_data.find))
                            throw { status: false, code: 3081, message: "INVALID_COLUMN_TYPE" };
                        if (static_1.sys_dba.toArray(_data.column))
                            throw { status: false, code: 3081, message: "INVALID_COLUMN_TYPE" };
                        if (!static_1.sys_dba.isObjectEmpty(_data.find)) {
                            throw ({ status: false, code: 3811, message: "INVALID_COLUMN_NAME" });
                        }
                        ;
                        if (!static_1.sys_dba.isObjectEmpty(_data.column)) {
                            throw ({ status: false, code: 3811, message: "INVALID_COLUMN_NAME" });
                        }
                        ;
                        var __dbname = _this.app["option"]["option"]["database"];
                        var __for = new static_1.forEach(10);
                        var __procID = (0, static_1.sha256)(String(_data.table).concat("".concat(Date.now())));
                        var __procDB = {};
                        if (static_1.sys_dba.StringByte(_data.column) > static_1.sys_app.cache.size) {
                            throw ({ status: false, code: 3131, message: "OVER_MAX_SIZE" });
                        }
                        ;
                        __procDB[__procID + "data"] = "";
                        __procDB[__procID + "bool"] = false;
                        __procDB[__procID + "count"] = 0;
                        __procDB[__procID + "files"] = 0;
                        _this.newModel(_data.column, "types", function (result) {
                            if (result.code == 100) {
                                static_1.sys_ram_db.table.forEach(function (_vres, _vindex) {
                                    if (_vres.table == _data.table && _vres.db == __dbname) {
                                        var __opt = _this.Obuild.Object(_vres["option"]);
                                        var __fileList_1 = static_1.sys_dba.TableOption().files(__opt);
                                        var __fnst_1 = { name: Object.keys(_data.find).shift(), value: _data.find[String(Object.keys(_data.find).shift())] };
                                        var __fclt_1 = Object.keys(_data.column);
                                        var __fild_1 = (String(_vres.fields).length > 0) ? String(_vres.fields).split(",") : [];
                                        if (!(__fild_1.filter(function (_v) { return (Object(_data.column).hasOwnProperty(_v)) ? true : false; }).length > 0)) {
                                            call({ status: false, code: 3811, message: "INVALID_COLUMN_NAME" });
                                        }
                                        else {
                                            __for.forEach(__fileList_1, function (index, item) {
                                                __procDB[__procID + "files"]++;
                                                new builder_1.SYS_TB_READER(_this.app["option"], item).load(function (__s, __f, __d) {
                                                    var _a, _b, _c;
                                                    if (__s.code == 1) {
                                                        var __chfld = typeof ((_a = static_1.sys_dba.field(String(__fnst_1.name), __f)) === null || _a === void 0 ? void 0 : _a.length) == "undefined" ? false : (_b = static_1.sys_dba.field(String(__fnst_1.name), __f)) === null || _b === void 0 ? void 0 : _b.pop();
                                                        if (__chfld) {
                                                            __procDB[__procID + "bool"] = true;
                                                            __procDB[__procID + "blob"] = "";
                                                            if (__fnst_1.value == __chfld) {
                                                                for (var _i = 0, __fild_2 = __fild_1; _i < __fild_2.length; _i++) {
                                                                    var __colnam = __fild_2[_i];
                                                                    var _colinx = __fclt_1.indexOf(__colnam);
                                                                    var _colval = (_c = static_1.sys_dba.field(String(__colnam), __f)) === null || _c === void 0 ? void 0 : _c.pop();
                                                                    if (_colinx == -1) {
                                                                        __procDB[__procID + "blob"] += String("<".concat(__colnam, ">")).concat(_colval).concat("</".concat(__colnam, ">"));
                                                                    }
                                                                    else {
                                                                        __procDB[__procID + "blob"] += String("<".concat(__colnam, ">")).concat(_data.column[__colnam]).concat("</".concat(__colnam, ">"));
                                                                    }
                                                                }
                                                                __procDB[__procID + "data"] += String("<".concat(_this.tbltag.tag, ">")).concat(__procDB[__procID + "blob"]).concat("</".concat(_this.tbltag.tag, ">")).concat("\r");
                                                                __procDB[__procID + "blob"] = "";
                                                            }
                                                            else {
                                                                __procDB[__procID + "data"] += String("<".concat(_this.tbltag.tag, ">")).concat(__f).concat("</".concat(_this.tbltag.tag, ">")).concat("\r");
                                                            }
                                                        }
                                                    }
                                                    else if (__s.code == 100) {
                                                        if (__procDB[__procID + "bool"]) {
                                                            new static_1.SYS_FILE_S().write(__d, __procDB[__procID + "data"]);
                                                            if (__fileList_1.length == __procDB[__procID + "files"]) {
                                                                call({ "status": true, "code": 100, "message": "DONE" });
                                                            }
                                                        }
                                                        else {
                                                            throw ({ status: false, code: 1238, message: "COLUMN_NOT_EXIST" });
                                                        }
                                                        __procDB[__procID + "data"] = "";
                                                        __procDB[__procID + "bool"] = false;
                                                    }
                                                });
                                            });
                                        }
                                    }
                                    else {
                                        __procDB[__procID + "count"]++;
                                        if (__procDB[__procID + "count"] == static_1.sys_ram_db.table.size) {
                                            call({ "status": false, "code": 1852, "message": "TABLE_NOT_EXIST" });
                                        }
                                    }
                                });
                            }
                        });
                    }).catch(function (_err) {
                        call(_err);
                    });
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    return DB_COM_UPDATE;
}(static_1.SYS_MODAL_TYPE));
exports.DB_COM_UPDATE = DB_COM_UPDATE;
//# sourceMappingURL=update.js.map