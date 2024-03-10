import React, { useState } from 'react';
import Search from './components/Search';
import ClimateStatistics from './components/ClimateStatistics';

function App() {
  const [results, setResults] = useState([{}]);
  
  return (
    <div className="bg-gradient-to-t from-gray to-blue sm:h-screen w-screen text-white flex justify-center flex-wrap" id='content'>
      <main className="flex w-4/5 sm:justify-around sm:h-1/2 justify-center mb-5 sm:mb-0">
          <Search OnResults={setResults}/>
      </main>
          <ClimateStatistics ClimateResults={results}/>
    </div>
  );
}

export default App;
