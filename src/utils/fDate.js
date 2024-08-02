import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";
import moment from "moment";

export const fDate = (date, format = "DD/MM/YYYY HH:mm:ss") => {
    return moment(date).format(format);
};

/**
 * Calculates the distance from the given date to the current date and returns
 * a human-readable string indicating the time difference. If the input date is
 * invalid or falsy, an empty string is returned.
 *
 * @param {string | Date} date - The date to calculate the time difference from.
 * @return {string} A string indicating the time difference from the input date
 * to the current date. If the input date is invalid or falsy, an empty string is
 * returned.
 */
export const fToNow = (date) => {
    return date ? formatDistanceToNow(new Date(date), { addSuffix: true, locale: vi }) : "";
};
