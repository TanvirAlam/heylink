export interface TransactionAttributes {
    transaction_uuid: number;
    transaction_status_code: string;
    transaction_value: string;
    transaction_payment_note_uuid: string;
    transaction_datetime?: Date;
}
