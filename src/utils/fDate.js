import moment from "moment";

export const fDate = (date, format = "DD/MM/YYYY HH:mm:ss") => {
    return moment(date).format(format);
};
