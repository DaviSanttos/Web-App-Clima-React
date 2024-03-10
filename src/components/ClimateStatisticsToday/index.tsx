import React from "react";

type ResultProps = {
  results : any,
  name: string,
} 

export default function AAA({results, name}: ResultProps){
 
  let resultados: JSX.Element | null = null;

  if (results && results.current && results.daily) {
    resultados = (
      <>
        <h2 className='sm:mt-8 xl:text-3xl md:text-2xl text-base mt-8'>
          Clima Atual: <span id='cli-today' className='xl:text-3xl md:text-2xl text-base'>{name}</span>
        </h2>
        <p className='mt-6 xl:text-5xl sm:text-3xl md:text-2xl text-xl'><span id='temp-today' className='xl:text-5xl md:text-2xl sm:text-3xl text-xl'>{Math.round(results.current.temperature_2m)}</span> °C</p>
        <div className='mt-8 sm:hidden'>
          <p>Max/ <span className='xl:text-5xl text-xl sm:text-3xl'><span className='max-cli xl:text-5xl text-xl sm:text-3xl'>{Math.round(results.daily.temperature_2m_max[0])}</span> °C</span></p>
          <p>Min/ <span className='xl:text-5xl text-xl sm:text-3xl'><span className='min-cli xl:text-5xl text-xl sm:text-3xl'>{Math.round(results.daily.temperature_2m_min[0])}</span> °C</span></p>
        </div>
      </>
    );
  }
  return resultados;
}