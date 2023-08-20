import axios from 'axios';

const getApi = async() => {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=fc74591095c1b5dd90acbc183ab3ca62');
    return response.data;
}

export default getApi;