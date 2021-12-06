import { sys_obj_rem, sys_str_val, DATABASE, sys_nam_val } from '../../data/static';
export declare class DB_COM_RENAME {
    private app;
    private tbltag;
    private SuperDB;
    private Obuild;
    constructor(_option: DATABASE);
    get rename(): {
        table: (_data: sys_str_val, call: CallableFunction) => void;
        database: (_data: sys_nam_val, call: CallableFunction) => void;
        column: (_data: sys_obj_rem, call: CallableFunction) => void;
    };
}
