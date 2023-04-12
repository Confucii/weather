import renderCurrentWeather from "./currentWeather";
import getWeather from "./weatherAPI";
import search from "../images/magnify.svg";
import renderForecast from "./forecast";

function buttonFetch(btn, input) {
  btn.addEventListener("click", async () => {
    try {
      const [currentData, forecastData] = await getWeather(input.value);
      renderCurrentWeather(currentData);
      renderForecast(forecastData);
    } catch (err) {
      alert("Invalid input!");
    }
  });
}

export default function renderForm() {
  const form = document.createElement("form");

  const text = document.createElement("input");
  text.setAttribute("type", "text");
  text.value = "Riga";

  const btn = document.createElement("button");
  btn.classList.add("fetch");
  btn.setAttribute("type", "button");
  buttonFetch(btn, text);
  const buttonImg = document.createElement("img");
  buttonImg.setAttribute("src", search);
  btn.appendChild(buttonImg);

  form.appendChild(text);
  form.appendChild(btn);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    btn.dispatchEvent(new Event("click"));
  });
  return form;
}
