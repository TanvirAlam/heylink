import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface PaymentNoteAttributes {
    payment_note_uuid: string;
    payment_note_period_from_datetime?: Date
    payment_note_period_to_datetime?: Date
    payment_note_created_datetime?: Date
    payment_note_value: number;
    payment_note_transactions_count: number;
    payment_note_status_code: string;
}
export interface PaymentNoteModel extends Model<PaymentNoteAttributes>, PaymentNoteAttributes {}
export class PaymentNote extends Model<PaymentNoteModel, PaymentNoteAttributes> {}

export type PaymentNoteStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): PaymentNoteModel;
};

export function PaymentNoteFactory (sequelize: Sequelize): PaymentNoteStatic {
    return <PaymentNoteStatic>sequelize.define("payment_note", {
        payment_note_uuid: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        payment_note_period_from_datetime: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        payment_note_period_to_datetime: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        payment_note_created_datetime: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        payment_note_value: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        payment_note_transactions_count: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        payment_note_status_code: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
}
