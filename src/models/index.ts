import dbConfig from "../config/db.config";
import sequelize from "sequelize";
import {TransactionFactory} from "./transaction.model";
import {PaymentNoteFactory} from "./payment_note.model"

const connectDB = new sequelize.Sequelize(
    (process.env.DB_NAME = dbConfig.DB),
    (process.env.DB_USER = dbConfig.USER),
    (process.env.DB_PASSWORD = dbConfig.PASSWORD),
    {
        host: process.env.DB_HOST || dbConfig.HOST,
        dialect: "mysql",
        pool: {
            min: 0,
            max: 5,
            acquire: 30000,
            idle: 10000,
        },
    }
);

export const Transaction = TransactionFactory(connectDB);
export const PaymentNote = PaymentNoteFactory(connectDB);

export default connectDB;
