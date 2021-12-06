import { SYS_MODAL_TYPE, sys_str_rem, sys_str_obj, DATABASE } from '../../data/static';
export declare class DB_COM_ADD extends SYS_MODAL_TYPE {
    private app;
    private tbltag;
    private SuperDB;
    private Obuild;
    constructor(_option: DATABASE);
    get table(): {
        column: (_data: sys_str_rem, call: CallableFunction) => void;
        row: (_data: sys_str_obj, call: CallableFunction) => void;
    };
}
