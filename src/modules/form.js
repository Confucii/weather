import getWeather from "./weatherAPI";

function buttonFetch(btn, input) {
  btn.addEventListener("click", async () => {
    try {
      const [currentData, forecastData] = await getWeather(input.value);
      console.log(currentData, forecastData);
    } catch (err) {
      alert("Incorrect input");
    }
  });
}

export default function renderForm() {
  const form = document.createElement("form");

  const text = document.createElement("input");
  text.setAttribute("type", "text");

  const btn = document.createElement("button");
  btn.textContent = "See Weather";
  btn.classList.add("fetch");
  btn.setAttribute("type", "button");
  buttonFetch(btn, text);

  form.appendChild(text);
  form.appendChild(btn);

  return form;
}