"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SYS_MSG = void 0;
var static_1 = require("./static");
var SYS_MSG = /** @class */ (function () {
    function SYS_MSG(__l) {
        this.language = process.env.DB_LANGUAGE || static_1.sys_shared.get("lang") || (__l === null || __l === void 0 ? void 0 : __l.option.lang) || "en_US";
    }
    SYS_MSG.prototype.Messsage = function (a) {
        try {
            var __dr = static_1.SYS_PATH.join(__dirname, "..", "lang", String(this.language).concat(".json"));
            var lang_str = (new static_1.SYS_FILE_S().fs.existsSync(__dr) ? require(__dr) : {});
            if (lang_str.hasOwnProperty(a)) {
                return lang_str[a];
            }
            else {
                return { status: false, code: 0, message: "Unknow Language Code:".concat(a) };
            }
        }
        catch (error) {
            return error;
        }
    };
    return SYS_MSG;
}());
exports.SYS_MSG = SYS_MSG;
//# sourceMappingURL=returnmsg.js.map