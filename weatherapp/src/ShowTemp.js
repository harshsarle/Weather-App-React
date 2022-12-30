import React from 'react';
import './ShowTempStyles.css';

function ShowTemp({text}) {
  return (
    <div className='container1'>
               <div className='a'>
               <div className='w-card' >
                 <div className='w-image'>
                 <img src=" https://media.istockphoto.com/id/1405219894/photo/fir-trees-around-the-lake-in-the-autumn-misty-morning-lake-synevyr-in-the-carpathian.jpg?b=1&s=170667a&w=0&k=20&c=x_9HkyUNjj08dk5pP1GMS77dAPkx0m3SCUMVaqEBzeI=" alt="" />
                  </div>   
                  <h1>Description</h1>
                  <h2>{text.description}</h2>          
               </div>

               <div className='w-card' >
                 <div className='w-image'>
                  <img src='https://cdn.pixabay.com/photo/2018/02/05/13/15/sunset-3132179__340.jpg' alt='' />
                  </div>   
                  <h1>Temperature</h1>
                  <h2>{text.temp}</h2>          
               </div>


               <div className='w-card' >
                 <div className='w-image'>
                  <img src='https://cdn.pixabay.com/photo/2019/05/03/14/24/landscape-4175978__340.jpg' alt='' />
                  </div>   
                  <h1>Min. Temperature</h1>
                  <h2>{text.temp_min}</h2>          
               </div>
               </div>

               <div className='b'>

               <div className='w-card' >
                 <div className='w-image'>
                  <img src='https://cdn.pixabay.com/photo/2017/07/31/23/46/trees-2562083__340.jpg' alt='' />
                  </div>   
                  <h1>Max. Temperature</h1>
                  <h2>{text.temp_max}</h2>          
               </div>

               <div className='w-card' >
                 <div className='w-image'>
                  <img src='https://cdn.pixabay.com/photo/2020/05/17/20/21/drops-5183426__340.jpg' alt='' />
                  </div>   
                  <h1>Humidity</h1>
                  <h2>{text.humidity}</h2>          
               </div>

               <div className='w-card' >
                 <div className='w-image'>
                  <img src='https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883__340.jpg' alt='' />
                  </div>   
                  <h1>Sunrise</h1>
                  <h2>{text.sunrise}</h2>          
               </div>
               </div>
               
               <div className='c'>

               <div className='w-card' >
                 <div className='w-image'>
                  <img src='https://cdn.pixabay.com/photo/2015/03/28/16/40/lake-696098__340.jpg' alt='' />
                  </div>   
                  <h1>Sunset</h1>
                  <h2>{text.sunset}</h2>          
               </div>

               <div className='w-card' >
                 <div className='w-image'>
                  <img src='https://cdn.pixabay.com/photo/2016/08/03/19/42/globe-1567578__340.jpg' alt='' />
                  </div>   
                  <h1>Country</h1>
                  <h2>{text.country}</h2>          
               </div>
               </div>
 
      
    </div>
  )
}

export default ShowTemp
