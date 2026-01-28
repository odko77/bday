export interface GlobalDialogProps {
    // dialog дээр дамжуулах нэмэлт мэдээлэл
    display?: boolean,
    title?: string;
    message?: string;
    body?: any;
    onConfirm?: (cb: () => void) => void;
}
