import { useState } from 'react'
import CoronaForContinent from './components/CoronaForContinent';
import CoronaForCountry from './components/CoronaForCountry';
import Header from "./components/Header";
import RecordedCorona from './components/RecordedCorona';


function App() {
  const [key, setKey] = useState(1)

  return (
    <div>
      <Header onMenuChange={(_key) => {
        setKey(_key)
      }} />

      <div className="md:container md:mx-auto p-8 page-content">
      {key === 1 && <CoronaForCountry/>}
      {key === 2 && <RecordedCorona/>}
      {key === 3 && <CoronaForContinent/>}
      </div>

     
    </div>
  );
}

export default App;
