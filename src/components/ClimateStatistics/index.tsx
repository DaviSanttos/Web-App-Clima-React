import React from "react";
import { returnDayWeek } from "../../utils/return_days_week";
import { codeOption } from "../../utils/codeOption";

type TypeClimateResults = {
    ClimateResults: any;
}

export default function ClimateStatistics({ClimateResults}: TypeClimateResults) {

    let resultados: JSX.Element | null = null;

    if(ClimateResults && ClimateResults.daily){
        resultados = (
            <>
                <section className='w-4/5 flex sm:justify-around sm:h-12 items-center gap-4 flex-wrap sm:flex-nowrap p-4 sm:p-0'>
                    <p>Indice UV Max: <span id='uv-today'></span>{Math.round(ClimateResults.daily.uv_index_max[0])}</p>
                    <p>Velocidade do vento: <span id='vel-today'>{ClimateResults.daily.wind_speed_10m_max[0]}</span> Km/h</p>
                    <p>Nascer do sol: <span id='sunrise-today'>{ClimateResults.daily.sunrise[0].split('T')[1]}</span></p>
                    <p>Por do sol: <span id='sunset-today'></span>{ClimateResults.daily.sunset[0].split('T')[1]}</p>
                    <div className='sm:flex w-48 gap-4 flex-wrap relative -top-20 hidden md:-top-28' id='max-min'>
                        <p>Max/ <span className='xl:text-5xl text-2xl'>{Math.round(ClimateResults.daily.temperature_2m_max[0])}<span className='max-cli xl:text-5xl text-xl sm:text-3xl'></span> °C</span></p>
                        <p>Min/ <span className='xl:text-5xl text-2xl'>{Math.round(ClimateResults.daily.temperature_2m_min[0])}<span className='min-cli xl:text-5xl text-xl sm:text-3xl'></span> °C</span></p>
                    </div>
                </section>
                <hr className='w-4/5' />
                <article className='sm:h-2/5 sm:w-4/5 flex sm:justify-center flex-wrap sm:flex-nowrap mt-4 sm:mt-0 mb-5'>
                    <div className='sm:self-center text-center w-1/2 sm:w-auto'>
                        <p className='day-week'>{returnDayWeek(ClimateResults,1)}</p>
                        <img src={"./img/"+codeOption(ClimateResults.daily.weather_code[1])?.split('/')[1]} alt="icon-sun" className='w-1/2 inline sm:w-4/5 xl:w-1/2 img-week' />
                        <p className='temp-max'>{Math.round(ClimateResults.daily.temperature_2m_max[1])}<span>°C</span></p>
                        <p className='temp-min'>{Math.round(ClimateResults.daily.temperature_2m_min[1])}<span>°C</span></p>
                    </div>
                    <div className='self-center text-center w-1/2 sm:w-auto'>
                        <p className='day-week'>{returnDayWeek(ClimateResults,2)}</p>
                        <img src={"./img/"+codeOption(ClimateResults.daily.weather_code[2])?.split('/')[1]} alt="icon-sun" className='w-1/2 inline sm:w-4/5 xl:w-1/2 img-week' />
                        <p className='temp-max'>{Math.round(ClimateResults.daily.temperature_2m_max[2])} <span>°C</span></p>
                        <p className='temp-min'>{Math.round(ClimateResults.daily.temperature_2m_min[2])} <span>°C</span></p>
                    </div>
                    <div className='self-center text-center w-1/2 sm:w-auto mt-4 sm:mt-0'>
                        <p className='day-week'>{returnDayWeek(ClimateResults,3)}</p>
                        <img src={"./img/"+codeOption(ClimateResults.daily.weather_code[3])?.split('/')[1]} alt="icon-sun" className='w-1/2 inline sm:w-4/5 xl:w-1/2 img-week' />
                        <p className='temp-max'>{Math.round(ClimateResults.daily.temperature_2m_max[3])} <span>°C</span></p>
                        <p className='temp-min'>{Math.round(ClimateResults.daily.temperature_2m_min[3])} <span>°C</span></p>
                    </div>
                    <div className='self-center text-center w-1/2 sm:w-auto mt-4 sm:mt-0'>
                        <p className='day-week'>{returnDayWeek(ClimateResults,4)}</p>
                        <img src={"./img/"+codeOption(ClimateResults.daily.weather_code[4])?.split('/')[1]} alt="icon-sun" className='w-1/2 inline sm:w-4/5 xl:w-1/2 img-week' />
                        <p className='temp-max'>{Math.round(ClimateResults.daily.temperature_2m_max[4])}<span>°C</span></p>
                        <p className='temp-min'>{Math.round(ClimateResults.daily.temperature_2m_min[4])} <span>°C</span></p>
                    </div>
                    <div className='self-center text-center w-1/2 sm:w-auto mt-4 sm:mt-0'>
                        <p className='day-week'>{returnDayWeek(ClimateResults,5)}</p>
                        <img src={"./img/"+codeOption(ClimateResults.daily.weather_code[5])?.split('/')[1]} alt="icon-sun" className='w-1/2 inline sm:w-4/5 xl:w-1/2 img-week' />
                        <p className='temp-max'>{Math.round(ClimateResults.daily.temperature_2m_max[5])}<span>°C</span></p>
                        <p className='temp-min'>{Math.round(ClimateResults.daily.temperature_2m_min[5])} <span>°C</span></p>
                    </div>
                    <div className='self-center text-center w-1/2 sm:w-auto mt-4 sm:mt-0'>
                        <p className='day-week'>{returnDayWeek(ClimateResults,6)}</p>
                        <img src={"./img/"+codeOption(ClimateResults.daily.weather_code[6])?.split('/')[1]} alt="icon-sun" className='w-1/2 inline sm:w-4/5 xl:w-1/2 img-week' />
                        <p className='temp-max'>{Math.round(ClimateResults.daily.temperature_2m_max[6])} <span>°C</span></p>
                        <p className='temp-min'>{Math.round(ClimateResults.daily.temperature_2m_min[6])} <span>°C</span></p>
                    </div>
                </article>
            </>
        );
    }

    return resultados;
   
}