import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '366ed043fbf98ef9c65f1505e761e2a8';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}











//const API_KEY = '366ed043fbf98ef9c65f1505e761e2a8';

