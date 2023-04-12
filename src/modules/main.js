import renderForm from "./form";
import renderTempButton from "./tempModeBtn";
import getWeather from "./weatherAPI";
import renderForecast from "./forecast";
import renderCurrentWeather from "./currentWeather";

function renderMain() {
  const mainContent = document.createElement("div");
  mainContent.classList.add("content");

  mainContent.appendChild(renderTempButton());

  mainContent.appendChild(renderForm());

  document.body.appendChild(mainContent);

  (async () => {
    const [currentData, forecastData] = await getWeather("Riga");
    renderCurrentWeather(currentData);
    renderForecast(forecastData);
  })();
}

export default function renderPage() {
  renderMain();
}
