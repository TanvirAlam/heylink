import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface TransactionAttributes {
    transaction_uuid: number;
    transaction_status_code: string;
    transaction_value: string;
    transaction_payment_note_uuid: string;
    transaction_datetime?: Date;
}
export interface TransactionModel extends Model<TransactionAttributes>, TransactionAttributes {}
export class Transaction extends Model<TransactionModel, TransactionAttributes> {}

export type TransactionStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): TransactionModel;
};

export function TransactionFactory (sequelize: Sequelize): TransactionStatic {
    return <TransactionStatic>sequelize.define("transaction", {
        transaction_uuid: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        transaction_status_code: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        transaction_value: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        transaction_datetime: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        transaction_payment_note_uuid: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    });
}
