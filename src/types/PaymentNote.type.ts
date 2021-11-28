export default interface PaymentNoteAttributes {
    payment_note_uuid: string;
    payment_note_period_from_datetime?: Date
    payment_note_period_to_datetime?: Date
    payment_note_created_datetime?: Date
    payment_note_value: number;
    payment_note_transactions_count: number;
    payment_note_status_code: string;
}
