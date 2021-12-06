"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACC_SESSION = exports.ACC_PERM = void 0;
/**
* Create a random Guid.
* @param [fn='A no-op function']
* @param [exact=1]
* @classdesc {ACC_PERM} a random guid value.
*/
var ACC_PERM = /** @class */ (function () {
    function ACC_PERM() {
        this.ptypeObj = { SELECT: true, ADD: true, UNIQUE: true, UPDATE: true, RENAME: true, DROP: true, DELETE: true, CREATE: true, LIST: true };
    }
    Object.defineProperty(ACC_PERM.prototype, "permissions", {
        get: function () {
            return this.ptypeObj;
        },
        set: function (_obj) {
            this.ptypeObj = {
                SELECT: (typeof _obj.SELECT != "undefined" ? _obj.SELECT : true),
                ADD: (typeof _obj.ADD != "undefined" ? _obj.ADD : true),
                UNIQUE: (typeof _obj.UNIQUE != "undefined" ? _obj.UNIQUE : true),
                UPDATE: (typeof _obj.UPDATE != "undefined" ? _obj.UPDATE : true),
                RENAME: (typeof _obj.RENAME != "undefined" ? _obj.RENAME : true),
                DROP: (typeof _obj.DROP != "undefined" ? _obj.DROP : true),
                DELETE: (typeof _obj.DELETE != "undefined" ? _obj.DELETE : true),
                CREATE: (typeof _obj.CREATE != "undefined" ? _obj.CREATE : true),
                LIST: (typeof _obj.LIST != "undefined" ? _obj.LIST : true)
            };
        },
        enumerable: false,
        configurable: true
    });
    return ACC_PERM;
}());
exports.ACC_PERM = ACC_PERM;
var ACC_SESSION = /** @class */ (function () {
    function ACC_SESSION() {
        this.sesObj = { session: [] };
    }
    Object.defineProperty(ACC_SESSION.prototype, "Sessions", {
        get: function () {
            return this.sesObj.session;
        },
        enumerable: false,
        configurable: true
    });
    ACC_SESSION.prototype.Live = function (_ses) {
        var _this = this;
        var _sestmp = false;
        Promise.all(this.sesObj.session).then(function (__i) {
            __i.map(function (any) {
                if (any[1].user === _ses.user) {
                    _sestmp = true;
                }
            });
        }).finally(function () {
            var _a;
            if (!_sestmp)
                (_a = _this.sesObj.session) === null || _a === void 0 ? void 0 : _a.push(_ses);
        });
    };
    ACC_SESSION.prototype.Exit = function (_user) {
        var _this = this;
        var _a;
        (_a = this.sesObj.session) === null || _a === void 0 ? void 0 : _a.forEach(function (_run, _index) {
            var _a;
            (_run.user === _user ? (_a = _this.sesObj.session) === null || _a === void 0 ? void 0 : _a.splice(_index, 1) : false);
        });
    };
    ACC_SESSION.prototype.Get = function (_user) {
        for (var x = 0; x < this.sesObj.session.length; x++) {
            var item = this.sesObj.session[x];
            if (item.user === _user) {
                return item;
            }
            else {
                return false;
            }
        }
    };
    return ACC_SESSION;
}());
exports.ACC_SESSION = ACC_SESSION;
//# sourceMappingURL=access.js.map