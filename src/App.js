import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import SelectTimeZone from "./components/SelectTimeZone";
import DisplayTime from "./components/DisplayTime";


function App() {

  const [ currentTime, setCurrentTime ] = useState([]);
  const [ time, setTime ] = useState(null);
  const [ timeZone, setTimeZone ] = useState(null);

      useEffect(function () {
        const refresh = setInterval(() => {
          axios({
          url: `https://worldtimeapi.org/api/timezone/${currentTime}`  
          }).then((timeData) => {
           
            const isoString = timeData.data.datetime
            let result = isoString.match(/\d\d:\d\d/);
    
            setTime(`It is currently ${result} in the ${timeData.data.timezone} time zone.`)
          }); 

        }, 1000);
        return function cleanup() {
          clearInterval(refresh)
        }
      }, [ currentTime ]);
  
     
      const handleTimeZone = function (event) {
        setCurrentTime(event);
      };
      
  return (
    <div className='componentsContainer'>
      <SelectTimeZone handleTimeZone={ handleTimeZone } timeZone={timeZone}/>
      <DisplayTime time={ time } />
    </div>
  );
}

export default App;
