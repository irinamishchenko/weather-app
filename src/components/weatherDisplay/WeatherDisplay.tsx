import { WeatherData } from "../../interfaces";
import { List, ListItem } from "@mui/material";
import "./weatherDisplay.css";

interface WeatherDisplayProps {
  weather: WeatherData;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather }) => {
  return (
    <div className="weather-display-container">
      <h2>The weather in {weather.name}:</h2>
      <List>
        <ListItem>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt="weather icon"
          />
          {weather.weather[0].description}
        </ListItem>
        <ListItem>
          <span>Temp:</span> {weather.main.temp}℃
        </ListItem>
        <ListItem>
          <span>Feels like:</span> {weather.main.feels_like}℃
        </ListItem>
        <ListItem>
          <span>Speed of the wind:</span> {weather.wind.speed} m/s
        </ListItem>
        <ListItem>
          <span>Humidity:</span> {weather.main.humidity}%
        </ListItem>
        <ListItem>
          <span>Pressure:</span> {weather.main.pressure}hPa
        </ListItem>
      </List>
    </div>
  );
};

export default WeatherDisplay;
