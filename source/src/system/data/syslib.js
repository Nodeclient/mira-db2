"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SYS_BYTE = exports.SYS_CAT = void 0;
var crypto = __importStar(require("crypto"));
var static_1 = require("./static");
var SYS_CAT = /** @class */ (function () {
    function SYS_CAT() {
        this.encodetype = process.env.FILE_ENCODE || 'binary';
        this.encodEnvironment = process.env.FILE_HEADER || String(static_1.sys_app.header).concat(" ").concat(static_1.sys_app.signature);
    }
    SYS_CAT.prototype.binary = function (_source) {
        var data = crypto.createCipheriv('aes-256-ctr', crypto.createHash('sha256').update('bin').digest(), Buffer.from(crypto.createHash('md5').update(static_1.sys_app.signature).digest("hex").slice(0, 16)));
        var _result = String(this.encodEnvironment).concat(data.update(_source, 'utf8', this.encodetype));
        return _result += data.final('binary');
    };
    SYS_CAT.prototype.source = function (_source) {
        var data = crypto.createDecipheriv('aes-256-ctr', crypto.createHash('sha256').update('bin').digest(), Buffer.from(crypto.createHash('md5').update(static_1.sys_app.signature).digest("hex").slice(0, 16)));
        var _result = data.update(_source.slice(String(this.encodEnvironment).length), this.encodetype, 'utf8');
        if (_source.slice(0, String(this.encodEnvironment).length) == String(this.encodEnvironment)) {
            return _result += data.final('utf8');
        }
        else {
            return false;
        }
    };
    return SYS_CAT;
}());
exports.SYS_CAT = SYS_CAT;
var SYS_BYTE = /** @class */ (function () {
    function SYS_BYTE() {
        this.byte = function (a_) {
            if (typeof a_ == "string") {
                return new Uint8Array(Buffer.from(a_)).join(",");
            }
            else if (typeof a_ == "object") {
                return new Uint8Array(Buffer.from(JSON.stringify(a_))).join(",");
            }
            else {
                var msg_ = { status: false, code: 271, message: "UNKNOW_TYPE" };
                return msg_;
            }
        };
        this.source = function (a_, obj_) {
            try {
                var s_ = (String(a_).split(","));
                var result_ = Buffer.from(new Uint8Array(s_)).toString("utf-8");
                return (obj_ == true) ? JSON.parse(result_) : result_;
            }
            catch (e) {
                var msg_ = { status: false, code: 271, message: "UNKNOW_TYPE" };
                return msg_;
            }
        };
    }
    return SYS_BYTE;
}());
exports.SYS_BYTE = SYS_BYTE;
//# sourceMappingURL=syslib.js.map