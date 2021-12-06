"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.platform = exports.freemem = exports.totalmem = exports.SYS_MSG = exports.SYS_BASE = exports.sys_writing = exports.SYS_PATH = exports.SYS_FILE_S = exports.sys_ram_db = exports.sys_dba = exports.db_default_admin = exports.sys_part_file = exports.sys_shared = exports.sys_data_file = exports.sys_app = exports.sys_session = exports.DATABASE = exports.ACC_PERM = exports.SYS_MODAL_TYPE = exports.SYS_BUILD = exports.sys_field_function = exports.forEach = exports.ftid = exports.OptBuilder = exports.Sleep = exports.fileSize = exports.sha256 = void 0;
var _0x03SH04_1 = require("./types/0x03SH04");
Object.defineProperty(exports, "sha256", { enumerable: true, get: function () { return _0x03SH04_1.sha256; } });
Object.defineProperty(exports, "fileSize", { enumerable: true, get: function () { return _0x03SH04_1.fileSize; } });
Object.defineProperty(exports, "Sleep", { enumerable: true, get: function () { return _0x03SH04_1.Sleep; } });
Object.defineProperty(exports, "OptBuilder", { enumerable: true, get: function () { return _0x03SH04_1.OptBuilder; } });
Object.defineProperty(exports, "ftid", { enumerable: true, get: function () { return _0x03SH04_1.ftid; } });
Object.defineProperty(exports, "forEach", { enumerable: true, get: function () { return _0x03SH04_1.forEach; } });
var _0x15TY79_1 = require("./types/0x15TY79");
Object.defineProperty(exports, "sys_field_function", { enumerable: true, get: function () { return _0x15TY79_1.sys_field_function; } });
var builder_1 = require("./builder");
Object.defineProperty(exports, "SYS_BUILD", { enumerable: true, get: function () { return builder_1.SYS_BUILD; } });
var fieldtype_1 = require("./fieldtype");
Object.defineProperty(exports, "SYS_MODAL_TYPE", { enumerable: true, get: function () { return fieldtype_1.SYS_MODAL_TYPE; } });
var access_1 = require("./access");
Object.defineProperty(exports, "ACC_PERM", { enumerable: true, get: function () { return access_1.ACC_PERM; } });
var system_db_1 = require("../../system_db");
Object.defineProperty(exports, "DATABASE", { enumerable: true, get: function () { return system_db_1.DATABASE; } });
var access_2 = require("../../system/data/access");
exports.sys_session = new access_2.ACC_SESSION();
var _0x21FG43_1 = require("./types/0x21FG43");
Object.defineProperty(exports, "sys_app", { enumerable: true, get: function () { return _0x21FG43_1.sys_app; } });
Object.defineProperty(exports, "sys_data_file", { enumerable: true, get: function () { return _0x21FG43_1.sys_data_file; } });
var _0x72SS10_1 = require("./types/0x72SS10");
Object.defineProperty(exports, "sys_shared", { enumerable: true, get: function () { return _0x72SS10_1.sys_shared; } });
Object.defineProperty(exports, "sys_part_file", { enumerable: true, get: function () { return _0x72SS10_1.sys_part_file; } });
var _0x11DB89_1 = require("./types/0x11DB89");
Object.defineProperty(exports, "db_default_admin", { enumerable: true, get: function () { return _0x11DB89_1.db_default_admin; } });
Object.defineProperty(exports, "sys_dba", { enumerable: true, get: function () { return _0x11DB89_1.sys_dba; } });
Object.defineProperty(exports, "sys_ram_db", { enumerable: true, get: function () { return _0x11DB89_1.sys_ram_db; } });
var _0x20FL15_1 = require("./types/0x20FL15");
Object.defineProperty(exports, "SYS_FILE_S", { enumerable: true, get: function () { return _0x20FL15_1.SYS_FILE_S; } });
Object.defineProperty(exports, "SYS_PATH", { enumerable: true, get: function () { return _0x20FL15_1.SYS_PATH; } });
Object.defineProperty(exports, "sys_writing", { enumerable: true, get: function () { return _0x20FL15_1.sys_writing; } });
;
var SYS_BASE = /** @class */ (function () {
    function SYS_BASE() {
        this.sys_database = { data: "", name: "undefined" };
        this.hex = function (a_) {
            return Buffer.from(a_).toString('base64');
        };
        this.source = function (a_) {
            return Buffer.from(a_, 'base64').toString("utf-8");
        };
    }
    return SYS_BASE;
}());
exports.SYS_BASE = SYS_BASE;
var returnmsg_1 = require("../../system/data/returnmsg");
Object.defineProperty(exports, "SYS_MSG", { enumerable: true, get: function () { return returnmsg_1.SYS_MSG; } });
var os_1 = require("os");
Object.defineProperty(exports, "totalmem", { enumerable: true, get: function () { return os_1.totalmem; } });
Object.defineProperty(exports, "freemem", { enumerable: true, get: function () { return os_1.freemem; } });
Object.defineProperty(exports, "platform", { enumerable: true, get: function () { return os_1.platform; } });
;
//# sourceMappingURL=static.js.map