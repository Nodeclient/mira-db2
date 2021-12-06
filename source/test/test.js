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
// const writeStream = fs.
// writeStream.on('open', function (fd: any) {
//     // console.log("OK");
//     writeStream.write(`\n\nnew chunk has been received: \n\n`);
// })
// writeStream.on('finish', function (fd: any) {
//     console.log("fd");
// })
// function writeToFile(filePath: string, arr: string): Promise<boolean> {
//     return new Promise((resolve, reject) => {
//         const file = fs.createWriteStream(filePath, {flags:"a", highWaterMark: 100 });
//         file.write(arr + "\n");
//         file.end();
//         file.on("finish", () => { resolve(true) });
//     });
// }
// writeToFile("./databases/test.db","3242342423424242424").then((a) => {
//     console.log(a);
// });
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
// const r = require('crypto');
// // var fs = require('fs');
// var stream = fs.createWriteStream("D:/Coding/Nodejs_Projects/mira-db-2.0/databases/fe1b0b5e95b77/8b0a44048f589.rdb");
// var max=10
// stream.once('open', function(fd:any) {
//     for (let index = 1; index < max+1; index++) {
//         const buf = require('crypto').randomBytes(10);
//         const data = (`<data><user>${buf}</user><pass>2342</pass><mail>null</mail><news>null</news><myname>${index}</myname></data>\r`);
//         stream.write(data);
//         if(index==max+1) stream.end();
//     }
// });
// var zlib = require('zlib');
// var input:any = { file: "8b0a44048f589", part: [] };
// var deflated = zlib.deflateSync(input).toString('base64');
// var inflated = zlib.inflateSync(new Buffer(deflated, 'base64')).toString();
// console.log(   );
// console.log(t);
//# sourceMappingURL=test.js.map