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
var fs = __importStar(require("fs"));

var readableStream = fs.createReadStream('D:/Coding/Nodejs_Projects/mira-db-2.0/databases/fe1b0b5e95b77/ee72b06bedd3f.rdb', { highWaterMark: 1000 });
var blob = "";
var _s = "data";
readableStream.on('data', function (fata) {
    blob += fata.toString();
    if (String(blob).indexOf("</".concat(_s, ">")) > -1) {
        readableStream.pause();
        var block = blob.slice(blob.indexOf("<".concat(_s, ">")), blob.lastIndexOf("</".concat(_s, ">")) + 7);
        Promise.all(block.split(new RegExp("<".concat(_s, ">(.*?)</").concat(_s, ">"), "im"))).then(function (__in) {
            __in.map(function (any) {
                if (any.length > 5) {
                    console.log(any.length, ">>>", any);
                }
            });
        }).finally(function () {
            var part = blob.slice(blob.lastIndexOf("</".concat(_s, ">")) + 7, blob.length);
            blob = part;
            readableStream.resume();
        });
    }
});
readableStream.on('end', function () {
    console.log('DONE', blob.length);
});
