import { DATABASE } from '../../data/static';
export declare class DB_COM_LIST {
    private app;
    constructor(_option: DATABASE);
    get list(): {
        databases: (call: CallableFunction) => void;
        tables: (_data: {
            database: string;
        }, call: CallableFunction) => void;
    };
}
