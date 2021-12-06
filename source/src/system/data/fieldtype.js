"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SYS_MODAL_TYPE = void 0;
var static_1 = require("./static");
var SYS_MODAL_TYPE = /** @class */ (function () {
    function SYS_MODAL_TYPE() {
        this.Default_type = { types: {} };
    }
    Object.defineProperty(SYS_MODAL_TYPE.prototype, "static", {
        // public table: ACC_PERM = new ACC_PERM;
        get: function () { return this.Default_type; },
        set: function (_t) {
            try {
                this.Default_type = _t;
            }
            catch (error) {
                this.Default_type = { types: {} };
            }
        },
        enumerable: false,
        configurable: true
    });
    SYS_MODAL_TYPE.prototype.newModel = function (_su, _typ, call) {
        var _getObj = Object(this.Default_type);
        var _IsDone = true;
        for (var k in _getObj) {
            if (Object.prototype.hasOwnProperty.call(_getObj, _typ)) {
                var _items = Object.keys(_getObj[_typ]);
                Promise.all(_items).then(function (loop) {
                    loop.map(function (item) {
                        switch (item) {
                            case "IsTimeStamp":
                                try {
                                    for (var _i = 0, _a = _getObj[_typ][item]; _i < _a.length; _i++) {
                                        var cell = _a[_i];
                                        if (Object(_su).hasOwnProperty(cell)) {
                                            if (!static_1.sys_field_function.IsTimeStamp(Object(_su)[cell])) {
                                                _IsDone = false;
                                                throw (new static_1.SYS_MSG().Messsage("02x52k32"));
                                            }
                                        }
                                        else {
                                            _IsDone = false;
                                            throw (new static_1.SYS_MSG().Messsage("02x12k44"));
                                        }
                                    }
                                }
                                catch (error) {
                                    call(error);
                                }
                                break;
                            case "IsEmpty":
                                try {
                                    for (var _b = 0, _c = _getObj[_typ][item]; _b < _c.length; _b++) {
                                        var cell = _c[_b];
                                        if (Object(_su).hasOwnProperty(cell)) {
                                            if (static_1.sys_field_function.IsEmpty(Object(_su)[cell])) {
                                                _IsDone = false;
                                                throw (new static_1.SYS_MSG().Messsage("02x13k45"));
                                            }
                                        }
                                        else {
                                            _IsDone = false;
                                            throw (new static_1.SYS_MSG().Messsage("02x12k44"));
                                        }
                                    }
                                }
                                catch (error) {
                                    call(error);
                                }
                                break;
                            case "bit32":
                                try {
                                    var _arr = _getObj[_typ][item];
                                    for (var _d = 0, _arr_1 = _arr; _d < _arr_1.length; _d++) {
                                        var cell = _arr_1[_d];
                                        if (Object(_su).hasOwnProperty(cell)) {
                                            if (!static_1.sys_field_function.BIT_32(Object(_su)[cell])) {
                                                _IsDone = false;
                                                throw (new static_1.SYS_MSG().Messsage("02x23k56"));
                                            }
                                        }
                                        else {
                                            _IsDone = false;
                                            throw (new static_1.SYS_MSG().Messsage("02x12k44"));
                                        }
                                    }
                                }
                                catch (error) {
                                    call(error);
                                }
                                break;
                            case "bit64":
                                try {
                                    for (var _e = 0, _f = _getObj[_typ][item]; _e < _f.length; _e++) {
                                        var cell = _f[_e];
                                        if (Object(_su).hasOwnProperty(cell)) {
                                            if (!static_1.sys_field_function.BIT_128(Object(_su)[cell])) {
                                                _IsDone = false;
                                                throw (new static_1.SYS_MSG().Messsage("02x43k63"));
                                            }
                                        }
                                        else {
                                            throw (new static_1.SYS_MSG().Messsage("02x12k44"));
                                        }
                                    }
                                }
                                catch (error) {
                                    call(error);
                                }
                                break;
                            case "bit128":
                                try {
                                    for (var _g = 0, _h = _getObj[_typ][item]; _g < _h.length; _g++) {
                                        var cell = _h[_g];
                                        if (Object(_su).hasOwnProperty(cell)) {
                                            if (!static_1.sys_field_function.BIT_128(Object(_su)[cell])) {
                                                _IsDone = false;
                                                throw (new static_1.SYS_MSG().Messsage("02x55k22"));
                                            }
                                        }
                                        else {
                                            _IsDone = false;
                                            throw (new static_1.SYS_MSG().Messsage("02x12k44"));
                                        }
                                    }
                                }
                                catch (error) {
                                    call(error);
                                }
                                break;
                            case "bit256":
                                try {
                                    for (var _j = 0, _k = _getObj[_typ][item]; _j < _k.length; _j++) {
                                        var cell = _k[_j];
                                        if (Object(_su).hasOwnProperty(cell)) {
                                            if (!static_1.sys_field_function.BIT_256(Object(_su)[cell])) {
                                                _IsDone = false;
                                                throw (new static_1.SYS_MSG().Messsage("02x11k23"));
                                            }
                                        }
                                        else {
                                            _IsDone = false;
                                            throw (new static_1.SYS_MSG().Messsage("02x12k44"));
                                        }
                                    }
                                }
                                catch (error) {
                                    call(error);
                                }
                                break;
                            case "bit512":
                                try {
                                    for (var _l = 0, _m = _getObj[_typ][item]; _l < _m.length; _l++) {
                                        var cell = _m[_l];
                                        if (Object(_su).hasOwnProperty(cell)) {
                                            if (!static_1.sys_field_function.BIT_512(Object(_su)[cell])) {
                                                _IsDone = false;
                                                throw (new static_1.SYS_MSG().Messsage("02x51k13"));
                                            }
                                        }
                                        else {
                                            _IsDone = false;
                                            throw (new static_1.SYS_MSG().Messsage("02x12k44"));
                                        }
                                    }
                                }
                                catch (error) {
                                    call(error);
                                }
                                break;
                            case "bit1024":
                                try {
                                    for (var _o = 0, _p = _getObj[_typ][item]; _o < _p.length; _o++) {
                                        var cell = _p[_o];
                                        if (Object(_su).hasOwnProperty(cell)) {
                                            if (!static_1.sys_field_function.BIT_1024(Object(_su)[cell])) {
                                                _IsDone = false;
                                                throw (new static_1.SYS_MSG().Messsage("02x81k03"));
                                            }
                                        }
                                        else {
                                            _IsDone = false;
                                            throw (new static_1.SYS_MSG().Messsage("02x12k44"));
                                        }
                                    }
                                }
                                catch (error) {
                                    call(error);
                                }
                                break;
                            case "bit2048":
                                try {
                                    for (var _q = 0, _r = _getObj[_typ][item]; _q < _r.length; _q++) {
                                        var cell = _r[_q];
                                        if (Object(_su).hasOwnProperty(cell)) {
                                            if (!static_1.sys_field_function.BIT_2048(Object(_su)[cell])) {
                                                _IsDone = false;
                                                throw (new static_1.SYS_MSG().Messsage("02x45k04"));
                                            }
                                        }
                                        else {
                                            _IsDone = false;
                                            throw (new static_1.SYS_MSG().Messsage("02x12k44"));
                                        }
                                    }
                                }
                                catch (error) {
                                    call(error);
                                }
                                break;
                            case "string":
                                try {
                                    for (var _s = 0, _u = _getObj[_typ][item]; _s < _u.length; _s++) {
                                        var cell = _u[_s];
                                        if (Object(_su).hasOwnProperty(cell)) {
                                            if (!static_1.sys_field_function.string(Object(_su)[cell])) {
                                                _IsDone = false;
                                                throw (new static_1.SYS_MSG().Messsage("02x94k65"));
                                            }
                                        }
                                        else {
                                            _IsDone = false;
                                            throw (new static_1.SYS_MSG().Messsage("02x12k44"));
                                        }
                                    }
                                }
                                catch (error) {
                                    call(error);
                                }
                                break;
                            case "number":
                                try {
                                    for (var _v = 0, _w = _getObj[_typ][item]; _v < _w.length; _v++) {
                                        var cell = _w[_v];
                                        if (Object(_su).hasOwnProperty(cell)) {
                                            if (!static_1.sys_field_function.number(Object(_su)[cell])) {
                                                _IsDone = false;
                                                throw (new static_1.SYS_MSG().Messsage("02x52k32"));
                                            }
                                        }
                                        else {
                                            _IsDone = false;
                                            throw (new static_1.SYS_MSG().Messsage("02x12k44"));
                                        }
                                    }
                                }
                                catch (error) {
                                    call(error);
                                }
                                break;
                            case "object":
                                try {
                                    for (var _x = 0, _y = _getObj[_typ][item]; _x < _y.length; _x++) {
                                        var cell = _y[_x];
                                        if (Object(_su).hasOwnProperty(cell)) {
                                            if (!static_1.sys_field_function.object(Object(_su)[cell])) {
                                                _IsDone = false;
                                                throw (new static_1.SYS_MSG().Messsage("02x91k15"));
                                            }
                                        }
                                        else {
                                            _IsDone = false;
                                            throw (new static_1.SYS_MSG().Messsage("02x12k44"));
                                        }
                                    }
                                }
                                catch (error) {
                                    call(error);
                                }
                                break;
                            case "blob":
                                try {
                                    for (var _z = 0, _0 = _getObj[_typ][item]; _z < _0.length; _z++) {
                                        var cell = _0[_z];
                                        if (Object(_su).hasOwnProperty(cell)) {
                                            if (!static_1.sys_field_function.blob(Object(_su)[cell])) {
                                                _IsDone = false;
                                                throw (new static_1.SYS_MSG().Messsage("02x93k25"));
                                            }
                                        }
                                        else {
                                            _IsDone = false;
                                            throw (new static_1.SYS_MSG().Messsage("02x12k44"));
                                        }
                                    }
                                }
                                catch (error) {
                                    call(error);
                                }
                                break;
                            case "bigint":
                                try {
                                    for (var _1 = 0, _2 = _getObj[_typ][item]; _1 < _2.length; _1++) {
                                        var cell = _2[_1];
                                        if (Object(_su).hasOwnProperty(cell)) {
                                            if (!static_1.sys_field_function.bigint(Object(_su)[cell])) {
                                                _IsDone = false;
                                                throw (new static_1.SYS_MSG().Messsage("02x33k21"));
                                            }
                                        }
                                        else {
                                            _IsDone = false;
                                            throw (new static_1.SYS_MSG().Messsage("02x12k44"));
                                        }
                                    }
                                }
                                catch (error) {
                                    call(error);
                                }
                                break;
                            default:
                                _IsDone = false;
                                call(new static_1.SYS_MSG().Messsage("01x32e63"));
                                break;
                        }
                    });
                }).finally(function () {
                    if (_IsDone)
                        call(new static_1.SYS_MSG().Messsage("01x00e01"));
                });
            }
        }
    };
    return SYS_MODAL_TYPE;
}());
exports.SYS_MODAL_TYPE = SYS_MODAL_TYPE;
//# sourceMappingURL=fieldtype.js.map