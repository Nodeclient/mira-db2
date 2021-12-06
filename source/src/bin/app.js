"use strict";
// "use strict";
// import { DatabaseSocket, sys_connection } from 'mira2/src/system/data/static';
// import * as WebSocket from 'ws';
// import * as url from "url";
// export default class SYS_NET_APP {
//     private wss: WebSocket.Server;
//     public uid:Map<string, object>;
//     constructor(port: number) {
//         this.uid = new Map<string, object>();
//         this.wss = new WebSocket.Server( { port: (port || 8879) });
//         this.wss.on('connection', this.handleCom);
//     }
//     private handleCom(socket: DatabaseSocket, req:any) {
//         // sys_connection.uuid() 
//         // const ip = req.socket.remoteAddress;
//         // const test = url.parse(req?.url,true);
//         if (typeof req.headers["database"] != "undefined") {
//             socket.send("HTTP OK+");
//             socket.on('message', (a: Buffer) => {
//                 console.log( a.toString() );
//             });
//             socket.on('close', (a: any) => {
//                 console.log(a);
//             });
//         } else {
//             socket.send("CLIENT DENIED");
//             socket.close();
//         }
//     }
// }
//# sourceMappingURL=app.js.map