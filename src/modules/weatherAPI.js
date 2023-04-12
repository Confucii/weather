import format from "date-fns/format";

const key = "6c15101c72624deaad1101836231104";

function processCurrentWeatherData(responseData) {
  const data = {
    temp_c: responseData.current.temp_c,
    temp_f: responseData.current.temp_f,
    feelslike_c: responseData.current.feelslike_c,
    feelslike_f: responseData.current.feelslike_f,
    description: responseData.current.condition.text,
    icon: responseData.current.condition.icon,
    country: responseData.location.country,
    date: format(
      new Date(responseData.location.localtime.split(" ")[0]),
      "dd, MMMM"
    ),
    city: responseData.location.name,
  };

  return data;
}

function processForecastWeatherData(responseData) {
  const forecastData = responseData.forecast.forecastday.slice(1);
  const neededData = [];

  forecastData.forEach((forecast) => {
    neededData.push({
      date: format(new Date(forecast.date), "dd, MMMM"),
      maxtemp_c: forecast.day.maxtemp_c,
      maxtemp_f: forecast.day.maxtemp_f,
      mintemp_c: forecast.day.mintemp_c,
      mintemp_f: forecast.day.mintemp_f,
      icon: forecast.day.condition.icon,
    });
  });

  return neededData;
}

export default async function getWeather(city) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=10`
    );
    const responseData = await response.json();
    const currentWeather = processCurrentWeatherData(responseData);
    const forecastWeather = processForecastWeatherData(responseData);

    return [currentWeather, forecastWeather];
  } catch (err) {
    return err;
  }
}
