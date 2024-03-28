import { useState, ChangeEvent } from "react";
import SearchBar from "./components/searchBar/SearchBar";
import WeatherDisplay from "./components/weatherDisplay/WeatherDisplay";
import { WeatherData } from "./interfaces";
import { Snackbar, Alert } from "@mui/material";
import "./App.css";

function App() {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [snackBar, setSnackBar] = useState<{ open: boolean; message: string }>({
    open: false,
    message: "Something went wrong. Try again",
  });
  const API_KEY = process.env.REACT_APP_API_KEY;

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setCity(event.target.value);
  }

  function fetchWeather() {
    if (!city) {
      setSnackBar({ open: true, message: "Enter a city!" });
    } else {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
        .then((response) => {
          if (!response.ok) {
            setSnackBar({
              open: true,
              message: "Something went wrong, try again.",
            });
          }
          return response.json();
        })
        .then((data) => setWeather(data))
        .catch((error) => {
          console.error("Error fetching weather data:", error);
          setSnackBar({
            open: true,
            message: "Something went wrong, try again.",
          });
        });
    }
  }

  function handleCloseSnackbar() {
    setSnackBar({ open: false, message: snackBar.message });
  }

  return (
    <div className="App">
      <SearchBar
        onInputChange={handleInputChange}
        onButtonClick={fetchWeather}
      />
      {weather && weather.cod === 200 ? (
        <WeatherDisplay weather={weather} />
      ) : null}
      <Snackbar
        open={snackBar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity="error">
          {snackBar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
