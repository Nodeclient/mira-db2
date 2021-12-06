import { sys_bdg_str, sys_sng_str, DATABASE } from '../../data/static';
export declare class DB_COM_DROP {
    private app;
    private SuperDB;
    private Obuild;
    constructor(_option: DATABASE);
    get drop(): {
        database: (_data: sys_bdg_str, call: CallableFunction) => void;
        table: (_data: sys_sng_str, call: CallableFunction) => void;
    };
}
