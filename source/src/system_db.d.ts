export { DB_COM_ADD, DB_COM_CREATE, DB_COM_DELETE, DB_COM_DROP, DB_COM_LIST, DB_COM_RENAME, DB_COM_SELECT, DB_COM_SUPER, DB_COM_UNIQUE, DB_COM_UPDATE } from './system/query/register';
import { sys_app_option } from './system/data/static';
export declare class DATABASE {
    close: () => void;
    save: (_type?: string) => void;
    load: (_file: string, call: CallableFunction) => void;
    private option;
    readonly run: Promise<any>;
    constructor(_set: sys_app_option);
}
