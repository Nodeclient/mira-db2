import { sys_msg_type } from './static';
export declare class SYS_CAT {
    private encodetype;
    private encodEnvironment;
    constructor();
    binary(_source: any): string;
    source(_source: any): string | false;
}
export declare class SYS_BYTE {
    byte: (a_: any) => string | sys_msg_type;
    source: (a_: any, obj_: boolean) => any;
}
