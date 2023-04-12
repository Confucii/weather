export default function renderCurrentWeather(data) {
  const content = document.querySelector(".content");

  if (document.querySelector(".current-weather")) {
    content.removeChild(content.firstChild);
  }

  const currentWeather = document.createElement("div");
  currentWeather.classList.add("current-weather");

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
  temp.textContent = `${data.temp_c}\u00B0C`;

  const tempFeel = document.createElement("p");
  tempFeel.classList.add("temp-feel-current");
  tempFeel.textContent = `Feels like: ${data.feelslike_c}\u00B0C`;

  currentWeather.appendChild(location);
  currentWeather.appendChild(date);
  currentWeather.appendChild(temp);
  currentWeather.appendChild(description);
  currentWeather.appendChild(tempFeel);
  currentWeather.appendChild(image);

  content.insertBefore(currentWeather, content.firstChild);
}
