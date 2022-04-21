import { useEffect, useState} from 'react'
import './App.css';
import WeatherCard from './components/WeatherCard';

function App() {
  const [data, setData] = useState({})

    useEffect(()=>{
        const fetchData = async()=>{
            //Store this data in a .env later
            await fetch(`${process.env.REACT_APP_API_URL}appid=${process.env.REACT_APP_API_KEY}`)
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
