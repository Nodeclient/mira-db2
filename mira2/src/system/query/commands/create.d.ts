import { sys_str_arr, DATABASE } from '../../data/static';
export declare class DB_COM_CREATE {
    private app;
    private SuperDB;
    private Obuild;
    constructor(_option: DATABASE);
    table(_data: sys_str_arr, call: CallableFunction): void;
    database(_data: {
        name?: string;
        encoding?: string;
        access?: Array<any>;
        option?: object;
    }, call: CallableFunction): void;
}
