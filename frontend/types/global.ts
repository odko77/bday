export interface GlobalDialogProps {
    // dialog дээр дамжуулах нэмэлт мэдээлэл
    display?: boolean,
    title?: string;
    message?: string;
    body?: any;
    onConfirm?: (cb: () => void) => void;
}

export interface Pagination {
    page: number;       // Одоогийн page дугаар
    pageSize: number;   // Хуудасны хэмжээ (нэг page-д хэдэн record)
    pageCount: number;  // Нийт page-ийн тоо
    total: number;      // Нийт record-ийн тоо
}
