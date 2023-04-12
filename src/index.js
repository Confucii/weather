import getWeather from "./modules/weatherAPI";
import renderMain from "./modules/main";
import "./styles/style.css";

renderMain();

(async () => {
  const [currentData, forecastData] = await getWeather("Riga");
  console.log(currentData, forecastData);
})();
