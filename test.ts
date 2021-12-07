

    process.env.CACHE_SIZE = "200";

    import * as MIRA from './mira2/main';
    const connection = new MIRA.DATABASE({
        location: `${__dirname}/databases`,
        option: {
            user: "local",
            pass: "",
            database: "test1_db"
        }
    });

    const _list: MIRA.DB_COM_LIST = new MIRA.DB_COM_LIST(connection);
    _list.list.databases( (data:any) => {
      console.log(data);
    });

    // _list.list.tables({ database:"*" },(data:any) => {
    //     console.log(data);
    // });
