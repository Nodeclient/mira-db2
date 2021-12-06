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
exports.SYS_S_LOC = void 0;
var static_1 = require("./static");
var SYS_S_LOC = /** @class */ (function () {
    function SYS_S_LOC(loc) {
        this.database_loc = process.env.DB_STORAGE || loc || static_1.SYS_PATH.join("/", "databases");
        this.sys_fs_check = { database: false, table: false, user: false };
    }
    Object.defineProperty(SYS_S_LOC.prototype, "System_Status", {
        get: function () {
            return { location: this.database_loc, system: this.sys_fs_check };
        },
        enumerable: false,
        configurable: true
    });
    SYS_S_LOC.prototype.init = function (option) {
        return __awaiter(this, void 0, void 0, function () {
            var SYS_B_DOC;
            var _this = this;
            return __generator(this, function (_b) {
                SYS_B_DOC = new static_1.SYS_BUILD();
                return [2 /*return*/, new Promise(function (resolve) {
                        //--SYSTEM USER--
                        new static_1.SYS_BUILD().sys_Read(_this.database_loc, { type: "US" }, function (_id, _data, _status) {
                            if (_data) {
                                var _us, _ps, _pe;
                                _us = SYS_B_DOC.field("user", _data);
                                _ps = SYS_B_DOC.field("pass", _data);
                                _pe = SYS_B_DOC.field("permission", _data);
                                static_1.sys_ram_db.user.set(String(_id), {
                                    id: _id,
                                    user: _us,
                                    pass: _ps,
                                    permission: _pe,
                                    option: SYS_B_DOC.field("option", _data)
                                });
                                if (option["option"]["user"] == _us && option["option"]["pass"] == _ps) {
                                    _this.sys_fs_check.user = true;
                                    static_1.sys_session.Live({ isAlive: true, permission: static_1.sys_dba.toObject(_pe), user: _us });
                                }
                            }
                            else {
                                switch (_status.code) {
                                    case 1:
                                        //READING
                                        break;
                                    case 100:
                                        if (_this.sys_fs_check.user) {
                                            //--SYSTEM DB--
                                            new static_1.SYS_BUILD().sys_Read(_this.database_loc, { type: "DB" }, function (_id, _data, _status) {
                                                if (_data) {
                                                    var _ac, _na, _en;
                                                    _ac = SYS_B_DOC.field("access", _data);
                                                    _na = SYS_B_DOC.field("name", _data);
                                                    _en = SYS_B_DOC.field("encoding", _data);
                                                    static_1.sys_ram_db.database.set(String(_id), { id: _id, access: _ac, encoding: _en, name: _na, option: SYS_B_DOC.field("option", _data) });
                                                    var __acc = String(_ac || "").split(",").indexOf(option["option"]["user"]);
                                                    var __all = String(_ac || "").split(",").indexOf("*");
                                                    if (_na == option["option"]["database"] && __acc >= 0 || __all >= 0) {
                                                        _this.sys_fs_check.database = true;
                                                    }
                                                    else if (_na == option["option"]["database"] && __acc == -1 && __acc == -1) {
                                                        _this.sys_fs_check.database = false;
                                                        throw new static_1.SYS_MSG(option).Messsage("01x82e84");
                                                    }
                                                }
                                                switch (_status.code) {
                                                    case 1:
                                                        //READING
                                                        break;
                                                    case 100:
                                                        if (_this.sys_fs_check.database) {
                                                            //--SYSTEM TB--
                                                            new static_1.SYS_BUILD().sys_Read(_this.database_loc, { type: "TB" }, function (_id, _data, _status) {
                                                                if (_data) {
                                                                    static_1.sys_ram_db.table.set(String(_id), {
                                                                        id: _id,
                                                                        db: SYS_B_DOC.field("db", _data),
                                                                        date: SYS_B_DOC.field("date", _data),
                                                                        table: SYS_B_DOC.field("table", _data),
                                                                        index: SYS_B_DOC.field("auto_index", _data),
                                                                        option: SYS_B_DOC.field("option", _data),
                                                                        fields: SYS_B_DOC.field("fields", _data)
                                                                    });
                                                                }
                                                                switch (_status.code) {
                                                                    case 1:
                                                                        //READING
                                                                        break;
                                                                    case 204:
                                                                        //NO FILE
                                                                        resolve(_this.sys_fs_check);
                                                                        break;
                                                                    case 100:
                                                                        _this.sys_fs_check.table = true;
                                                                        resolve(_this.sys_fs_check);
                                                                        break;
                                                                    case 215:
                                                                        resolve(_this.sys_fs_check);
                                                                        break;
                                                                    default:
                                                                        throw _status;
                                                                        break;
                                                                }
                                                            });
                                                        }
                                                        else {
                                                            throw new static_1.SYS_MSG(option).Messsage("01x82e84");
                                                        }
                                                        break;
                                                    case 215:
                                                        resolve(_this.sys_fs_check);
                                                        break;
                                                    default:
                                                        throw _status;
                                                        break;
                                                }
                                            });
                                        }
                                        else {
                                            if (option["option"]["user"] == "local" && option["option"]["pass"] == "") {
                                                _this.sys_fs_check.user = true;
                                                static_1.sys_session.Live({
                                                    isAlive: true,
                                                    permission: {
                                                        SELECT: false,
                                                        ADD: false,
                                                        UNIQUE: false,
                                                        UPDATE: false,
                                                        RENAME: false,
                                                        DROP: false,
                                                        DELETE: false,
                                                        CREATE: false,
                                                        LIST: false
                                                    }, user: "local"
                                                });
                                                resolve(_this.sys_fs_check);
                                            }
                                            else {
                                                throw new static_1.SYS_MSG(option).Messsage("01x12f54");
                                            }
                                        }
                                        break;
                                    default:
                                        throw _status;
                                        break;
                                }
                            }
                        });
                    }).catch(function (_a) {
                        throw _a;
                    })];
            });
        });
    };
    return SYS_S_LOC;
}());
exports.SYS_S_LOC = SYS_S_LOC;
//# sourceMappingURL=bin.js.map