import React from 'react';
import styles from './WeatherDetails.module.css'

const WeatherDetails = ({info }) => {

    //icon
    const weatherIncon = `http://openweathermap.org/img/wn/${info.icon}@2x.png`



    return (
        <div className={styles.container}>
            <div className={styles.mainContainer}>
                <h3 className={styles.name}>{info.name}</h3>
                <div className={styles.border}>
                </div>
                <div className={styles.mainInfo}>
                    <div className={styles.temp}>
                        {(info.temp - 273.15).toFixed(2)}°C
                    </div>
                    <div className={styles.icon}>
                        <img src={weatherIncon} alt="icon" />
                    </div>
            </div>
            </div>

            <div className={styles.footerInfo}>
                <div className={styles.main}>
                    <h3>{info.main}</h3>
                    <p>Main</p>
                </div>
                <div className={styles.humidity}>
                    <h3>{info.humidity}%</h3>
                    <p>Humidity</p>
                </div>
                <div className={styles.windSpeed}>
                    <h3>{info.speed}</h3>
                    <p>Wind speed</p>
                </div>
            </div>
        </div>
    );
};

export default WeatherDetails;