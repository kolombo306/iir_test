import { useState } from 'react';
import '../App/App.css';
import Button from '../Button/Button';

function Weather() {
  const apiKey = 'a24f8a87c4b39336854994a0fb800e94';

  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  const clearInput = () => {
    setError(null);
    setCity('');
  };

  const inputHandler = (e) => {
    setError(null);
    setCity(e.target.value);
  };

  const getWeather = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const cityToSearch = city.trim();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityToSearch}&limit=1&lang=ru&units=metric&appid=${apiKey}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(
            'Ошибка запроса данных, попробуйте изменить запрос или повторно его отправить'
          );
        }
      })
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setWeatherData({
          Город: data.name,
          'Температура, °С:': data.main.temp,
          'Влажность, %': data.main.humidity,
          'Ощущается как, °С': data.main.feels_like,
          Облачность: data.weather[0].description,
          'Скорость ветра, м/с': data.wind.speed,
        });
        console.log(data.name);
      })
      .catch((e) => {
        console.log(e);
        setError(e);
        setIsLoading(false);
        setWeatherData(null);
      });
  };

  return (
    <div className="container-md d-flex justify-content-center align-items-center flex-column fullheight">
      <form onSubmit={getWeather}>
        <div className="input-group">
          <input
            value={city}
            onChange={inputHandler}
            type="text"
            className="form-control mx-1 my-2"
            placeholder="Введите город"
            required
          />
          <Button
            caption="Очистить"
            cb={clearInput}
            buttonClass="btn-secondary"
          />
        </div>

        <div className="text-center mt-1">
          <Button
            caption={isLoading ? 'Загрузка...' : 'Показать погоду'}
            type="submit"
            disabled={isLoading}
          />
        </div>
      </form>
      {error ? (
        <div className="text-center">{error.message}</div>
      ) : (
        weatherData && (
          <div className="card weathercard">
            <ul className="list-group list-group-flush">
              {Object.entries(weatherData).map((el) => (
                <li key={el[0] + el[1]} className="list-group-item">
                  {`${el[0]} : ${el[1]}`}
                </li>
              ))}
            </ul>
          </div>
        )
      )}

      <div className="text-center">
        <Button caption="На главную" route="/" />
      </div>
    </div>
  );
}

export default Weather;
