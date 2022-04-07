import { useState, useEffect } from "react"

import "./style.css";


const SearchWeather = ({inputValue, setInputValue, weather, setWeather, setCity}) => {


  
  const handleSubmit = () => {
    fetch(`https://goweather.herokuapp.com/weather/${inputValue}`)
      .then((res) => res.json())
      .then((res) => setWeather(res.temperature))
      .then((res) => setCity(inputValue))
  }

  return (
    <div className="search-container">
      <div>
          <input
            className="search-input"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
        </div>
        <div>
          <button className="search-button" onClick={() => handleSubmit()}>
            Search
          </button>
        </div>
    </div>
  )
}

export default SearchWeather