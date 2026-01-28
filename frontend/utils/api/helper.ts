import { getCookie, getLocalStorage, SESSION_ID_KEY } from "@/utils/browser";
import axios, { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BACK_URL

const instance = axios.create(
    {
        baseURL: baseUrl,
        withCredentials: true, // Хүсэлт болгонд ээр cookie явуулах нь
        headers: {
            "Authorization": `Bearar ${process.env.NEXT_PUBLIC_FULL_TOKEN}`,
            'Content-Type': 'application/json',
        },
    }
);

interface ApiResponse {
    success?: boolean;
    info?: string | { message: string };
    error?: string | {
        message: string;
        name: string;
        code: number;
    };
}

/**
 * Axios ийн response датанаас
 * миний back аас ирсэн data -г л буцаадаг болсон
 */
instance.interceptors.response.use(
    (rsp) => success(rsp),
    (err) => errror(err),
);

function success(rsp: AxiosResponse<ApiResponse>): AxiosResponse {
    const data = rsp.data
    //  хэрвээ хүсэлт амжилттай болоод тэр нь info буцааж байх юм бол toast гаргах
    if (typeof data?.success === 'boolean') {
        // /** Хүсэлтийн хариуг харуулах нь */
        // if (options.isDisplayToast)
        // {
        //     let msg = typeof data?.info === "string" ? data.info : data.info?.message
        //     if (msg)
        //     {
        //         if (options.isAlert)
        //         {
        //             // displayAlert(
        //             //     {
        //             //         title: "Анхааруулга",
        //             //         message: msg,
        //             //         buttons: [
        //             //             {
        //             //                 text: "OK",
        //             //             }
        //             //         ]
        //             //     }
        //             // )
        //         }
        //         else {
        //             displayToast(msg, { type: "success" })
        //         }
        //     }

        //     if (typeof data?.error === 'string' && data?.error)
        //     {
        //         displayToast(data.error, { type: "error" })
        //     }

        // }

        let msg = typeof data?.info === "string" ? data.info : data.info?.message
        if (msg) {
            // toast.success(msg)
        }

        if (typeof data?.error === "string" && data?.error) {
            console.log("errorroror", data);
            // toast.error(data?.error)
        }
    }
    return rsp;
}

function errror(err: AxiosError<ApiResponse>): ApiResponse {
    // axios huseltiig abort hiisen uyd uildel hiihgv
    if (err.message === 'canceled') {
        return { success: false }
    }

    let error = err?.response?.data

    // Check for authentication errors and redirect to login
    const isUnauthenticated =
        err.response?.status === 401 ||
        err.response?.status === 403 ||
        (error as any)?.detail === "unauthenticated" ||
        (typeof error?.error === 'object' && error?.error && 'code' in error.error && error.error.code === 6); // Нэвтрэх эрх нь дууссан байвал

    if (isUnauthenticated) {
        // Redirect to login page
        if (typeof window !== 'undefined') {
            // loginUrlPass();
        }
        return {
            success: false,
            error: {
                message: "Authentication required",
                name: "AUTH_ERROR",
                code: 401
            }
        };
    }

    // /** хүсэлт явахгүй алдаа гарсан бол backend асуудалтай болсон байнаа гэж үзээд алдааны toast харуулах */
    if (error?.success === undefined) {
        console.log("error in front end", err);
        error = {
            success: false,
            error: {
                message: "Сервертэй холбогдоход алдаа гарсан байна.",
                name: "ERROR 004",
                code: 4,
            }
        }
    }

    /** Алдааны messege ийг харуулах нь */
    if (error?.error && typeof error.error === 'object' && 'message' in error.error) {
        // toast.error(error?.error?.message)
        /** Хүсэлтийн хариуг харуулах нь */
        // const text = rspText(error.error, true)
        // addToast({
        //     text,
        //     time: 3000,
        //     type: "error",
        // })
    }

    if (typeof error?.error === "string") {
        // toast.error(error?.error)
    }
    // else if (typeof(error?.error) === "string" && error?.error)
    // {
    //     if (options.isDisplayToast)
    //     {
    //         displayToast(error?.error, { type: "error" })

    //         /** Хүсэлтийн хариуг харуулах нь */
    //         // addToast({
    //         //     text: error?.error,
    //         //     time: 3000,
    //         //     type: "error",
    //         // })
    //     }
    // }

    return error as ApiResponse
}

export const dTableQuery = (page: number, limit: number, sorting: string = "", search: string = ""): string => {
    return `&page=${page}&limit=${limit}&sorting=${sorting}&search=${search}`
}

export interface Filters {
    [key: string]: string
}

interface DTQuery {
    page: number;
    limit: number;
    order: string;
    filters?: Filters;
    search: string;
    [key: string]: any;
}

export const dtQueryMaker = (query: DTQuery) : string => {
    const params = new URLSearchParams({
        page: query.page.toString(),
        limit: query.limit.toString(),
        order: query.order,
        search: query.search,
    })

    if (query.filters) {
        Object.entries(query.filters).forEach(([key, value]) => {
            if (value) {
                params.append(`filters[${key}]`, String(value));
            }
        });
    }
    return params.toString();
}

export default instance
