import { useEffect, useState} from 'react'
import './App.css';
import WeatherCard from './components/WeatherCard';

function App() {
  const [data, setData] = useState({})

    useEffect(()=>{
        const fetchData = async()=>{
            //Store this data in a .env later
            await fetch('https://api.openweathermap.org/data/2.5/weather?lat=41.505493&lon=-81.681290&appid=ddda86334bf110d91053b9bccca10443')
            .then(res => res.json())
            .then(result =>{
                setData(result)
            })
        }
        fetchData()
    }, [])
  return (
    <div className="App">
      <WeatherCard weatherData={data} />
    </div>
  );
}

export default App;
