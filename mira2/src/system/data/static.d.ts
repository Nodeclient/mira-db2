export { sha256, fileSize, Sleep, OptBuilder, cacheMem, ftid, forEach } from './types/0x03SH04';
export { sys_field_function, sys_field_type } from './types/0x15TY79';
export { SYS_BUILD } from './builder';
export { SYS_MODAL_TYPE } from './fieldtype';
export { sys_perm_type } from './types/0x41TQ11';
export { ACC_PERM } from './access';
export { DATABASE } from '../../system_db';
import { ACC_SESSION } from '../../system/data/access';
export declare const sys_session: ACC_SESSION;
export { sys_app, sys_data_file } from './types/0x21FG43';
export { sys_shared, sys_session_type, sys_session_modal, sys_part_file } from './types/0x72SS10';
export { db_default_admin, sys_cat_db, sys_cat_tbl, sys_dba, sys_ram_db, sys_super_admin, sys_str_arr, sys_str_remove, sys_nam_val, sys_dba_val, sys_str_val, sys_usr_cnst, sys_sng_str, sys_obj_rem, sys_bdg_str, sys_str_rem, sys_str_find, sys_str_obj } from './types/0x11DB89';
export { SYS_FILE_S, SYS_PATH, sys_file_type, sys_reading_type, sys_write_type, sys_writing } from './types/0x20FL15';
interface database_modal {
    data?: any;
    name?: string;
}
export declare class SYS_BASE {
    sys_database: database_modal;
    hex: (a_: string) => string;
    source: (a_: string) => string;
}
export { SYS_MSG } from '../../system/data/returnmsg';
export { totalmem, freemem, platform } from 'os';
export declare type sys_f_type = {
    toByt?: any;
    toObj?: any;
};
export declare type sys_data_type = {
    type?: string;
};
export declare type sys_app_option = {
    location?: any;
    mode?: any;
    option?: any;
};
export declare type sys_check_f_type = {
    database?: boolean;
    table?: boolean;
    user?: boolean;
};
export interface sys_msg_type {
    status: boolean;
    code: number;
    message: string;
}
