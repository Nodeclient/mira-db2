"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sys_app = exports.sys_data_file = void 0;
exports.sys_data_file = {
    database: "sys_db.msf", table: "sys_tbl.msf", admin: "sys_usr.msf",
};
var _cscst = process.env.CACHE_SIZE || 1000;
exports.sys_app = {
    header: "mi2", signature: "r20", ext: "rdb", cache: { size: parseInt(_cscst) }
};
//# sourceMappingURL=0x21FG43.js.map