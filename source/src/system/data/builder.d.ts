import { sys_data_type } from './static';
export declare class SYS_TB_READER {
    private setting;
    private chunk;
    private table;
    private indexx;
    constructor(__opiton?: any, __file?: any);
    get index(): number;
    set index(i: any);
    set path(__op: {
        option: any;
        file: any;
    });
    load(call: CallableFunction): void;
}
export declare class SYS_BUILD {
    private encodetype;
    constructor();
    field(_search: string, _source: any): any;
    sys_Read(_f: string, _t: sys_data_type, call: CallableFunction): void;
    sys_Build(_f: string, call: CallableFunction): void;
    sys_dir_check(_f: string, call: CallableFunction): void;
}
