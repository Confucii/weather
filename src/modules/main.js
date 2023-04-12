import renderForm from "./form";
import renderHeader from "./header";
import getWeather from "./weatherAPI";
import renderCurrentWeather from "./currentWeather";

function renderMain() {
  const mainContent = document.createElement("div");
  mainContent.classList.add("content");

  mainContent.appendChild(renderForm());

  document.body.appendChild(mainContent);

  (async () => {
    const [currentData, forecastData] = await getWeather("Riga");
    renderCurrentWeather(currentData);
  })();
}

export default function renderPage() {
  renderHeader();
  renderMain();
}
