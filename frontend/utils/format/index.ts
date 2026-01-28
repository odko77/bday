export function formatMoney(price: any, currency = "₮") {
    return (parseFloat(price)).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }) + ` ${currency}`;
}

export function showMoney(min: any, max: any, currency = "₮") {

    const _min = formatMoney(min, currency)
    const _max = formatMoney(max, currency)

    if (_min === _max) {
        return _min;
    }
    else {
        return `${_min} - ${_max}`
    }
}

export function formatDate(dateString: string | Date | null | undefined, hasTime=true): string {
    // Return empty string for null, undefined, or empty values
    if (!dateString) {
        return '';
    }

    const date = new Date(dateString);

    // Check if the date is invalid
    if (isNaN(date.getTime())) {
        return '';
    }

    // Format as MM/DD/YYYY, HH:MM
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${month}/${day}/${year}${hasTime ? `, ${hours}:${minutes}` : ""}`;
}
