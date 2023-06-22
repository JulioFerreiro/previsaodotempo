import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { CgSearch } from 'react-icons/cg';
// import { BsFillCloudyFill } from 'react-icons/bs';

import { Title, Cidade, Temperatura, Umidade, Tempo } from './styled';
import { Container } from '../../styles/GlobalStyles';
// import * as exampleActions from '../../store/modules/example/actions';

export default function Inicial() {
  const key = 'bceea876ac004c8a807222411231906';
  const [city, setCity] = useState('');
  const [weatherForecast, setWeatherForecast] = useState(null);

  const handleChage = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&lang=pt`
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error('Failed to fetch weather data');
      })
      .then((data) => {
        setWeatherForecast(data);
        console.log(data)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container>
      <Title>
        <input
          placeholder="Digite o nome de uma Cidade?"
          onChange={handleChage}
          value={city}
        />
        <button type="button" onClick={handleSearch}>
          <CgSearch />
        </button>
      </Title>
      {weatherForecast ? (
        <>
          <Cidade>
            {weatherForecast.location.name} - {weatherForecast.location.region}
          </Cidade>
          <Temperatura>{weatherForecast.current.temp_c}°C</Temperatura>
          <Tempo>
            <img
              src={weatherForecast.current.condition.icon}
              alt="Condição climática..."
            />
            <p>{weatherForecast.current.condition.text}</p>
          </Tempo>
          <Umidade>Umidade: {weatherForecast.current.humidity}</Umidade>
        </>
      ) : null}
    </Container>
  );
}
