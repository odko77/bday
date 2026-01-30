import { AxiosRequestConfig } from 'axios';

import instance from './helper'

interface Filters {
    [key: string]: string;
}

// Helper to control toast display for order service
const withToast = (config?: AxiosRequestConfig): any => {
    return {
        ...config,
        showToast: true
    };
};

const withoutToast = (config?: AxiosRequestConfig): any => {
    return {
        ...config,
        showToast: false
    };
};

export const CategoryApi = {
    list: () => instance.get(`/api/categories/?sort=order`),
    all: () => instance.get(`/api/categories?populate[coupons][count]=true&sort=order`),
    post: (data: any, locale="mn") => instance.post(`/api/categories/?locale=${locale}`, data),
}

export const CouponsApi = {
    coupons: (documentId: string) => instance.get(`/api/coupons?filters[categories][documentId][$eq]=${documentId}&populate[company][populate]=logo_url&%20sort[0]=company.order:asc`),
    couponsAll: () => instance.get(`/api/coupons?populate[company][populate]=logo_url&%20sort[0]=company.order:asc`),
    myCoupons: () => instance.get(`/api/coupons?populate[company][populate]=logo_url&%20sort[0]=company.order:asc`),
}

export const SingleType = {
    homepage: () => instance.get(`/api/home-page/`),
    featured: () => instance.get(`/api/featured/?populate[coupon1][populate][company][populate]=logo_url&populate[coupon2][populate][company][populate]=logo_url&populate[coupon3][populate][company][populate]=logo_url`),
}

export const CompanyApi = {
    slide: () => instance.get(`/api/companies?populate=logo_url`)
}

export const MeApi = {
    me: () => instance.get(`/api/users/me`),
    login: (data: any) => instance.post(`/api/auth/local`, data)
}

export const FaqApi = {
    list: () => instance.get(`/api/faqs`)
}
