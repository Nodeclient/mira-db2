"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sys_writing = exports.SYS_FILE_S = exports.SYS_PATH = void 0;
exports.SYS_PATH = require("path");
// export const SYS_FILE_S = require("fs");
var SYS_FILE_S = /** @class */ (function () {
    function SYS_FILE_S() {
        this.fs = require("fs");
    }
    SYS_FILE_S.prototype.write = function (fileName, Str) {
        try {
            require("fs").writeFileSync(fileName, Str);
            return true;
        }
        catch (error) {
            return false;
        }
    };
    SYS_FILE_S.prototype.append = function (fileName, Str) {
        try {
            require("fs").appendFileSync(fileName, Str);
            return true;
        }
        catch (error) {
            return false;
        }
    };
    return SYS_FILE_S;
}());
exports.SYS_FILE_S = SYS_FILE_S;
exports.sys_writing = { blob: "" };
;
//# sourceMappingURL=0x20FL15.js.map