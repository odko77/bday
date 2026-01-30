export interface CompanyInterface {
    id: number;
    documentId: string;
    name: string;
    color: string;
    order: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    logo_url: any;
    locale: string;
    description: string | null;
}

export interface CouponInteface {
    id: number;
    documentId: string;
    name: string;
    description: string;
    start_date: string;
    end_date: string;
    count: number;
    password: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    company: CompanyInterface;
}
