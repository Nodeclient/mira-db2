import { DATABASE } from '../../data/static';
export declare class DB_COM_SELECT {
    private app;
    private Obuild;
    constructor(_option: DATABASE);
    get select(): {
        table: (_name: Array<any>) => {
            all?: any;
            count?: any;
            column?: any;
            limit?: any;
        };
        find: (_name: Array<any>) => {
            equal?: any | undefined;
            like?: any | undefined;
        };
    };
}
