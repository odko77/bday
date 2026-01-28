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
    post: (data: any, locale="mn") => instance.post(`/api/categories/?locale=${locale}`, data),
}

export const SingleType = {
    homepage: () => instance.get(`/api/home-page/`),
}

export const MeApi = {
    me: () => instance.get(`/api/users/me`),
    login: (data: any) => instance.post(`/api/auth/local`, data)
}

