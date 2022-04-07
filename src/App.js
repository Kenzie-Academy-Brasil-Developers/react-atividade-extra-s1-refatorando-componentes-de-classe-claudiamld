import DisplayWeather from "./components/DisplayWeather";
import SearchWeather from "./components/SearchWeather";

import "./App.css";
import { useState } from 'react'


const App = () => {

  const [inputValue, setInputValue] = useState('')
  const [weather, setWeather] = useState('')
  const [city, setCity] = useState('')

  return (
    <div className="App">
      <SearchWeather 
        inputValue={inputValue} 
        setInputValue={setInputValue} 
        weather={weather} 
        setWeather={setWeather}
        setCity={setCity} 
      />
      <DisplayWeather weather={weather} city={city} />
    </div>
  )
}
export default App