"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_COM_SELECT = void 0;
var static_1 = require("../../data/static");
var builder_1 = require("../../data/builder");
var DB_COM_SELECT = /** @class */ (function () {
    function DB_COM_SELECT(_option) {
        this.app = _option;
        this.Obuild = new static_1.OptBuilder;
    }
    Object.defineProperty(DB_COM_SELECT.prototype, "select", {
        get: function () {
            var _this = this;
            return {
                table: function (_name) {
                    return {
                        all: (function (call) {
                            _this.app.run.then(function (status) {
                                var _com = static_1.sys_session.Get(_this.app["option"]["option"]["user"]);
                                if (!_com)
                                    throw { status: false, code: 6089, message: "SESSION_FAILED" };
                                if (!_com.permission["SELECT"])
                                    throw { status: false, code: 1989, message: "NO_PERMISSION" };
                                if (!static_1.sys_dba.toArray(_name))
                                    throw { status: false, code: 3081, message: "NULL_ARRAY" };
                                if (static_1.sys_dba.toEscape(_name === null || _name === void 0 ? void 0 : _name.join("")) > 0) {
                                    throw ({ status: false, code: 3511, message: "INVALID_CHARACTER" });
                                }
                                ;
                                var __dbname = _this.app["option"]["option"]["database"];
                                var __map = Array.from(static_1.sys_ram_db.table, function (_a) {
                                    var name = _a[0], value = _a[1];
                                    return ({ value: value }).value;
                                });
                                var __for = new static_1.forEach(10);
                                var __procID = (0, static_1.sha256)(String("all").concat("".concat(Date.now())));
                                var __procDB = {};
                                __procDB[__procID + "c"] = 0;
                                __for.forEach(__map, function (index, item) {
                                    var _loop_1 = function (iterator) {
                                        __procDB[__procID + "c"]++;
                                        if (item.table == iterator && item.db == __dbname) {
                                            var __flds_1 = String(item.fields || "").split(",");
                                            var __opt = _this.Obuild.Object(item["option"]);
                                            var __fileList = static_1.sys_dba.TableOption().files(__opt);
                                            __procDB[__procID + "bool"] = true;
                                            __procDB[__procID + iterator] = {};
                                            __fileList.forEach(function (__itm) {
                                                new builder_1.SYS_TB_READER(_this.app["option"], __itm).load(function (__s, __f, __d) {
                                                    if (__f) {
                                                        __flds_1.forEach(function (_rs) {
                                                            var _a;
                                                            __procDB[__procID + iterator][_rs] = ((_a = static_1.sys_dba.field(_rs, __f)) === null || _a === void 0 ? void 0 : _a[1]) || undefined;
                                                        });
                                                        if (_name.length > 0) {
                                                            var _addnw = Object.create({});
                                                            _addnw[iterator] = __procDB[__procID + iterator];
                                                            call(_addnw);
                                                        }
                                                    }
                                                });
                                            });
                                        }
                                        else if (!__procDB[__procID + "bool"] && __procDB[__procID + "c"] == __map.length) {
                                            throw ({ status: false, code: 3081, message: "TABLE_NOT_FOUND" });
                                        }
                                    };
                                    for (var _i = 0, _name_1 = _name; _i < _name_1.length; _i++) {
                                        var iterator = _name_1[_i];
                                        _loop_1(iterator);
                                    }
                                });
                            }).catch(function (e) {
                                call(e);
                            });
                        }),
                        column: (function (_column, call) {
                            _this.app.run.then(function (status) {
                                var __for = new static_1.forEach(10);
                                var _com = static_1.sys_session.Get(_this.app["option"]["option"]["user"]);
                                if (!_com)
                                    throw { status: false, code: 6089, message: "SESSION_FAILED" };
                                if (!_com.permission["SELECT"])
                                    throw { status: false, code: 1989, message: "NO_PERMISSION" };
                                if (!static_1.sys_dba.toArray(_name))
                                    throw { status: false, code: 3081, message: "NULL_ARRAY" };
                                if (!static_1.sys_dba.toArray(_column))
                                    throw { status: false, code: 3081, message: "NULL_ARRAY" };
                                if (static_1.sys_dba.toEscape(_name === null || _name === void 0 ? void 0 : _name.join("")) > 0) {
                                    throw ({ status: false, code: 3511, message: "INVALID_CHARACTER" });
                                }
                                ;
                                var __dbname = _this.app["option"]["option"]["database"];
                                var __map = Array.from(static_1.sys_ram_db.table, function (_a) {
                                    var name = _a[0], value = _a[1];
                                    return ({ value: value }).value;
                                });
                                var __procID = (0, static_1.sha256)(String("all").concat("".concat(Date.now())));
                                var __procDB = {};
                                __procDB[__procID + "bool2"] = false;
                                __for.forEach(__map, function (index, item, _stu) {
                                    var _loop_2 = function (iterator) {
                                        if (item.table == iterator && item.db == __dbname) {
                                            var __flds_2 = _column;
                                            var __opt = _this.Obuild.Object(item["option"]);
                                            var __fileList = static_1.sys_dba.TableOption().files(__opt);
                                            __procDB[__procID + "bool2"] = true;
                                            __procDB[__procID + "bool"] = false;
                                            __procDB[__procID + iterator] = {};
                                            __fileList.forEach(function (__itm) {
                                                new builder_1.SYS_TB_READER(_this.app["option"], __itm).load(function (__s, __f, __d) {
                                                    if (__s.code == 100 && !__procDB[__procID + "bool"]) {
                                                        throw ({ status: false, code: 3081, message: "COLUMN_NAME_NOT_FOUND" });
                                                    }
                                                    if (__f) {
                                                        var _addnw_1 = Object.create({});
                                                        Promise.all(__flds_2).then(function (__i) {
                                                            __i.forEach(function (_rs) {
                                                                var _a;
                                                                if (String(item.fields).indexOf(_rs) != -1) {
                                                                    __procDB[__procID + "bool"] = true;
                                                                    __procDB[__procID + iterator][_rs] = ((_a = static_1.sys_dba.field(_rs, __f)) === null || _a === void 0 ? void 0 : _a[1]) || undefined;
                                                                }
                                                            });
                                                            if (static_1.sys_dba.isObjectEmpty(__procDB[__procID + iterator])) {
                                                                _addnw_1[iterator] = __procDB[__procID + iterator];
                                                                call(_addnw_1);
                                                            }
                                                        }).finally(function () {
                                                            _addnw_1[iterator] = {};
                                                        }).catch(function (e) { });
                                                    }
                                                });
                                            });
                                        }
                                        else if (_stu.code == 1 && !__procDB[__procID + "bool2"]) {
                                            throw { status: false, code: 6681, message: "TABLE_NOT_FOUND" };
                                        }
                                    };
                                    for (var _i = 0, _name_2 = _name; _i < _name_2.length; _i++) {
                                        var iterator = _name_2[_i];
                                        _loop_2(iterator);
                                    }
                                });
                            }).catch(function (e) {
                                call(e);
                            });
                        }),
                        count: (function (call) {
                            _this.app.run.then(function (status) {
                                // var __for: forEach = new forEach(10);
                                var _com = static_1.sys_session.Get(_this.app["option"]["option"]["user"]);
                                if (!_com)
                                    throw { status: false, code: 6089, message: "SESSION_FAILED" };
                                if (!_com.permission["SELECT"])
                                    throw { status: false, code: 1989, message: "NO_PERMISSION" };
                                if (!static_1.sys_dba.toArray(_name))
                                    throw { status: false, code: 3081, message: "NULL_ARRAY" };
                                if (static_1.sys_dba.toEscape(_name === null || _name === void 0 ? void 0 : _name.join("")) > 0) {
                                    throw ({ status: false, code: 3511, message: "INVALID_CHARACTER" });
                                }
                                ;
                                var __dbname = _this.app["option"]["option"]["database"];
                                var __procID = (0, static_1.sha256)(String("all").concat("".concat(Date.now())));
                                var __procDB = {};
                                __procDB[__procID + "done"] = 0;
                                __procDB[__procID + "i"] = 0;
                                var done = setTimeout(function () {
                                    call(__procDB[__procID + "i"]);
                                }, 100);
                                static_1.sys_ram_db.table.forEach(function (item, index) {
                                    for (var _i = 0, _name_3 = _name; _i < _name_3.length; _i++) {
                                        var iterator = _name_3[_i];
                                        __procDB[__procID + "done"]++;
                                        if (item.table == iterator && item.db == __dbname) {
                                            var __opt = _this.Obuild.Object(item["option"]);
                                            var __j = static_1.sys_dba.TableOption().files(__opt);
                                            __j.forEach(function (item, _ind) {
                                                new builder_1.SYS_TB_READER(_this.app["option"], item).load(function (__s, __f, __d) {
                                                    if (__f) {
                                                        __procDB[__procID + "i"]++;
                                                    }
                                                });
                                                done.refresh();
                                            });
                                            __procDB[__procID + "done"] = 0;
                                        }
                                        else if (static_1.sys_ram_db.table.size == __procDB[__procID + "done"]) {
                                            throw ({ status: false, code: 3511, message: "DATABASE_OR_TABLE_NOT_FOUND" });
                                        }
                                    }
                                });
                            }).catch(function (e) {
                                call(e);
                            });
                        }),
                        limit: (function (_range, call) {
                            _this.app.run.then(function (status) {
                                if (!Object(_range).hasOwnProperty("start") && !Object(_range).hasOwnProperty("end"))
                                    throw { status: false, code: 3081, message: "NULL_QERY" };
                                ;
                                var _com = static_1.sys_session.Get(_this.app["option"]["option"]["user"]);
                                if (!_com)
                                    throw { status: false, code: 6089, message: "SESSION_FAILED" };
                                if (!_com.permission["SELECT"])
                                    throw { status: false, code: 1989, message: "NO_PERMISSION" };
                                if (!static_1.sys_dba.toArray(_name))
                                    throw { status: false, code: 3081, message: "NULL_ARRAY" };
                                if (static_1.sys_dba.toEscape(_name === null || _name === void 0 ? void 0 : _name.join("")) > 0) {
                                    throw ({ status: false, code: 3511, message: "INVALID_CHARACTER" });
                                }
                                ;
                                if (!static_1.sys_dba.toType(_range.start, "number") || !static_1.sys_dba.toType(_range.end, "number"))
                                    throw { status: false, code: 5510, message: "INVALID_LIMIT_NUMBER" };
                                var __dbname = _this.app["option"]["option"]["database"];
                                var __procID = (0, static_1.sha256)(String("all").concat("".concat(Date.now())));
                                var __procDB = {};
                                var __map = Array.from(static_1.sys_ram_db.table, function (_a) {
                                    var name = _a[0], value = _a[1];
                                    return ({ value: value }).value;
                                });
                                var __for = new static_1.forEach(10);
                                __procDB[__procID + "bool"] = false;
                                __procDB[__procID + "i"] = 0;
                                __procDB[__procID + "obj"] = {};
                                __for.forEach(__map, function (index, item, _stu) {
                                    var _loop_3 = function (iterator) {
                                        if (item.table == iterator && item.db == __dbname) {
                                            var __flds_3 = String(item.fields || "").split(",");
                                            var __opt = _this.Obuild.Object(item["option"]);
                                            var __fileList = static_1.sys_dba.TableOption().files(__opt);
                                            __procDB[__procID + "bool"] = true;
                                            __fileList.forEach(function (__itm) {
                                                new builder_1.SYS_TB_READER(_this.app["option"], __itm).load(function (__s, __f, __d) {
                                                    if (__f) {
                                                        __procDB[__procID + "i"]++;
                                                        if ((_range.start || 1) <= __procDB[__procID + "i"] && (_range.end || 1) >= __procDB[__procID + "i"]) {
                                                            Promise.all(__flds_3).then(function (__i) {
                                                                __i.forEach(function (_rs, _idx) {
                                                                    var _a;
                                                                    __procDB[__procID + "obj"][_rs] = (_a = static_1.sys_dba.field(_rs, __f)) === null || _a === void 0 ? void 0 : _a[1];
                                                                });
                                                                if (_name.length > 0) {
                                                                    var _addnw = Object.create({});
                                                                    _addnw["".concat(item.table)] = __procDB[__procID + "obj"];
                                                                    call(_addnw);
                                                                }
                                                            });
                                                        }
                                                    }
                                                });
                                            });
                                        }
                                        else if (_stu.code == 1 && !__procDB[__procID + "bool"]) {
                                            throw { status: false, code: 6681, message: "TABLE_NOT_FOUND" };
                                        }
                                    };
                                    for (var _i = 0, _name_4 = _name; _i < _name_4.length; _i++) {
                                        var iterator = _name_4[_i];
                                        _loop_3(iterator);
                                    }
                                });
                            }).catch(function (e) {
                                call(e);
                            });
                        })
                    };
                },
                find: function (_name) {
                    return {
                        equal: (function (_data, call) {
                            if (_data === void 0) { _data = {}; }
                            _this.app.run.then(function (status) {
                                var __for = new static_1.forEach(10);
                                var _com = static_1.sys_session.Get(_this.app["option"]["option"]["user"]);
                                if (!_com)
                                    throw { status: false, code: 6089, message: "SESSION_FAILED" };
                                if (!_com.permission["SELECT"])
                                    throw { status: false, code: 1989, message: "NO_PERMISSION" };
                                if (!static_1.sys_dba.toArray(_name))
                                    throw { status: false, code: 3081, message: "NULL_ARRAY" };
                                if (static_1.sys_dba.toEscape(_name === null || _name === void 0 ? void 0 : _name.join("")) > 0) {
                                    throw ({ status: false, code: 3511, message: "INVALID_CHARACTER" });
                                }
                                ;
                                var __dbname = _this.app["option"]["option"]["database"];
                                var __map = Array.from(static_1.sys_ram_db.table, function (_a) {
                                    var name = _a[0], value = _a[1];
                                    return ({ value: value }).value;
                                });
                                var __procID = (0, static_1.sha256)(String("all").concat("".concat(Date.now())));
                                var __procDB = {};
                                __for.forEach(__map, function (index, item, ___s) {
                                    var _loop_4 = function (iterator) {
                                        if (item.table == iterator && item.db == __dbname) {
                                            var __opt = _this.Obuild.Object(item["option"]);
                                            var __fileList = static_1.sys_dba.TableOption().files(__opt);
                                            var __flds_4 = String(item.fields || "").split(",");
                                            var propOwn_1 = Object.getOwnPropertyNames(_data);
                                            __fileList.forEach(function (__itm) {
                                                new builder_1.SYS_TB_READER(_this.app["option"], __itm).load(function (__s, __f, __d) {
                                                    if (__f) {
                                                        __procDB[__procID + "count"] = 0;
                                                        propOwn_1.forEach(function (_pn, _idx) {
                                                            var _a;
                                                            var _val2 = (_a = static_1.sys_dba.field(_pn, __f)) === null || _a === void 0 ? void 0 : _a[1];
                                                            if (_data[_pn] == _val2) {
                                                                __procDB[__procID + "count"]++;
                                                            }
                                                            if (propOwn_1.length - 1 == _idx) {
                                                                if (propOwn_1.length == __procDB[__procID + "count"]) {
                                                                    __procDB[__procID + "obj"] = {};
                                                                    Promise.all(__flds_4).then(function (__i) {
                                                                        __i.forEach(function (_rs, _idx) {
                                                                            var _a;
                                                                            __procDB[__procID + "obj"][_rs] = (_a = static_1.sys_dba.field(_rs, __f)) === null || _a === void 0 ? void 0 : _a[1];
                                                                        });
                                                                        if (_name.length > 0) {
                                                                            var _addnw = Object.create({});
                                                                            _addnw["".concat(item.table)] = __procDB[__procID + "obj"];
                                                                            __procDB[__procID + "bool"] = true;
                                                                            call(_addnw);
                                                                        }
                                                                    });
                                                                }
                                                                __procDB[__procID + "count"] = 0;
                                                            }
                                                        });
                                                    }
                                                });
                                            });
                                        }
                                    };
                                    for (var _i = 0, _name_5 = _name; _i < _name_5.length; _i++) {
                                        var iterator = _name_5[_i];
                                        _loop_4(iterator);
                                    }
                                });
                                return setTimeout(function () { if (typeof __procDB[__procID + "bool"] == "undefined")
                                    call({ status: false, code: 1989, message: "NO_MATCH" }); }, 100).refresh();
                            }).catch(function (e) {
                                call(e);
                            });
                        }),
                        like: (function (_data, call) {
                            if (_data === void 0) { _data = {}; }
                            _this.app.run.then(function (status) {
                                var _com = static_1.sys_session.Get(_this.app["option"]["option"]["user"]);
                                if (!_com)
                                    throw { status: false, code: 6089, message: "SESSION_FAILED" };
                                if (!_com.permission["SELECT"])
                                    throw { status: false, code: 1989, message: "NO_PERMISSION" };
                                if (!static_1.sys_dba.toArray(_name))
                                    throw { status: false, code: 3081, message: "NULL_ARRAY" };
                                if (static_1.sys_dba.toEscape(_name === null || _name === void 0 ? void 0 : _name.join("")) > 0) {
                                    throw ({ status: false, code: 3511, message: "INVALID_CHARACTER" });
                                }
                                ;
                                var __dbname = _this.app["option"]["option"]["database"];
                                var __map = Array.from(static_1.sys_ram_db.table, function (_a) {
                                    var name = _a[0], value = _a[1];
                                    return ({ value: value }).value;
                                });
                                var __procID = (0, static_1.sha256)(String("all").concat("".concat(Date.now())));
                                var __procDB = {};
                                var __for = new static_1.forEach(10);
                                __for.forEach(__map, function (index, item, ___s) {
                                    var _loop_5 = function (iterator) {
                                        if (item.table == iterator && item.db == __dbname) {
                                            var __opt = _this.Obuild.Object(item["option"]);
                                            var __fileList = static_1.sys_dba.TableOption().files(__opt);
                                            var __flds_5 = String(item.fields || "").split(",");
                                            var propOwn_2 = Object.getOwnPropertyNames(_data);
                                            __fileList.forEach(function (__itm) {
                                                new builder_1.SYS_TB_READER(_this.app["option"], __itm).load(function (__s, __f, __d) {
                                                    if (__f) {
                                                        __procDB[__procID + "count"] = 0;
                                                        propOwn_2.forEach(function (_pn, _idx) {
                                                            var _a;
                                                            var _val2 = (_a = static_1.sys_dba.field(_pn, __f)) === null || _a === void 0 ? void 0 : _a[1];
                                                            if (String(_val2).indexOf(String(_data[_pn])) != -1) {
                                                                __procDB[__procID + "count"]++;
                                                            }
                                                            if (propOwn_2.length - 1 == _idx) {
                                                                if (propOwn_2.length == __procDB[__procID + "count"]) {
                                                                    __procDB[__procID + "obj"] = {};
                                                                    Promise.all(__flds_5).then(function (__i) {
                                                                        __i.forEach(function (_rs, _idx) {
                                                                            var _a;
                                                                            __procDB[__procID + "obj"][_rs] = (_a = static_1.sys_dba.field(_rs, __f)) === null || _a === void 0 ? void 0 : _a[1];
                                                                        });
                                                                        if (_name.length > 0) {
                                                                            var _addnw = Object.create({});
                                                                            _addnw["".concat(item.table)] = __procDB[__procID + "obj"];
                                                                            __procDB[__procID + "bool"] = true;
                                                                            call(_addnw);
                                                                        }
                                                                    });
                                                                }
                                                                __procDB[__procID + "count"] = 0;
                                                            }
                                                        });
                                                    }
                                                });
                                            });
                                        }
                                    };
                                    for (var _i = 0, _name_6 = _name; _i < _name_6.length; _i++) {
                                        var iterator = _name_6[_i];
                                        _loop_5(iterator);
                                    }
                                });
                                return setTimeout(function () { if (typeof __procDB[__procID + "bool"] == "undefined")
                                    call({ status: false, code: 1989, message: "NO_MATCH" }); }, 100).refresh();
                            }).catch(function (e) {
                                call(e);
                            });
                        })
                    };
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    return DB_COM_SELECT;
}());
exports.DB_COM_SELECT = DB_COM_SELECT;
/*
    SELECT TABLE <TABLE_NAME> LIMIT ["1","5"]
    SELECT TABLE <TABLE_NAME> COLUMN ["COL1"] FIND ["SEARCH_STRING"]
    SELECT TABLE <TABLE_NAME> COLUMN ["COL1"] FIND ["SEARCH_STRING"] LIKE
*/ 
//# sourceMappingURL=select.js.map