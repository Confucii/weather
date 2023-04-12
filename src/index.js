import getWeather from "./modules/weatherAPI";
import renderForm from "./modules/form";

renderForm();

(async () => {
  const weatherData = await getWeather("Riga");
  console.log(weatherData);
})();
