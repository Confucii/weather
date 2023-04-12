import getWeather from "./modules/weatherAPI";
import renderMain from "./modules/main";
import "./styles/style.css";
import renderCurrentWeather from "./modules/currentWeather";

renderMain();

(async () => {
  const [currentData, forecastData] = await getWeather("Riga");
  console.log(currentData, forecastData);
  renderCurrentWeather(currentData);
})();
