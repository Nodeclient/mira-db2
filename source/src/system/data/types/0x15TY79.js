"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sys_field_function = void 0;
exports.sys_field_function = {
    BIT: function (_s) {
        return (typeof _s == "string") ? Buffer.from(_s).length : Buffer.from(JSON.stringify(_s)).length;
    },
    BIT_32: function (_s) {
        var _n = (typeof _s == "string") ? Buffer.from(_s).length : Buffer.from(JSON.stringify(_s)).length;
        return (_n <= 32) ? true : false;
    },
    BIT_64: function (_s) {
        var _n = (typeof _s == "string") ? Buffer.from(_s).length : Buffer.from(JSON.stringify(_s)).length;
        return (_n <= 64) ? true : false;
    },
    BIT_128: function (_s) {
        var _n = (typeof _s == "string") ? Buffer.from(_s).length : Buffer.from(JSON.stringify(_s)).length;
        return (_n <= 128) ? true : false;
    },
    BIT_256: function (_s) {
        var _n = (typeof _s == "string") ? Buffer.from(_s).length : Buffer.from(JSON.stringify(_s)).length;
        return (_n <= 256) ? true : false;
    },
    BIT_512: function (_s) {
        var _n = (typeof _s == "string") ? Buffer.from(_s).length : Buffer.from(JSON.stringify(_s)).length;
        return (_n <= 512) ? true : false;
    },
    BIT_1024: function (_s) {
        var _n = (typeof _s == "string") ? Buffer.from(_s).length : Buffer.from(JSON.stringify(_s)).length;
        return (_n <= 1024) ? true : false;
    },
    BIT_2048: function (_s) {
        var _n = (typeof _s == "string") ? Buffer.from(_s).length : Buffer.from(JSON.stringify(_s)).length;
        return (_n <= 2048) ? true : false;
    },
    string: function (_s) {
        return (typeof _s == "string") ? true : false;
    },
    number: function (_s) {
        return (typeof _s == "number") ? true : false;
    },
    blob: function (_s) {
        return (Buffer.isBuffer(_s)) ? true : false;
    },
    object: function (_s) {
        return (typeof _s == "object") ? true : false;
    },
    boolean: function (_s) {
        return (typeof _s == "boolean") ? true : false;
    },
    bigint: function (_s) {
        return (typeof _s == "bigint") ? true : false;
    },
    IsEmpty: function (_s) {
        return (Buffer.from(_s).length > 0 && typeof _s != "undefined") ? false : true;
    },
    IsTimeStamp: function (_s) {
        return (typeof _s == "number" && String(_s).length == 13) ? true : false;
    }
};
//# sourceMappingURL=0x15TY79.js.map