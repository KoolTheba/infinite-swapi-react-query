import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import InfinitePeople from './people/InfinitePeople';
import InfiniteSpecies from './species/InfiniteSpecies';
import "./App.css";
import { useState } from 'react';

const queryClient = new QueryClient()

function App() {
  const [ infinitePeople, setInfinitePeople] = useState(true)

  const handleOnClick = (str) => str === 'species' ? setInfinitePeople(false) : setInfinitePeople(true)

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Infinite SWAPI</h1>
        <button className='button' onClick={() => handleOnClick('people')}>Star Wars People</button>
        <button className='button' onClick={() => handleOnClick('species')}>Star Wars Species</button>
        {infinitePeople ? <InfinitePeople /> : <InfiniteSpecies />}
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;