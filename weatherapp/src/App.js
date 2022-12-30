import React, {useState} from "react";
import axios from "axios";
import ShowTemp from "./ShowTemp";

function App() {
  const[city , setCity] = useState("")
  const[data,setData]=useState({
    description:"",
    temp:0, 
    temp_max:0,
    temp_min:0,
    humidity:0,
    sunrise:0,
    sunset:0, 
    country:"",

  })


  const handleClick=()=>{
   
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e734fdedcef8decff4ab83ce962153eb`)
    .then((response)=>{
      setData({
        description:response.data.weather[0].description,
        temp:response.data.main.temp, 
        temp_max:response.data.main.temp_max,
        temp_min:response.data.main.temp_min,
        humidity:response.data.main.humidity,
        sunrise:response.data.sys.sunrise,
        sunset:response.data.sys.sunset, 
        country:response.data.sys.country

      })
    })

  }
  return (
    <div className="comp">
    <div className='container'>
      <h1>WEATHER APP REACT </h1>
      <input type="text" className='control' placeholder="Enter city name" value={city} onChange={(e)=>{
        setCity(e.target.value);

      }}/>
      <div className="btnn">
      <button className='btn' type="submit" onClick={handleClick}>Find</button>
     </div>
    </div>

    
      <ShowTemp text={data}></ShowTemp>

    </div>


  );
}

export default App;
