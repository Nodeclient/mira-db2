"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sys_part_file = exports.sys_shared = void 0;
exports.sys_shared = new Map();
exports.sys_part_file = {
    check: function (__dest_file) {
        if (require("fs").existsSync(__dest_file)) {
            return require("fs").statSync(__dest_file);
        }
        else {
            return false;
        }
    }
};
//# sourceMappingURL=0x72SS10.js.map