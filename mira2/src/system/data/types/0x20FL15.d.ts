export declare const SYS_PATH: any;
export declare class SYS_FILE_S {
    fs: any;
    write(fileName: any, Str: any): boolean;
    append(fileName: any, Str: any): boolean;
}
export declare type sys_write_type = {
    blob?: any;
    len?: any;
};
export declare type sys_reading_type = {
    line?: any;
    blob?: any;
};
export declare const sys_writing: sys_write_type;
export interface sys_file_type {
    buffer: any;
    binary: string;
}
