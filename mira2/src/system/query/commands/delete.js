"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_COM_DELETE = void 0;
var static_1 = require("../../data/static");
var builder_1 = require("../../data/builder");
var process_1 = require("process");
var DB_COM_DELETE = /** @class */ (function () {
    function DB_COM_DELETE(_option) {
        var _this = this;
        this.app = _option;
        this.tbltag = { blob: "", tag: "data" };
        this.Obuild = new static_1.OptBuilder;
        this.SuperDB = setTimeout(function () { _this.app.save(); }, 500).unref();
    }
    Object.defineProperty(DB_COM_DELETE.prototype, "delete", {
        get: function () {
            var _this = this;
            return {
                column: function (_data, call) {
                    _this.app.run.then(function (status) {
                        var _a;
                        var _com = static_1.sys_session.Get(_this.app["option"]["option"]["user"]);
                        if (!_com)
                            throw { status: false, code: 6089, message: "SESSION_FAILED" };
                        if (!_com.permission["DELETE"])
                            throw { status: false, code: 1989, message: "NO_PERMISSION" };
                        if (static_1.sys_ram_db.table.size <= 0)
                            throw { status: false, code: 4139, message: "ZERO_TABLE" };
                        if (!static_1.sys_dba.toArray(_data.column))
                            throw { status: false, code: 3081, message: "NULL_ARRAY" };
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
                        var __procID = (0, static_1.sha256)(String(_data.table).concat("".concat(Date.now())));
                        var __procDB = {};
                        var ColData = function (call) {
                            __procDB[__procID] = { resume: false };
                            static_1.sys_ram_db.table.forEach(function (_vres, _idx) {
                                if (_vres.table == _data.table && _vres.db == _this.app["option"]["option"]["database"]) {
                                    __procDB[__procID]["resume"] = true;
                                    __procDB[__procID]["col_array"] = (String(_vres.fields).length > 1) ? String(_vres.fields).split(",") : [];
                                    var _loop_1 = function (key) {
                                        var __key = _data.column[parseInt(key)];
                                        if (Object(__procDB[__procID]["col_array"]).indexOf(__key) == -1)
                                            throw { status: false, code: 3459, message: "INVAILED_COLUMN_NAME" };
                                        __procDB[__procID]["col_array"] = __procDB[__procID]["col_array"].filter(function (item) { return item !== __key; });
                                    };
                                    for (var key in _data.column) {
                                        _loop_1(key);
                                    }
                                    call(__procDB[__procID]["col_array"], _vres);
                                }
                                else if (!__procDB[__procID]["resume"] && static_1.sys_ram_db.table.size == _idx) {
                                    throw { status: false, code: 3081, message: "TABLE_CANNOT_ACCESS" };
                                }
                            });
                        };
                        ColData(function (_array, _table) {
                            var __for = new static_1.forEach(10);
                            var __opt = _this.Obuild.Object(_table["option"]);
                            var __fileList = static_1.sys_dba.TableOption().files(__opt);
                            var __fieldList = (_array.join(",").length > 0) ? _array.join(",") : "";
                            var __or = (__fieldList.length > 0) ? __fieldList.split(",") : [];
                            _table["fields"] = __fieldList;
                            __procDB[__procID]["col_data"] = "";
                            __for.forEach(__fileList, function (index, item, status) {
                                if (status.code == 1 || status.code == 0)
                                    new builder_1.SYS_TB_READER(_this.app["option"], item).load(function (__s, __f, __d) {
                                        if (__s.code == 100) {
                                            if (Buffer.from(__procDB[__procID]["col_data"]).length > 0) {
                                                new static_1.SYS_FILE_S().fs.writeFileSync(__d, __procDB[__procID]["col_data"]);
                                                __procDB[__procID]["col_data"] = "";
                                                __for.next();
                                            }
                                            else {
                                                new static_1.SYS_FILE_S().fs.writeFileSync(__d, "");
                                                __procDB[__procID]["col_data"] = "";
                                                __for.next();
                                            }
                                            if (status.code == 1) {
                                                _this.SuperDB.ref();
                                                call({ "status": true, "code": 100, "message": "DONE" });
                                            }
                                        }
                                        else if (__s.code == 1) {
                                            __or.forEach(function (__v, __i) {
                                                var _a;
                                                var __rt = Object(typeof ((_a = static_1.sys_dba.field(__v, __f)) === null || _a === void 0 ? void 0 : _a.length) == "undefined" ? ["<".concat(__v, ">null</").concat(__v, ">")] : static_1.sys_dba.field(__v, __f))[0];
                                                if (__i == __or.length - 1) {
                                                    _this.tbltag.blob += __rt;
                                                    __procDB[__procID]["col_data"] += String("<".concat(_this.tbltag.tag, ">")).concat(_this.tbltag.blob).concat("</".concat(_this.tbltag.tag, ">")).concat("\r");
                                                    _this.tbltag.blob = "";
                                                }
                                                else {
                                                    _this.tbltag.blob += __rt;
                                                }
                                            });
                                            __for.pause();
                                        }
                                    });
                            });
                        });
                    }).catch(function (e) {
                        call(e);
                    });
                },
                row: function (_data, call) {
                    _this.app.run.then(function (status) {
                        var SYS_B_DOC = new static_1.SYS_BUILD();
                        var _com = static_1.sys_session.Get(_this.app["option"]["option"]["user"]);
                        if (!_com)
                            throw { status: false, code: 6089, message: "SESSION_FAILED" };
                        if (static_1.sys_ram_db.table.size <= 0)
                            throw { status: false, code: 4139, message: "ZERO_TABLE" };
                        if (!_com.permission["DELETE"])
                            throw { status: false, code: 1989, message: "NO_PERMISSION" };
                        if (static_1.sys_dba.toEscape(_data.table) > 0) {
                            throw ({ status: false, code: 3511, message: "INVALID_CHARACTER" });
                        }
                        ;
                        if (!static_1.sys_dba.toType(_data.find, "object"))
                            throw { status: false, code: 3081, message: "INVALID_QUERY_TYPE" };
                        if (static_1.sys_dba.StringByte(_data.find) > static_1.sys_app.cache.size) {
                            throw ({ status: false, code: 3131, message: "OVER_MAX_SIZE" });
                        }
                        ;
                        var __procID = (0, static_1.sha256)(String(_data.table).concat("".concat(Date.now())));
                        var __procDB = {};
                        var tableData = function (call) {
                            __procDB[__procID] = { result: false };
                            static_1.sys_ram_db.table.forEach(function (_res, _idx) {
                                if (_res.table === _data.table && _res.db === _this.app["option"]["option"]["database"]) {
                                    var __opt = _this.Obuild.Object(_res["option"]);
                                    var __l = static_1.sys_dba.TableOption().files(__opt);
                                    __procDB[__procID]["result"] = true;
                                    call(__l);
                                }
                                if (!__procDB[__procID]["result"] && static_1.sys_ram_db.table.size == _idx) {
                                    throw { status: false, code: 3081, message: "TABLE_CANNOT_ACCESS" };
                                }
                            });
                        };
                        tableData(function (_TableList) {
                            var __for = new static_1.forEach(10);
                            __procDB[__procID]["_TableList"] = "";
                            __procDB[__procID]["isfound"] = false;
                            __for.forEach(_TableList, function (index, item, stat) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, new builder_1.SYS_TB_READER(this.app["option"], item).load(function (__s, __f, __d) {
                                                if (__s.code == 100) {
                                                    try {
                                                        if (stat.code == 1) {
                                                            if (__procDB[__procID]["isfound"]) {
                                                                call({ "status": true, "code": 100, "message": "DONE" });
                                                            }
                                                            else {
                                                                call({ "status": true, "code": 130, "message": "NOT_MATCH" });
                                                            }
                                                        }
                                                        else if (Buffer.from(__procDB[__procID]["_TableList"]).length > 0) {
                                                            if (__procDB[__procID]["isfound"])
                                                                new static_1.SYS_FILE_S().fs.writeFileSync(__d, __procDB[__procID]["_TableList"]);
                                                        }
                                                        else {
                                                            if (__procDB[__procID]["isfound"])
                                                                new static_1.SYS_FILE_S().fs.writeFileSync(__d, "");
                                                        }
                                                        __procDB[__procID]["_TableList"] = "";
                                                    }
                                                    catch (error) {
                                                        __procDB[__procID]["_TableList"] = "";
                                                        throw { status: false, code: 2849, message: "FILE_WRITE_ERROR" };
                                                    }
                                                }
                                                else if (__s.code == 1) {
                                                    if (static_1.sys_dba.isObjectEmpty(_data.find)) {
                                                        var __co = String(Object.keys(_data.find).shift());
                                                        var __tbl_col = SYS_B_DOC.field(__co, __f);
                                                        if (__tbl_col) {
                                                            if (_data.find[__co] !== __tbl_col) {
                                                                __procDB[__procID]["_TableList"] += String("<".concat(_this.tbltag.tag, ">")).concat(__f).concat("</".concat(_this.tbltag.tag, ">")).concat("\r");
                                                            }
                                                            else {
                                                                __procDB[__procID]["isfound"] = true;
                                                            }
                                                        }
                                                        else {
                                                            call({ status: false, code: 4139, message: "INVAILED_COLUMN_NAME" });
                                                            (0, process_1.exit)(7010);
                                                        }
                                                    }
                                                    else {
                                                        call({ status: false, code: 4139, message: "INVAILED_QUERY_STRING" });
                                                        (0, process_1.exit)(7080);
                                                    }
                                                }
                                            })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
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
    return DB_COM_DELETE;
}());
exports.DB_COM_DELETE = DB_COM_DELETE;
//# sourceMappingURL=delete.js.map