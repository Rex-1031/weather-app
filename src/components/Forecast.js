import React, { useEffect, useState } from 'react';
import moment from 'moment';



const Forecast = () => {
    const [data, setData] = useState({})

    useEffect(()=>{
        const fetchData = async()=>{
            //Store this data in a .env later
            await fetch('https://api.openweathermap.org/data/2.5/weather?lat=41.505493&lon=-81.681290&appid=ddda86334bf110d91053b9bccca10443')
            .then(res => res.json())
            .then(result =>{
                setData(result)
                console.log(result)
            })
        }
        fetchData()
    }, [])
  return (
    <div>
        {(typeof  data.main != 'undefined')?(
            <div>
                <h3>{moment().format('ddd')}</h3>
                <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='weather icon' />

                <p>Hi: {Math.round(1.8*(data.main.temp_max - 273)+32)} &deg;</p>
                <p>Lo: {Math.round(1.8*(data.main.temp_min - 273)+32)} &deg;</p>
            </div>
            
        ):(<div></div>)}
        
    </div>
  )
}

export default Forecast