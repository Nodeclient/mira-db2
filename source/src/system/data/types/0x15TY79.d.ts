declare type sys_field_modal_type = {
    IsTimeStamp?: Array<string>;
    IsEmpty?: Array<string>;
    blob?: Array<string>;
    string?: Array<string>;
    number?: Array<string>;
    object?: Array<string>;
    bigint?: Array<string>;
    boolean?: Array<string>;
    bit32?: Array<string>;
    bit64?: Array<string>;
    bit128?: Array<string>;
    bit256?: Array<string>;
    bit512?: Array<string>;
    bit1024?: Array<string>;
    bit2048?: Array<string>;
};
export declare type sys_field_type = {
    types?: sys_field_modal_type;
};
export declare const sys_field_function: {
    BIT: (_s: any) => number;
    BIT_32: (_s: any) => boolean;
    BIT_64: (_s: any) => boolean;
    BIT_128: (_s: any) => boolean;
    BIT_256: (_s: any) => boolean;
    BIT_512: (_s: any) => boolean;
    BIT_1024: (_s: any) => boolean;
    BIT_2048: (_s: any) => boolean;
    string: (_s: any) => boolean;
    number: (_s: any) => boolean;
    blob: (_s: any) => boolean;
    object: (_s: any) => boolean;
    boolean: (_s: any) => boolean;
    bigint: (_s: any) => boolean;
    IsEmpty: (_s: any) => boolean;
    IsTimeStamp: (_s: any) => boolean;
};
export {};
