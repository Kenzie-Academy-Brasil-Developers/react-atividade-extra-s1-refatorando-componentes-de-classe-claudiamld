import "./style.css";

const DisplayWeatherTwo = ({weather, city}) => {
  
  return (
    <div className="display-container">
      <div className="display-city">{city}</div>
      <div className="display-temperature">{weather}</div>
    </div>
  )
}
export default DisplayWeatherTwo