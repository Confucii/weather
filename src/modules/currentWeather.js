export default function renderCurrentWeather(data) {
  const content = document.querySelector(".content");

  if (document.querySelector(".current-weather")) {
    content.removeChild(document.querySelector(".current-weather"));
  }

  const tempMode = document.querySelector(".chosen").dataset.mode;

  const currentWeather = document.createElement("div");
  currentWeather.classList.add("current-weather");
  currentWeather.setAttribute("data-city", `${data.city}`);

  const location = document.createElement("p");
  location.classList.add("location-current");
  location.textContent = `${data.city}, ${data.country}`;

  const date = document.createElement("p");
  date.classList.add("date-current");
  date.textContent = `${data.date}`;

  const image = document.createElement("img");
  image.classList.add("img-current");
  image.setAttribute("src", data.icon);

  const description = document.createElement("p");
  description.classList.add("description-current");
  description.textContent = data.description;

  const temp = document.createElement("p");
  temp.classList.add("temp-current");
  temp.textContent = `${
    data[`temp_${tempMode}`]
  } \u00B0${tempMode.toUpperCase()}`;

  const tempFeel = document.createElement("p");
  tempFeel.classList.add("temp-feel-current");
  tempFeel.textContent = `Feels like: ${
    data[`feelslike_${tempMode}`]
  } \u00B0${tempMode.toUpperCase()}`;

  currentWeather.appendChild(location);
  currentWeather.appendChild(date);
  currentWeather.appendChild(temp);
  currentWeather.appendChild(description);
  currentWeather.appendChild(tempFeel);
  currentWeather.appendChild(image);

  content.appendChild(currentWeather);
}
