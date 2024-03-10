import React, { useEffect, useState } from "react";
import ClimateStatisticsToday from "../ClimateStatisticsToday";
import ClimateImg from "../ClimateImg";
import { formatName } from "../../utils/format_name";
import { codeOption } from "../../utils/codeOption";
import {useNavigate } from 'react-router-dom';

type ResultProps = {
    OnResults : any
  } 

export default function Search({OnResults}: ResultProps){

    const [valueInput, setValueInput] = useState('');
    const [arraySuggestion, setArraySuggestion] = useState([{}]);
    const [arrayResults, setArrayResults] = useState([{}]);
    const [cityName, setCityName] = useState('Sorocaba');
    const [imgToday, setImgToday] = useState<string | undefined>();
    const navigate = useNavigate();
    let list = arraySuggestion.map((data : any, index) => {
        const nameFormated = formatName(data.display_name);
        return (
            <li key={index} className="suggestion-item" onClick={() => handleSelect(data)}>
                {nameFormated}
            </li>
        );
    });

    useEffect(() => {
       
        async function fetchData() {
            try {
              const climateData = await getClimate(-23.5, -47.5);
              setArrayResults(climateData);
            } catch (error) {
                navigate('/error');
            }
          }

          fetchData(); 

    }, []);

    useEffect(() => {

        function getPlacesForName(valueInput: string){
            fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(valueInput)}&format=json&limit=1`).then(response => response.json()).then(data =>  setArraySuggestion(data)).catch(() => navigate('/error'));
        }
        
        getPlacesForName(valueInput); 
    }, [navigate, valueInput]);

    function handleInputChange(e: any){
        setValueInput(e.target.value);
    }

 

    async function handleSelect(item: any){
        const inputElement = document.getElementById('input-place') as HTMLInputElement;
        if (inputElement) {
            inputElement.value = '';
        }
    
        setArrayResults(await getClimate(item.lat,item.lon));
        setCityName(item.name);

        setValueInput('');
      }

      async function getClimate(lat: number,lon: number){
          let res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max,wind_speed_10m_max,weather_code&timezone=auto`).then(response => response.json()).catch(() => navigate('/error'));
          OnResults(res);
        if(res && res.current && res.current.weather_code){
            setImgToday(codeOption(res.current.weather_code));
        }else {
            navigate('/error');
        }
        return res;
      }

    return (
        <>
           <section className="sm:self-center sm:w-1/3">
            <div id="input-search" className='justify-center mt-5 sm:static'>
                <input type="text" placeholder="Cidade / Estado..." className="rounded-md lg:w-4/6 text-center p-4 h-8 text-black w-full" id='input-place' onChange={handleInputChange} autoComplete="off"/>
                <div id="autocomplete-dropdown" className="autocomplete-dropdown-container">
                    <ul>
                        {list}
                    </ul>
                </div>
            </div>
                <ClimateStatisticsToday results={arrayResults} name={cityName}/>
            </section>
                <ClimateImg img={imgToday}/>
        </>
    );
}