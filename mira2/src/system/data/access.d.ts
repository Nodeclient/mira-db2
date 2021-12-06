import { sys_perm_type, sys_session_modal } from './static';
/**
* Create a random Guid.
* @param [fn='A no-op function']
* @param [exact=1]
* @classdesc {ACC_PERM} a random guid value.
*/
export declare class ACC_PERM {
    private ptypeObj;
    constructor();
    get permissions(): any;
    set permissions(_obj: sys_perm_type);
}
export declare class ACC_SESSION {
    private sesObj;
    constructor();
    get Sessions(): any;
    Live(_ses: sys_session_modal): void;
    Exit(_user: any): void;
    Get(_user: any): any;
}
