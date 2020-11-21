import { WeatherState } from '../store/home/types';
import { HistoryState } from '../store/history/types';

export interface RootState {
    weather: WeatherState;
    history: HistoryState;
}
