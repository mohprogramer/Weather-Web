import React, { useEffect, useState } from 'react';

import WeatherDetails from './WeatherDetails';

import styles from './Search.module.css'

const Search = () => {

    const [city , setCity] = useState('Tehran');
    const [info, setInfo] = useState({});


    const getWeatherInfo = async() => {

        try{

            

            let API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fc74591095c1b5dd90acbc183ab3ca62`;
    
            let res = await fetch(API);
            let data = await res.json();
            console.log(data)

            const {name} = data;
            const {temp, humidity} = data.main;
            const {speed} = data.wind;
            const {main , icon} = data.weather[0]

            const weatherInfo = {
                name,
                temp,
                humidity,
                speed,
                main,
                icon
            }     
            
            setInfo({...weatherInfo})
    }catch{
        console.log('something went wrong!')
    }

    }

    const keyHandler = (event) => {
        if(event.key === 'Enter'){
            getWeatherInfo()
            setCity("")
        }
    }

    
    useEffect(() => {
        getWeatherInfo();
    }, [])
    
    
    return (
        <>
            <div className={styles.container}>
                <input 
                value={city} 
                type='search' 
                onChange={e => setCity(e.target.value)}
                onKeyPress={keyHandler}
                placeholder="Search locatoin..."
                 />
            </div>
                <WeatherDetails info={info}  />
        </>

    );
};

export default Search;