# mira-db2 Public Test
Mira Database `v2.0` non-complate alpha-1 public test version (2021)


[download sample database](./test_databases.7z)

---
**All Test command's and connection string's :** 

#### SAMPLE  
``` js
process.env.CACHE_SIZE = "200";
const MIRA = require('./mira2/dist/main');

const connection = new MIRA.DATABASE({
    location: `${__dirname}/databases`,
    option: {
        user: "local",
        pass: "",
        database: "test1_db"
    }
});

const _select = new MIRA.DB_COM_SELECT(connection);
_select.select.table(["person"]).all((data) => {
    console.log(">>",data);
});

```



#### SUPER (only databese admin command)
``` js
     const _super: MIRA.DB_COM_SUPER = new MIRA.DB_COM_SUPER(connection);
     //Example list database users
     _super.user.list((index: any, item: any) => {
         console.log(index, item);
     });
     
     //Example set new user permissions
     _super.table.permissions = { 
      SELECT: true, ADD: true, UNIQUE: true, UPDATE: true, RENAME: true, DROP: true, DELETE: true, CREATE: true, LIST: true 
     }
     
    //Example create new database user
     _super.user.add({
         user: "root",
         pass: "1234",
         permission: _super.table.permissions ,
         option: { ip: "192.168.2.1", mode: "xw-" }
     }, (status: any) => {
         console.log(status);
    });
```



#### SELECT
``` js
//Example DB_COM_SELECT
    const _select: MIRA.DB_COM_SELECT = new MIRA.DB_COM_SELECT(connection);
    
//Example select > find > equal query
      _select.select.find(["person","login"]).equal({ user: "1" }, (data: any) => {
        console.log(data);
     });
//Example select > find > like query
    _select.select.find(["person"]).like({ user:"1", pass:"72" }, (data: any) => {
       console.log(data);
    });
//Example select > limit query
     _select.select.table(["person"]).limit({ start: 1, end: 5}, (data: any) => {
         console.log(data);
     });
//Example select > column query
     _select.select.table(["person"]).column(["user"], (data: any) => {
         console.log(data);
     });
//Example select > count query
     _select.select.table(["person","login"]).count((data:any) => {
         console.log(data);
     });
//Example select > all query
    _test.select.table(["person"]).all((data:any) => {
        console.log(">>",data);
    });
```
---
#### CREATE
``` js
//Example DB_COM_CREATE
     const _create: MIRA.DB_COM_CREATE = new MIRA.DB_COM_CREATE(connection);
//Example Table query
       _create.table({ table: "login3", column: ["user","pass","mail"] }, (status: any) => {
          console.log(status);
      });
//Example Database query
     _create.database({ name: "test1_db", access: ["*"], encoding: "utf-8", option: { } }, (status: any) => {
        console.log( status);
     });
```
---
#### ADD
``` js
//Example DB_COM_ADD
    const _add: MIRA.DB_COM_ADD = new MIRA.DB_COM_ADD(connection);
    
    /* Example Static Column Types
       _add.static.types = {
           number: ["pass"]
       };
    */
 
     //Example Add row query
     _add.table.row({ table: "person", column: { user:`user-1`,pass:`pass${ Date.now()}`,mail: `test@my.net`} }, (data: any) => {
        console.log(">>",data);
     }); 
     
     //Example Add column query
     _add.table.column({ table:"person" , column:["test1","test2"] ,value:["test1 value","test2 value hello 2.0"] }, (data: any) => {
        console.log(data);
     });
     
```
---
#### UPDATE
``` js
//Example DB_COM_UPDATE
 const _update: MIRA.DB_COM_UPDATE = new MIRA.DB_COM_UPDATE(connection);
 
//Example update query
 _update.update.row({
    table: "person", column: {  mail:"test23@my.com" }, find: { user: "user-1" }
  }, (data: any) => {
    console.log(data);
 });
```
---
#### DELETE
``` js
//Example DB_COM_DELETE
    const _del: MIRA.DB_COM_DELETE = new MIRA.DB_COM_DELETE(connection);
    //Example delete column query
    _del.delete.column({ table: "person", column: ["mail"] }, (data: any) => {
      console.log(data);
    });
    //Example delete row query
    _test.delete.row({ table: "person", find: { user: "user-1" } }, (data: any) => {
      console.log(data);
    });
```
---
#### RENAME
``` js
//Example DB_COM_RENAME
     const _ren: MIRA.DB_COM_RENAME = new MIRA.DB_COM_RENAME(connection);
//Example rename table query
     _ren.rename.table({ table:"person",value:"8"}, (data: any) => {
         console.log(data);
     });
//Example rename column query
    _ren.rename.column({ table:"8",column:{mail:"email"} }, (data: any) => {
        console.log(data);
    });
//Example rename database query
     _ren.rename.database({ value: "test6_db" }, (data: any) => {
         console.log(data);
    });
```
---
#### DROP
``` js
//Example DB_COM_DROP
    const _drop: MIRA.DB_COM_DROP = new MIRA.DB_COM_DROP(connection);
//Example drop table query
    _drop.drop.table({ table:["login88"] }, (data: any) => {
        console.log(data);
    });
//Example delete row query
    _test.delete.row({ table: "person", find: { user: "user-1" } }, (data: any) => {
      console.log(data);
    });
```
