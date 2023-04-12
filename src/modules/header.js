import renderCurrentWeather from "./currentWeather";
import getWeather from "./weatherAPI";

async function changeMode(btn) {
  const chosen = document.querySelector(".chosen");
  chosen.classList.toggle("chosen");

  btn.classList.toggle("chosen");

  const [currentData, forecastData] = await getWeather(
    document.querySelector(".current-weather").dataset.city
  );
  renderCurrentWeather(currentData);
}

export default function renderHeader() {
  const header = document.createElement("div");
  header.classList.add("header");

  const buttonCels = document.createElement("button");
  buttonCels.setAttribute("data-mode", "c");
  buttonCels.classList.add("temp-btn");
  buttonCels.classList.add("btn-c");
  buttonCels.classList.add("chosen");
  buttonCels.textContent = `\u00B0C`;
  buttonCels.addEventListener("click", (e) => {
    changeMode(e.currentTarget);
  });

  const slash = document.createElement("p");
  slash.classList.add("slash");
  slash.textContent = "\\";

  const buttonFahr = document.createElement("button");
  buttonFahr.setAttribute("data-mode", "f");
  buttonFahr.classList.add("temp-btn");
  buttonFahr.classList.add("btn-f");
  buttonFahr.textContent = `\u00B0F`;
  buttonFahr.addEventListener("click", (e) => {
    changeMode(e.currentTarget);
  });

  header.appendChild(buttonCels);
  header.appendChild(slash);
  header.appendChild(buttonFahr);

  document.body.appendChild(header);
}
