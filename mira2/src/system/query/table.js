"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SYS_TABLE = void 0;
var static_1 = require("../data/static");
var SYS_TABLE = /** @class */ (function () {
    function SYS_TABLE(__opiton) {
        this.app = __opiton;
        this.encodetype = 'binary';
        this.encodEnvironment = "";
    }
    SYS_TABLE.prototype.CreateEmpty = function (__name) {
        try {
            var new_fl = static_1.SYS_PATH.join(this.app["option"]["location"], (0, static_1.sha256)(this.app["option"]["option"]["database"]), String(__name).concat(".".concat(static_1.sys_app.ext)));
            if (!new static_1.SYS_FILE_S().fs.existsSync(new_fl)) {
                new static_1.SYS_FILE_S().write(new_fl, '');
                return true;
            }
            return false;
        }
        catch (error) {
            return false;
        }
    };
    return SYS_TABLE;
}());
exports.SYS_TABLE = SYS_TABLE;
// public fileMode(__name: string) { }
//# sourceMappingURL=table.js.map