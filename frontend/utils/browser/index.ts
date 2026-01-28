// Cart session ID management
export const SESSION_ID_KEY = 'cart_session_id';

export function queryParamToJson(queryString: string, allowed?: string[]): Record<string, string> {
    const urlSearchParams = new URLSearchParams(queryString);
    const json: Record<string, string> = {};

    urlSearchParams.forEach((value, key) => {
        if (allowed) {
            if (allowed.includes(key)) {
                json[key] = value;
            }
        }
        else {
            json[key] = value;
        }
    });

    return json;
}

export function jsonToParamsFastApi(json: Record<string, string | number | (string | number)[]>): string {
    const params: string[] = [];

    Object.entries(json).forEach(([key, value]) => {
        let values: (string | number)[] = [];

        if (typeof value === 'string' && value.startsWith('[') && value.endsWith(']')) {
            // '[1,3]' → [1,3]
            try {
                values = JSON.parse(value);
            } catch (e) {
                values = [value];
            }
        } else if (Array.isArray(value)) {
            values = value;
        } else {
            values = [value];
        }

        values.forEach(v => {
            params.push(`${encodeURIComponent(key)}=${encodeURIComponent(v)}`);
        });
    });
    return params.join('&');
}



export function jsonToParams(json: Record<string, string>): string {
    return Object.keys(json)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(json[key]))
        .join('&');
}

export function getCookie(cname: string): string {

    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export function setCookie(cname: string, cvalue: string, exdays: number): void {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// LocalStorage utility functions
export function setLocalStorage(key: string, value: string): void {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, value);
    }
}

export function getLocalStorage(key: string): string | null {
    if (typeof window !== 'undefined') {
        return localStorage.getItem(key);
    }
    return null;
}

export function removeLocalStorage(key: string): void {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(key);
    }
}

export const isMobile = () => {
    if (typeof window === 'undefined') return false;

    const userAgent = navigator.userAgent || navigator.vendor;

    // Android, iPhone, iPad, iPod, BlackBerry
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    return mobileRegex.test(userAgent);
};
