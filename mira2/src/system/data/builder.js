"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SYS_BUILD = exports.SYS_TB_READER = void 0;
var static_1 = require("./static");
var syslib_1 = require("./syslib");
var SYS_TB_READER = /** @class */ (function () {
    function SYS_TB_READER(__opiton, __file) {
        this.setting = __opiton;
        this.chunk = { tag: "data" };
        this.table = __file;
        this.indexx = 0;
    }
    Object.defineProperty(SYS_TB_READER.prototype, "index", {
        get: function () {
            return this.indexx;
        },
        set: function (i) {
            this.indexx = i;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SYS_TB_READER.prototype, "path", {
        set: function (__op) {
            this.setting = __op.option;
            this.table = __op.file;
        },
        enumerable: false,
        configurable: true
    });
    SYS_TB_READER.prototype.load = function (call) {
        var _this = this;
        try {
            var __n = parseInt(this.setting["option"]["max_memory"]);
            var __g_1 = static_1.SYS_PATH.join(this.setting["location"], (0, static_1.sha256)(this.setting["option"]["database"]), "".concat(this.table, ".").concat(static_1.sys_app.ext));
            var __procID = (0, static_1.sha256)(String(this.table).concat("".concat(Date.now())));
            var __procDB = {};
            if (new static_1.SYS_FILE_S().fs.existsSync(__g_1)) {
                if (new static_1.SYS_FILE_S().fs.statSync(__g_1).size > 0) {
                    var readableStream_1 = new static_1.SYS_FILE_S().fs.createReadStream(__g_1, { highWaterMark: __n });
                    __procDB[__procID + "blob"] = "";
                    readableStream_1.on('data', function (fata) {
                        __procDB[__procID + "blob"] += fata.toString();
                        if (String(__procDB[__procID + "blob"]).indexOf("</".concat(_this.chunk.tag, ">")) > -1) {
                            readableStream_1.pause();
                            var block = __procDB[__procID + "blob"].slice(__procDB[__procID + "blob"].indexOf("<".concat(_this.chunk.tag, ">")), __procDB[__procID + "blob"].lastIndexOf("</".concat(_this.chunk.tag, ">")) + 7);
                            Promise.all(block.split(new RegExp("<".concat(_this.chunk.tag, ">(.*?)</").concat(_this.chunk.tag, ">"), "im"))).then(function (__in) {
                                __in.map(function (any) {
                                    if (any.length > 5) {
                                        call({ status: true, code: 1, message: "PART" }, any, false);
                                    }
                                });
                            }).finally(function () {
                                var part = __procDB[__procID + "blob"].slice(__procDB[__procID + "blob"].lastIndexOf("</".concat(_this.chunk.tag, ">")) + 7, __procDB[__procID + "blob"].length);
                                __procDB[__procID + "blob"] = part;
                                readableStream_1.resume();
                            }).catch(function (e) {
                                throw { status: false, code: 5450, message: "NO_FILE" };
                            });
                        }
                    });
                    readableStream_1.on('end', function () {
                        call({ status: true, code: 100, message: "DONE" }, false, __g_1);
                    });
                }
                else {
                    throw { status: false, code: 650, message: "ZERO_RECORD" };
                }
            }
            else {
                throw { status: false, code: 500, message: "FILE_NOT_EXIST" };
            }
        }
        catch (e) {
            call({ status: false, code: 680, message: e }, false, false);
        }
    };
    return SYS_TB_READER;
}());
exports.SYS_TB_READER = SYS_TB_READER;
var SYS_BUILD = /** @class */ (function () {
    function SYS_BUILD() {
        this.encodetype = 'utf8';
    }
    SYS_BUILD.prototype.field = function (_search, _source) {
        try {
            var _result = static_1.sys_dba.field(_search, _source);
            return _result[1];
        }
        catch (e) {
            return false;
        }
    };
    ;
    SYS_BUILD.prototype.sys_Read = function (_f, _t, call) {
        var ioq = new syslib_1.SYS_CAT();
        var readBinary = /** @class */ (function () {
            function readBinary(_directory, _sytype, _encode) {
                this.dir = _directory;
                this.enc = _encode;
                this.typ = _sytype;
                this.sys_reading = { blob: "", line: 1 };
            }
            readBinary.prototype.read = function (call) {
                var _this = this;
                if (new static_1.SYS_FILE_S().fs.existsSync(this.dir)) {
                    var reading = new static_1.SYS_FILE_S().fs.createReadStream(this.dir);
                    reading.on('data', function (blob) { return _this.sys_reading.blob += blob; });
                    reading.on("error", function (err) {
                        switch (_this.typ) {
                            case "TB":
                                call(-1, false, new static_1.SYS_MSG().Messsage("03x31k23"));
                                break;
                            case "DB":
                                call(-1, false, new static_1.SYS_MSG().Messsage("03x31k23"));
                                break;
                            case "US":
                                new SYS_BUILD().sys_dir_check(_f, function (_res) {
                                    if (_res) {
                                        static_1.sys_ram_db.user.set(String("1"), static_1.db_default_admin);
                                        call(_this.sys_reading.line, false, new static_1.SYS_MSG().Messsage("01x00e01"));
                                    }
                                    else {
                                        call(_this.sys_reading.line, false, new static_1.SYS_MSG().Messsage("03x31k24"));
                                    }
                                });
                                break;
                        }
                    });
                    reading.on("end", function () {
                        var _tmp = ioq.source(_this.sys_reading.blob.toString(_this.enc));
                        if (_tmp != false) {
                            var xarr = String(_tmp).split("\r");
                            for (var i in xarr) {
                                var data = static_1.sys_dba.read_block("data", xarr[i]);
                                if (data) {
                                    call(_this.sys_reading.line++, data[1], new static_1.SYS_MSG().Messsage("01x00e02"));
                                }
                            }
                            call(_this.sys_reading.line, false, new static_1.SYS_MSG().Messsage("01x00e01"));
                        }
                        else {
                            call(_this.sys_reading.line, false, new static_1.SYS_MSG().Messsage("03x31k25"));
                        }
                    });
                    reading.on('finish', function () {
                        call(_this.sys_reading.line, false, new static_1.SYS_MSG().Messsage("01x00e03"));
                    });
                }
                else {
                    call(-1, false, new static_1.SYS_MSG().Messsage("03x31k26"));
                }
            };
            return readBinary;
        }());
        switch (_t.type) {
            case "DB":
                new readBinary(static_1.SYS_PATH.join(_f, "/", static_1.sys_data_file.database), _t.type, this.encodetype).read(function (id, data, res) {
                    call(id, data, res);
                });
                break;
            case "TB":
                new readBinary(static_1.SYS_PATH.join(_f, "/", static_1.sys_data_file.table), _t.type, this.encodetype).read(function (id, data, res) {
                    call(id, data, res);
                });
                break;
            case "US":
                new readBinary(static_1.SYS_PATH.join(_f, "/", static_1.sys_data_file.admin), _t.type, this.encodetype).read(function (id, data, res) {
                    call(id, data, res);
                });
                break;
            default:
                call(new static_1.SYS_MSG().Messsage("01x32e33"));
                break;
        }
    };
    SYS_BUILD.prototype.sys_Build = function (_f, call) {
        var _this = this;
        var writeBinary = /** @class */ (function () {
            function writeBinary(_directory, _bin, _encode, _filelen) {
                this.dir = _directory;
                this.enc = _encode;
                this.sys_writing = { blob: _bin, len: _filelen };
            }
            writeBinary.prototype.write = function (call) {
                try {
                    var ioq = new syslib_1.SYS_CAT();
                    if (this.sys_writing.len > 0) {
                        if (new static_1.SYS_FILE_S().fs.existsSync(_f)) {
                            var write = new static_1.SYS_FILE_S().fs.createWriteStream(this.dir, { encoding: this.enc, flags: 'w' });
                            write.write(ioq.binary(this.sys_writing.blob), this.enc);
                            write.end();
                            write.on('finish', function () {
                                call(new static_1.SYS_MSG().Messsage("01x00e04")); // PART_DONE
                            });
                        }
                        else {
                            call(new static_1.SYS_MSG().Messsage("03x31k27")); // FAILED_PATH
                        }
                    }
                    else {
                        call(new static_1.SYS_MSG().Messsage("03x31k28")); // EMPTY_SIZE
                    }
                }
                catch (error) {
                    call(new static_1.SYS_MSG().Messsage("03x34k41")); // I/O_WRITE_ERROR
                }
            };
            return writeBinary;
        }());
        try {
            static_1.sys_writing.blob = "";
            Promise.all(static_1.sys_ram_db.user).then(function (Iterator) {
                Iterator.map(function (any) { static_1.sys_writing.blob += static_1.sys_dba.creat_super_string({ user: any[1]["user"], pass: any[1]["pass"], permission: any[1]["permission"], option: any[1]["option"] }); });
            }).finally(function () {
                new writeBinary(static_1.SYS_PATH.join(_f, "/", static_1.sys_data_file.admin), static_1.sys_writing.blob, _this.encodetype, static_1.sys_ram_db.user.size).write(function (us_res) {
                    if (us_res.code == 200) {
                        static_1.sys_writing.blob = "";
                        Promise.all(static_1.sys_ram_db.database).then(function (Iterator) {
                            Iterator.map(function (any) { static_1.sys_writing.blob += static_1.sys_dba.creat_data_string({ name: any[1]["name"], encoding: any[1]["encoding"], access: any[1]["access"], option: any[1]["option"] }); });
                        }).finally(function () {
                            new writeBinary(static_1.SYS_PATH.join(_f, "/", static_1.sys_data_file.database), static_1.sys_writing.blob, _this.encodetype, static_1.sys_ram_db.database.size).write(function (db_res) {
                                if (db_res.code == 200) {
                                    static_1.sys_writing.blob = "";
                                    Promise.all(static_1.sys_ram_db.table).then(function (Iterator) {
                                        Iterator.map(function (any) { static_1.sys_writing.blob += static_1.sys_dba.creat_table_string({ index: any[1]["index"], db: any[1]["db"], table: any[1]["table"], fields: any[1]["fields"], option: any[1]["option"], date: any[1]["date"] }); });
                                    }).finally(function () {
                                        new writeBinary(static_1.SYS_PATH.join(_f, "/", static_1.sys_data_file.table), static_1.sys_writing.blob, _this.encodetype, static_1.sys_ram_db.table.size).write(function (tb_res) {
                                            if (tb_res.code == 200) {
                                                // call(new SYS_MSG().Messsage("01x00e01"));
                                            }
                                            else {
                                                // call(new SYS_MSG().Messsage("01x32e33"));
                                                // throw new SYS_MSG().Messsage("01x32e33");
                                            }
                                        });
                                    }).catch(function (e) { throw e; });
                                }
                            });
                        }).catch(function (e) { throw e; });
                    }
                });
            }).catch(function (e) { throw e; });
        }
        catch (error) {
            call(error);
        }
    };
    SYS_BUILD.prototype.sys_dir_check = function (_f, call) {
        var dir_extist = new static_1.SYS_FILE_S().fs.existsSync(_f);
        if (!dir_extist) {
            try {
                new static_1.SYS_FILE_S().fs.mkdirSync(_f);
                if (new static_1.SYS_FILE_S().fs.existsSync(_f)) {
                    call(true, undefined);
                }
                else {
                    call(false, new static_1.SYS_MSG().Messsage("03x31k21"));
                }
            }
            catch (error) {
                call(false, new static_1.SYS_MSG().Messsage("03x31k22"));
            }
        }
        else if (dir_extist) {
            call(true, undefined);
        }
    };
    ;
    return SYS_BUILD;
}());
exports.SYS_BUILD = SYS_BUILD;
//# sourceMappingURL=builder.js.map