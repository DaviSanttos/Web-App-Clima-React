import React from "react";

type ImgProps = {
  img: string | undefined;
} 

export default function ClimateImg({img}: ImgProps){
  let resultados: JSX.Element | null = null;
  if(img){
    resultados = (
      <section className="sm:mt-10 mt-20 sm:self-center md:mr-20">
        <div className='lg:mr-40'><img src={'./img/'+ img.split('/')[1]} alt="img-climate" className='lg:w-4/5 lg:h-4/5 sm:w-1/2 sm:h-1/2 m-auto sm:m-0 w-32' id='img-cli' /></div>
        <p className='lg:pl-5 md:text-justify text-center sm:mr-32 xl:text-xl' id='text-cli'>{img.split('/')[0]}</p>
      </section>
    )

  }

    return resultados;
}