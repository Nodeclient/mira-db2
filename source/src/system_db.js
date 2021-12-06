"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATABASE = exports.DB_COM_UPDATE = exports.DB_COM_UNIQUE = exports.DB_COM_SUPER = exports.DB_COM_SELECT = exports.DB_COM_RENAME = exports.DB_COM_LIST = exports.DB_COM_DROP = exports.DB_COM_DELETE = exports.DB_COM_CREATE = exports.DB_COM_ADD = void 0;
var register_1 = require("./system/query/register");
Object.defineProperty(exports, "DB_COM_ADD", { enumerable: true, get: function () { return register_1.DB_COM_ADD; } });
Object.defineProperty(exports, "DB_COM_CREATE", { enumerable: true, get: function () { return register_1.DB_COM_CREATE; } });
Object.defineProperty(exports, "DB_COM_DELETE", { enumerable: true, get: function () { return register_1.DB_COM_DELETE; } });
Object.defineProperty(exports, "DB_COM_DROP", { enumerable: true, get: function () { return register_1.DB_COM_DROP; } });
Object.defineProperty(exports, "DB_COM_LIST", { enumerable: true, get: function () { return register_1.DB_COM_LIST; } });
Object.defineProperty(exports, "DB_COM_RENAME", { enumerable: true, get: function () { return register_1.DB_COM_RENAME; } });
Object.defineProperty(exports, "DB_COM_SELECT", { enumerable: true, get: function () { return register_1.DB_COM_SELECT; } });
Object.defineProperty(exports, "DB_COM_SUPER", { enumerable: true, get: function () { return register_1.DB_COM_SUPER; } });
Object.defineProperty(exports, "DB_COM_UNIQUE", { enumerable: true, get: function () { return register_1.DB_COM_UNIQUE; } });
Object.defineProperty(exports, "DB_COM_UPDATE", { enumerable: true, get: function () { return register_1.DB_COM_UPDATE; } });
var static_1 = require("./system/data/static");
var bin_1 = require("./system/data/bin");
var builder_1 = require("./system/data/builder");
var DATABASE = /** @class */ (function () {
    function DATABASE(_set) {
        if (!Object(_set.option).hasOwnProperty("delay")) {
            _set.option.delay = "100";
        }
        if (!Object(_set.option).hasOwnProperty("lang")) {
            _set.option.lang = "en_US";
        }
        if (!Object(_set.option).hasOwnProperty("user")) {
            _set.option.user = "local";
        }
        if (!Object(_set.option).hasOwnProperty("pass")) {
            _set.option.pass = "";
        }
        if (!Object(_set.option).hasOwnProperty("database")) {
            _set.option.database = "undefined";
        }
        if (!Object(_set.option).hasOwnProperty("max_memory")) {
            _set.option.max_memory = "1000";
        }
        static_1.sys_shared.set("lang", _set.option.lang);
        this.option = { location: _set.location, mode: _set.mode, option: _set.option };
        this.run = new bin_1.SYS_S_LOC(_set.location).init(this.option);
        this.close = function () { static_1.sys_session.Exit(_set.option.user); };
        this.save = function (_type) {
            try {
                var Init = new static_1.SYS_BUILD().sys_Build(_set.location, function (status) { if (status.code != 200) {
                    throw status;
                } });
                return true;
            }
            catch (error) {
                return false;
            }
        };
        this.load = function (_file, call) {
            return new builder_1.SYS_TB_READER(_set, _file).load(call);
        };
    }
    return DATABASE;
}());
exports.DATABASE = DATABASE;
//# sourceMappingURL=system_db.js.map