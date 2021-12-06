import { sys_super_admin, DATABASE, SYS_MODAL_TYPE } from '../../data/static';
export declare class DB_COM_SUPER extends SYS_MODAL_TYPE {
    private app;
    private SuperDB;
    constructor(_option: DATABASE);
    get user(): {
        update: (_ssa: sys_super_admin, call: CallableFunction) => void;
        add: (_ssa: sys_super_admin, call: CallableFunction) => void;
        remove: (_fdata: object, call: CallableFunction) => void;
        find: (_fdata: object, call: CallableFunction) => void;
        list: (call: CallableFunction) => void;
    };
}
