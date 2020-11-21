export interface HistoryState {
    list: Array<{}>;
}

export interface HistoryListProps {
    city: string;
    date: string;
    temp: number;
    description: string
}

export const SET_HISTORY_LIST = 'history/SET_HISTORY_LIST';
