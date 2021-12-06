export declare const sys_shared: Map<string, any>;
export declare type sys_session_type = {
    session?: Array<sys_session_modal>;
};
export declare type sys_session_modal = {
    user: any;
    permission: any;
    isAlive: boolean;
};
export declare const sys_part_file: {
    check: (__dest_file: any) => any;
};
