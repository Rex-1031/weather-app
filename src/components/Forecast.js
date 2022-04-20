import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Forecast = () => {
    const [data, setData] = useState({})

    useEffect(()=>{
        axios
            .get('https://api.openweathermap.org/data/2.5/weather?lat=41.505493&lon=-81.681290&appid=ddda86334bf110d91053b9bccca10443')
                .then(res=>{
                    setData(res.data)
                    console.log(res.data)
                })
                .catch(console.log)
    }, [])
  return (
    <div>Forecast</div>
  )
}

export default Forecast