'use strict';
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
exports.DB_COM_SUPER = void 0;
var static_1 = require("../../data/static");
var DB_COM_SUPER = /** @class */ (function (_super) {
    __extends(DB_COM_SUPER, _super);
    function DB_COM_SUPER(_option) {
        var _this = _super.call(this) || this;
        _this.app = _option;
        _this.SuperDB = setTimeout(function () { _this.app.save(); }, 500);
        _this.SuperDB.unref();
        return _this;
    }
    Object.defineProperty(DB_COM_SUPER.prototype, "user", {
        get: function () {
            var _this = this;
            return {
                update: function (_ssa, call) {
                    _this.app.run.then(function (status) {
                        var us_Update = false;
                        _this.newModel(_ssa, "types", function (result) {
                            if (result.status) {
                                Promise.all(static_1.sys_ram_db.user).then(function (Iterator) {
                                    Iterator.map(function (any) {
                                        if (_ssa.user === any[1].user) {
                                            static_1.sys_ram_db.user.set(String(any[1].id), {
                                                id: any[1].id,
                                                user: _ssa.user,
                                                pass: _ssa.pass,
                                                permission: JSON.stringify(_ssa.permission),
                                                option: JSON.stringify(_ssa.option)
                                            });
                                            us_Update = true;
                                        }
                                    });
                                }).finally(function () {
                                    if (us_Update) {
                                        _this.app.save();
                                        call({ status: true, code: 100, message: "DONE" });
                                    }
                                    else {
                                        throw { status: false, code: 3107, message: "".concat(_ssa.user, " NOT_MATCHED") };
                                    }
                                }).catch(function (error) {
                                    call(error);
                                });
                            }
                            else {
                                call(result);
                            }
                        });
                    }).catch(function (e) {
                        call(e);
                    });
                },
                add: function (_ssa, call) {
                    _this.app.run.then(function (status) {
                        var us_ext = false;
                        _this.newModel(_ssa, "types", function (result) {
                            if (result.status) {
                                Promise.all(static_1.sys_ram_db.user).then(function (__onm) {
                                    __onm.map(function (any) { if (_ssa.user === any[1].user) {
                                        us_ext = true;
                                    } });
                                }).finally(function () {
                                    switch (us_ext) {
                                        case true:
                                            var _sys_msg = { status: false, code: 3252, message: "USER_EXIST" };
                                            call(_sys_msg);
                                            break;
                                        case false:
                                            var uin = static_1.sys_ram_db.user.size + 1;
                                            static_1.sys_ram_db.user.set(String(uin), {
                                                id: uin, user: _ssa.user, pass: _ssa.pass, permission: JSON.stringify(_ssa.permission), option: JSON.stringify(_ssa.option)
                                            });
                                            _this.app.save();
                                            call({ status: true, code: 100, message: "DONE" });
                                            break;
                                    }
                                }).catch(function (error) {
                                    call(error);
                                });
                            }
                            else {
                                call(result);
                            }
                        });
                    }).catch(function (e) {
                        call(e);
                    });
                },
                remove: function (_fdata, call) {
                    _this.app.run.then(function (status) {
                        try {
                            var _src = Object.keys(_fdata)[0];
                            var isRemove = false;
                            Promise.all(static_1.sys_ram_db.user).then(function (__imr) {
                                __imr.map(function (any) {
                                    var _res = Object(any[1]).hasOwnProperty(_src);
                                    if (_res) {
                                        if (Object(any[1])[_src] == Object(_fdata)[_src]) {
                                            static_1.sys_ram_db.user.delete(String(any[1].id));
                                            isRemove = true;
                                        }
                                    }
                                });
                            }).finally(function () {
                                if (isRemove) {
                                    _this.app.save();
                                    call({ status: true, code: 100, message: "DONE" });
                                    // new SYS_BUILD().sys_Build(this.app["option"]["location"], { type: "US" }, (status: any) => {
                                    //     if (status.code == 200) {
                                    //         var _sys_msg: sys_msg_type = { status: true, code: 100, message: "DONE" };
                                    //         call(_sys_msg);
                                    //     } else {
                                    //         call(status);
                                    //     }
                                    // });
                                }
                                else {
                                    var _sys_msg = { status: false, code: 3107, message: "NOT_EXIST" };
                                    call(_sys_msg);
                                }
                            }).catch(function (error) {
                                call(error);
                            });
                        }
                        catch (error) {
                            var _sys_msg = { status: false, code: 2144, message: error };
                            call(_sys_msg);
                        }
                    }).catch(function (e) {
                        call(e);
                    });
                },
                find: function (_fdata, call) {
                    _this.app.run.then(function (status) {
                        try {
                            var isEmpty = true;
                            var _src = Object.keys(_fdata)[0];
                            Promise.all(static_1.sys_ram_db.user).then(function (Iterator) {
                                Iterator.map(function (any) {
                                    var _res = Object(any[1]).hasOwnProperty(_src);
                                    if (_res) {
                                        if (Object(any[1])[_src] == Object(_fdata)[_src]) {
                                            isEmpty = false;
                                            call(any[1], false);
                                        }
                                    }
                                    else {
                                        throw { status: false, code: 1133, message: "".concat(_src, " NULL_PROPERTY") };
                                    }
                                });
                            }).finally(function () {
                                if (isEmpty) {
                                    call(false, { status: false, code: 1090, message: "EMPTY" });
                                }
                            }).catch(function (error) {
                                call(false, error);
                            });
                        }
                        catch (error) {
                            call(false, error);
                        }
                    }).catch(function (e) {
                        call(e);
                    });
                },
                list: function (call) {
                    _this.app.run.then(function (status) {
                        static_1.sys_ram_db.user.forEach(function (any, index) {
                            call(index, any);
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
    return DB_COM_SUPER;
}(static_1.SYS_MODAL_TYPE));
exports.DB_COM_SUPER = DB_COM_SUPER;
//# sourceMappingURL=super.js.map