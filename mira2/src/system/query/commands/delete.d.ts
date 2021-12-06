import { sys_str_remove, sys_str_arr, DATABASE } from '../../data/static';
export declare class DB_COM_DELETE {
    private app;
    private tbltag;
    private SuperDB;
    private Obuild;
    constructor(_option: DATABASE);
    get delete(): {
        column: (_data: sys_str_arr, call: CallableFunction) => void;
        row: (_data: sys_str_remove, call: CallableFunction) => void;
    };
}
