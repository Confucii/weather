function createForecastElem(dayForecast) {
  const tempMode = document.querySelector(".chosen").dataset.mode;

  const forecastElem = document.createElement("div");
  forecastElem.classList.add("forecast-elem");

  const forecastDate = document.createElement("div");
  forecastDate.classList.add("forecast-date");
  forecastDate.textContent = dayForecast.date;

  const forecastImage = document.createElement("img");
  forecastImage.setAttribute("src", dayForecast.icon);
  forecastImage.classList.add("forecast-img");

  const forecastMaxTemp = document.createElement("p");
  forecastMaxTemp.classList.add("forecast-max-temp");
  forecastMaxTemp.textContent = `Max: ${
    dayForecast[`maxtemp_${tempMode}`]
  }  \u00B0${tempMode.toUpperCase()}`;

  const forecastMinTemp = document.createElement("p");
  forecastMinTemp.classList.add("forecast-min-temp");
  forecastMinTemp.textContent = `Min: ${
    dayForecast[`mintemp_${tempMode}`]
  }  \u00B0${tempMode.toUpperCase()}`;

  forecastElem.appendChild(forecastDate);
  forecastElem.appendChild(forecastImage);
  forecastElem.appendChild(forecastMaxTemp);
  forecastElem.appendChild(forecastMinTemp);

  return forecastElem;
}

export default function renderForecast(forecastData) {
  const content = document.querySelector(".content");

  if (document.querySelector(".forecast-container")) {
    content.removeChild(document.querySelector(".forecast-container"));
  }

  const forecastContainer = document.createElement("div");
  forecastContainer.classList.add("forecast-container");

  forecastData.forEach((forecast) => {
    forecastContainer.appendChild(createForecastElem(forecast));
  });

  content.appendChild(forecastContainer);
}
