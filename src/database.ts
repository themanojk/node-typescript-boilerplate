import Knex from 'knex';
import Bookshelf from 'bookshelf';
import {envValues} from "./typescript_helpers/type_aliases/config";

const KnexConfig = require('../knexfile');

let env: envValues = <envValues | null>process.env.NODE_ENV || "development";
export default class Database {

    protected configuration: any = KnexConfig[env];
    private static _instance : Database = new Database();

    protected _knex:any = null;

    protected _bookshelf : any = null;

    constructor() {
        if(Database._instance){
            throw new Error("Error: Instantiation failed: Use Database.getInstance() instead of new.");
        }

        this._knex = Knex({
            client: this.configuration.client,
            connection: {
                host     : this.configuration.connection.host,
                user     : this.configuration.connection.user,
                password : this.configuration.connection.password,
                database : this.configuration.connection.database,
                charset  : this.configuration.connection.charset,
                insecureAuth : this.configuration.connection.insecureAuth
            }
        });

        this._bookshelf = Bookshelf(this._knex);

        Database._instance = this;
    }

    public static getInstance():Database
    {
        return Database._instance;
    }

    public getKnex(): any
    {
        return this._knex;
    }

    public getBookshelf(): Bookshelf
    {
        return this._bookshelf;
    }

    public teardown(): void {
        this._knex.destroy();
    }
}