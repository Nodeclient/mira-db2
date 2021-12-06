"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sys_dba = exports.db_default_admin = exports.sys_ram_db = void 0;
exports.sys_ram_db = {
    user: new Map(),
    table: new Map(),
    database: new Map()
};
exports.db_default_admin = {
    id: "1",
    user: "local", pass: "",
    permission: '{ SELECT: true, ADD: true, UNIQUE: true, UPDATE: true, RENAME: true, DROP: true, DELETE: true, CREATE: true, LIST: true }',
    option: '{ ip:"127.0.0.1", mode:"rw-" }'
};
exports.sys_dba = {
    bin: { blob: "", tag: "data" },
    StringByte: function (__obj) {
        try {
            return (typeof __obj == "object") ? String(JSON.stringify(__obj)).length : String(__obj).length;
        }
        catch (e) {
            return 0;
        }
        ;
    },
    isKeyExist: function (_data, _name) {
        try {
            return _data.hasOwnProperty(_name || undefined);
        }
        catch (error) {
            return false;
        }
    },
    isObjectEmpty: function (__obj) {
        try {
            return (Object.keys(__obj).shift()) ? true : false;
        }
        catch (e) {
            return false;
        }
        ;
    },
    toObject: function (__obj) {
        try {
            return eval('(' + __obj + ')');
        }
        catch (e) {
            return {};
        }
        ;
    },
    TableOption: function () {
        try {
            return {
                column: function (__Query_Obj, __Table_Obj) {
                    var _ccel = Object.keys(__Query_Obj) || {};
                    var _extCells = _ccel.filter(function (_val) { return ((__Table_Obj.fields.length > 1 ? __Table_Obj.fields.split(",") : []).indexOf(_val) != -1); }).toString();
                    return _extCells.length > 0 ? _extCells = _extCells.split(",") : _extCells = [];
                }, field: function (__obj) {
                    return (String(__obj.fields).length > 0) ? String(__obj.fields).split(",") : [];
                }, files: function (__obj) {
                    return String(__obj.file).concat((__obj.part.length > 0 ? "," : "")).concat(__obj.part.join(",")).split(",");
                }
            };
        }
        catch (e) {
            return { column: [], field: [], files: [] };
        }
        ;
    },
    toNumber: function (a, b) {
        if (Buffer.from(String(a)).length < Buffer.from(String(b)).length) {
            var z = "";
            for (var i = Buffer.from(String(a)).length; i < Buffer.from(String(b)).length; i++) {
                z += "0";
            }
            return z.concat(a);
        }
        return String(a);
    },
    toType: function (_data, _type) {
        return (_type == "array") ? Array.isArray(_data) : (typeof _data === _type) ? true : false;
    },
    toEscape: function (_data) {
        var _a;
        return ((_a = String(_data).match(/[\s|\r|\n|"|'|.|*|<|>|,|!|+|%|&|/|(|)|=|?|\/|~|;]/gi)) === null || _a === void 0 ? void 0 : _a.length) || 0;
    },
    toArray: function (_data) {
        if (Array.isArray(_data) == true) {
            return (_data.length > 0 ? true : false);
        }
        else {
            return false;
        }
        ;
    },
    read_block: function (_s, _source) {
        if (_source)
            return new RegExp("^<".concat(_s, ">(.*?)</").concat(_s, ">"), "im").exec(_source);
    },
    field: function (_s, _source) {
        if (_source)
            return new RegExp("<".concat(_s, ">(.*?)</").concat(_s, ">"), "mi").exec(_source);
    },
    creat_super_string: function (_s) {
        return String("<data>")
            .concat("<user>").concat(_s.user).concat("</user>")
            .concat("<pass>").concat(_s.pass).concat("</pass>")
            .concat("<permission>").concat(_s.permission).concat("</permission>")
            .concat("<option>").concat(_s.option).concat("</option>")
            .concat("</data>").concat("\r");
    },
    creat_data_string: function (_n) {
        return String("<data>")
            .concat("<name>").concat(_n.name).concat("</name>")
            .concat("<encoding>").concat(_n.encoding).concat("</encoding>")
            .concat("<access>").concat(_n.access).concat("</access>")
            .concat("<option>").concat(_n.option).concat("</option>")
            .concat("</data>").concat("\r");
    },
    creat_table_string: function (_g) {
        return String("<data>")
            .concat("<auto_index>").concat(_g.index).concat("</auto_index>")
            .concat("<db>").concat(_g.db).concat("</db>")
            .concat("<table>").concat(_g.table).concat("</table>")
            .concat("<fields>").concat(_g.fields).concat("</fields>")
            .concat("<option>").concat(_g.option).concat("</option>")
            .concat("<date>").concat(_g.date).concat("</date>")
            .concat("</data>").concat("\r");
    }
};
//# sourceMappingURL=0x11DB89.js.map