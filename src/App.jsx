import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MainCounter from './components/MainCounter.jsx';
import Button from './components/ButtonCount.jsx';
import './App.css'

function App() {
  let [countRunners, setCountRunners] = useState(0);

  const handleAdd = () => {
    setCountRunners(++countRunners);
  };
  const handleRemove = () => {
    setCountRunners(countRunners == 0 ? 0 : --countRunners);
  };
  const handleReset = () => {
    setCountRunners((countRunners = 0));
  };

  return (
    <>
      <h1>Marathon</h1>
      <div className="card">
        <MainCounter countRunners={countRunners}/>
        <div className='app_buttonsAddRemove'>
        <Button label="+1" functionEffect={handleAdd}/>
        <Button label="-1" functionEffect={handleRemove}/>
        </div>
        <h3>Attention, pour remettre à 0 le compteur :</h3>
        <Button label="Reset" functionEffect={handleReset}/>
      </div>
    </>
  )
}

export default App
