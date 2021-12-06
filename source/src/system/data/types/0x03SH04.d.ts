export declare const sha256: (_str: any) => string;
export declare class OptBuilder {
    /**
    * Convering Option String To Object.
    * @param '_string > (String)'
    */
    Object(_string: any): any;
    /**
    * Creating Option String.
    * @param '_fileName > (String)'
    * @param '_Parts > (Array)'
    */
    String(_fileName: any, _Parts: any): string | false;
}
export declare class Sleep {
    private WaitAbit;
    get wait(): {
        true: any;
        false: any;
    };
    set timeout(ms: number);
}
export declare type cacheMem = {
    [key: string]: any;
};
declare type f_type = {
    sizeOf: any;
    Type: any;
    toString: string;
};
export declare function fileSize(bytes: any): f_type | undefined;
export declare class ftid {
    private key;
    constructor(_key: string);
    get time(): number;
    get part(): string;
}
export declare class forEach {
    private __p;
    private __c;
    constructor(Delay?: number);
    pause(): void;
    next(): void;
    goto(step: number): void;
    stop(): void;
    forEach(_arr: Array<any>, call: CallableFunction): void;
}
export {};
