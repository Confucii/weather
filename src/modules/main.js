import renderForm from "./form";
import renderHeader from "./header";
import getWeather from "./weatherAPI";
import renderForecast from "./forecast";
import renderCurrentWeather from "./currentWeather";

function renderMain() {
  const mainContent = document.createElement("div");
  mainContent.classList.add("content");

  mainContent.appendChild(renderForm());

  document.body.appendChild(mainContent);

  (async () => {
    const [currentData, forecastData] = await getWeather("Riga");
    console.log(forecastData);
    renderCurrentWeather(currentData);
    renderForecast(forecastData);
  })();
}

export default function renderPage() {
  renderHeader();
  renderMain();
}
