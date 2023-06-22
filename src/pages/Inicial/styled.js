import styled from 'styled-components';

export const Title = styled.h1`
  /* background: green; */
  small {
    font-size: 15pt;
    margin-left: 15px;
    color: #999;
  }
  input {
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 20px;
    font-size: 20px;
    background-color: #7c7c7c2b;
    color: #fff;
    width: calc(100% - 40px);
  }
`;

export const Cidade = styled.h2`
  color: #fff;
  font-size: 30px;
  font-weight: 300;
  margin-top: 20px;
`;

export const Temperatura = styled.p`
  font-size: 20px;
  color: #fff;
  margin-top: 20px;
`;

export const Tempo = styled.p`
  img {
    display: flex;
  }

  font-size: 20px;
  color: #fff;
  margin-top: 20px;
`;

export const Umidade = styled.p`
  font-size: 20px;
  color: #fff;
  margin-top: 20px;
`;
