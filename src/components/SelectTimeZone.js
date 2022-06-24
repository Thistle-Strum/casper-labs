import axios from 'axios';
import { useEffect, useState } from 'react';

function SelectTimeZone({handleTimeZone, timeZone}) {
    
    const [ timeZones, setTimeZones ] = useState([])
    
    useEffect(function (props) {
        axios({
            url: `http://worldtimeapi.org/api/timezone`,
            
            }).then((timeZones) => {
                const timeZonesArray = timeZones.data
                console.log(timeZonesArray.unshift('Please Select an Time Zone'))
                setTimeZones(timeZonesArray);
        }) 
    }, []);

    const handleChange = function ( event ) {
        handleTimeZone( event.target.value )
    };

    return (
        <div className="selectionContainer">
            <label>Please Select a Time Zone: </label>
            <select
                className="timeZoneSelection"
                id="timeZone"
                name="timeZone"
                onChange={ handleChange }
                value={timeZone}
                >
                {
                    timeZones.map(timeZone => {
                    return (
                        <option>{timeZone}</option>
                        )
                    })
                }
            </select>
        </div>
    );
  }
  
  export default SelectTimeZone;