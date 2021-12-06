"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forEach = exports.ftid = exports.fileSize = exports.Sleep = exports.OptBuilder = exports.sha256 = void 0;
var sha256 = function (_str) {
    return String(require('crypto').createHash('md5').update(_str).digest('hex')).slice(0, 20);
};
exports.sha256 = sha256;
var OptBuilder = /** @class */ (function () {
    function OptBuilder() {
    }
    /**
    * Convering Option String To Object.
    * @param '_string > (String)'
    */
    OptBuilder.prototype.Object = function (_string) {
        try {
            // const DataObject: any = eval('(' + _string + ')');
            // DataObject["part"] = (String(DataObject["part"]).length > 1) ? String(DataObject["part"]).split(",") : [];
            return eval('(' + _string + ')') || [];
        }
        catch (error) {
            return false;
        }
    };
    ;
    /**
    * Creating Option String.
    * @param '_fileName > (String)'
    * @param '_Parts > (Array)'
    */
    OptBuilder.prototype.String = function (_fileName, _Parts) {
        try {
            var DataString = "{ file: \"".concat(_fileName, "\", part: \"").concat(_Parts, "\" }");
            return DataString;
        }
        catch (error) {
            return false;
        }
    };
    ;
    return OptBuilder;
}());
exports.OptBuilder = OptBuilder;
;
var Sleep = /** @class */ (function () {
    function Sleep() {
    }
    Object.defineProperty(Sleep.prototype, "wait", {
        get: function () {
            var _this = this;
            return {
                true: function () { if (typeof _this.WaitAbit == "undefined")
                    _this.WaitAbit = setInterval(function () { }, 100); },
                false: function () { _this.WaitAbit.unref(); _this.WaitAbit = undefined; }
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sleep.prototype, "timeout", {
        set: function (ms) {
            var _this = this;
            this.WaitAbit = undefined;
            this.WaitAbit = setTimeout(function () { _this.WaitAbit = undefined; }, ms);
        },
        enumerable: false,
        configurable: true
    });
    return Sleep;
}());
exports.Sleep = Sleep;
;
function fileSize(bytes) {
    var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var _l = 0, n = parseInt(bytes, 10) || 0;
    while (n >= 1024 && ++_l) {
        n = n / 1024;
    }
    var _r = (n.toFixed(n < 10 && _l > 0 ? 2 : 0));
    return { Type: units[_l], sizeOf: parseInt(bytes, 10) || 0, toString: _r + " " + units[_l] };
}
exports.fileSize = fileSize;
var ftid = /** @class */ (function () {
    function ftid(_key) {
        this.key = _key || "undef_";
    }
    Object.defineProperty(ftid.prototype, "time", {
        get: function () {
            return new Date().getTime();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ftid.prototype, "part", {
        get: function () {
            return String(this.key.slice(0, 5)).concat("_").concat(require("crypto").randomBytes(4).toString("hex"));
        },
        enumerable: false,
        configurable: true
    });
    return ftid;
}());
exports.ftid = ftid;
;
var forEach = /** @class */ (function () {
    function forEach(Delay) {
        this.__p = (0, exports.sha256)(String("forEach").concat("".concat(Date.now())));
        this.__c = {};
        this.__c[this.__p] = { setPause: false, setStep: 0, i: 0, d: Delay || 0 };
    }
    ;
    forEach.prototype.pause = function () { this.__c[this.__p].setPause = true; };
    forEach.prototype.next = function () { this.__c[this.__p].setPause = false; };
    forEach.prototype.goto = function (step) { this.__c[this.__p].setStep = step; };
    forEach.prototype.stop = function () { this.__c[this.__p].setStep = -1; };
    forEach.prototype.forEach = function (_arr, call) {
        var _this = this;
        try {
            if (!Array.isArray(_arr))
                throw { status: false, code: 201, message: "Invalid Array Type" };
            if (Array.isArray(_arr) && _arr.length <= 0)
                throw { status: false, code: 351, message: "Empty" };
            var _f = setTimeout(function () {
                if (_this.__c[_this.__p].setPause == false) {
                    if (_arr.length <= _this.__c[_this.__p].i) {
                        _this.__c[_this.__p].i = _this.__c[_this.__p].i;
                        call(_this.__c[_this.__p].i, _arr[_this.__c[_this.__p].i - 1], { code: 1, message: "Finish" });
                        _f.unref();
                    }
                    else if (_this.__c[_this.__p].setStep > 0 && _arr.length >= _this.__c[_this.__p].setStep) {
                        call(_this.__c[_this.__p].setStep, _arr[_this.__c[_this.__p].setStep - 1], { code: 2, message: "Goto" });
                    }
                    else if (_this.__c[_this.__p].setStep == -1) {
                        _f.unref();
                    }
                    else if ((_arr === null || _arr === void 0 ? void 0 : _arr.length) != _this.__c[_this.__p].i + 1)
                        call(_this.__c[_this.__p].i + 1, _arr[_this.__c[_this.__p].i], { code: 0, message: "Next" });
                    _this.__c[_this.__p].i++;
                }
                if (_this.__c[_this.__p].i <= (_arr === null || _arr === void 0 ? void 0 : _arr.length))
                    _f.refresh();
            }, this.__c[this.__p].d);
        }
        catch (e) {
            call(0, false, e || { code: 600, message: "Unknow" });
        }
    };
    return forEach;
}());
exports.forEach = forEach;
//# sourceMappingURL=0x03SH04.js.map