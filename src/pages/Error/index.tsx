import React from 'react';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {

  function handleClick(){
    navigate('/');
  }

  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-t from-gray to-blue h-screen w-screen text-white flex justify-center flex-wrap items-center">
      <main className="flex w-2/3 sm:justify-around sm:h-1/2 justify-center items-center flex-wrap h-1/2">
        <p>Ops! Parece que tivemos um probleminha ao obter as informações do serviço de clima. Por favor, tente novamente mais tarde. Agradecemos a sua compreensão!</p>
        <button className='w-2/3 bg-slate-600 rounded-lg h-20' onClick={handleClick}>Tentar Novamente</button>
      </main>
    </div>
    
  );
}

export default ErrorPage;
