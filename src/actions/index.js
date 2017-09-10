import axios from 'axios';

const API_KEY = '23c681a5cccdd25571de1c71535c0b42';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_FORECASTS = 'FETCH_FORECASTS';

export function fetchForecasts(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_FORECASTS,
        payload: request
    }
}