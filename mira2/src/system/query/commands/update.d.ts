import { SYS_MODAL_TYPE, sys_str_find, DATABASE } from '../../data/static';
export declare class DB_COM_UPDATE extends SYS_MODAL_TYPE {
    private app;
    private tbltag;
    private SuperDB;
    private Obuild;
    constructor(_option: DATABASE);
    get update(): {
        row: (_data: sys_str_find, call: CallableFunction) => void;
    };
}
