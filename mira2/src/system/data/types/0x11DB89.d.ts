export declare type sys_super_admin = {
    id?: any;
    user?: any;
    pass?: any;
    option?: any;
    permission?: any;
};
export declare type sys_cat_tbl = {
    id?: any;
    db: any;
    table: any;
    date: any;
    index: any;
    fields: any;
    option: any;
};
export declare type sys_cat_db = {
    id?: any;
    name: any;
    access: any;
    encoding: any;
    option: any;
};
export declare const sys_ram_db: {
    user: Map<string, sys_super_admin>;
    table: Map<string, sys_cat_tbl>;
    database: Map<string, sys_cat_db>;
};
export declare const db_default_admin: sys_super_admin;
export declare type sys_bdg_str = {
    database: Array<any>;
};
export declare type sys_usr_cnst = {
    isAlive: Boolean;
    permission: any;
    user: any;
};
export declare type sys_sng_str = {
    table: Array<any>;
};
export declare type sys_str_arr = {
    table?: string;
    column?: Array<any>;
};
export declare type sys_str_obj = {
    table?: string;
    column?: any;
};
export declare type sys_str_find = {
    table?: string;
    column?: any;
    find?: any;
};
export declare type sys_str_remove = {
    table?: string;
    find?: any;
};
export declare type sys_dba_val = {
    database?: string;
    value?: string;
};
export declare type sys_nam_val = {
    value?: string;
};
export declare type sys_str_val = {
    table?: string;
    value?: string;
};
export declare type sys_str_rem = {
    table?: string;
    column?: Array<any>;
    value?: Array<any>;
};
export declare type sys_obj_rem = {
    table?: string;
    column?: any;
};
export declare const sys_dba: {
    bin: {
        blob: string;
        tag: string;
    };
    StringByte: (__obj: any) => number;
    isKeyExist: (_data: any, _name: string) => any;
    isObjectEmpty: (__obj: any) => boolean;
    toObject: (__obj: any) => any;
    TableOption: () => {
        column: any;
        field: any;
        files: any;
    };
    toNumber: (a: any, b: any) => string;
    toType: (_data: any, _type: string) => boolean;
    toEscape: (_data: any) => number;
    toArray: (_data: any) => boolean;
    read_block: (_s: string, _source: any) => RegExpExecArray | null | undefined;
    field: (_s: string, _source: any) => RegExpExecArray | null | undefined;
    creat_super_string: (_s: sys_super_admin) => string;
    creat_data_string: (_n: sys_cat_db) => string;
    creat_table_string: (_g: sys_cat_tbl) => string;
};
