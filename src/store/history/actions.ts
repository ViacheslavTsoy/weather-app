import {
    HistoryListProps,
    SET_HISTORY_LIST,
} from "./types";

export function setHistoryList(data: HistoryListProps) {
    return {type: SET_HISTORY_LIST, data}
}
