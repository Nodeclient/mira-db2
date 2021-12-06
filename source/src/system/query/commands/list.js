"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_COM_LIST = void 0;
var static_1 = require("../../data/static");
var DB_COM_LIST = /** @class */ (function () {
    function DB_COM_LIST(_option) {
        this.app = _option;
    }
    Object.defineProperty(DB_COM_LIST.prototype, "list", {
        get: function () {
            var _this = this;
            return {
                databases: function (call) {
                    _this.app.run.then(function (__status) {
                        var _com = static_1.sys_session.Get(_this.app["option"]["option"]["user"]);
                        if (!_com)
                            throw { status: false, code: 6089, message: "SESSION_FAILED" };
                        if (!_com.permission["LIST"])
                            throw { status: false, code: 1989, message: "NO_PERMISSION" };
                        if (static_1.sys_ram_db.database.size <= 0)
                            throw { status: false, code: 4039, message: "ZERO_DATABASE" };
                        static_1.sys_ram_db.database.forEach(function (__ld) {
                            call(__ld);
                        });
                    }).catch(function (e) {
                        call(e);
                    });
                },
                tables: function (_data, call) {
                    var isEmtyList = true;
                    _this.app.run.then(function (status) {
                        var _com = static_1.sys_session.Get(_this.app["option"]["option"]["user"]);
                        if (!_com)
                            throw { status: false, code: 6089, message: "SESSION_FAILED" };
                        if (!_com.permission["LIST"])
                            throw { status: false, code: 1989, message: "NO_PERMISSION" };
                        if (static_1.sys_ram_db.table.size <= 0)
                            throw { status: false, code: 4139, message: "ZERO_TABLE" };
                        static_1.sys_ram_db.table.forEach(function (__ld) {
                            if (__ld.db === _data.database || _data.database == "*") {
                                isEmtyList = false;
                                call(__ld);
                            }
                        });
                    }).finally(function () {
                        if (isEmtyList)
                            throw { status: false, code: 2844, message: "NO_TABLE_IN_DATABASE" };
                    }).catch(function (e) {
                        call(e);
                    });
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    return DB_COM_LIST;
}());
exports.DB_COM_LIST = DB_COM_LIST;
/*
    LIST DATABASE
    LIST TABLE <DATABASE_NAME>
*/ 
//# sourceMappingURL=list.js.map