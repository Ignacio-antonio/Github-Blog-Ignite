import moment from "moment";

export function RelativeDateFormatter(date: string) {
    return moment(date).fromNow();
}