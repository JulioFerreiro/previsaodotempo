import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background-image: url("https://images.unsplash.com/photo-1530569673472-307dc017a82d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY4NzE5NzgwOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600");
  color: ${colors.primaryDarkColor};

}

html, body, #root {
  height: 100%;
}

button {
  cursor: pointer;
  border: none;
  outline: none;
  padding: 12px;
  margin-top: 4px;
  background: #7c7c7c2b;
  display: flex;
  align-items: center;
  border-radius: 20px;
  float: right;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
  color: ${colors.primaryColor};
}

body .Toastify .Toastify__toast-container .Toastify__toast--success {
  background: ${colors.successColor};
}
body .Toastify .Toastify__toast-container .Toastify__toast--error {
}

`;

export const Container = styled.section`
  max-width: 450px;
  background: ${colors.biggerbox};
  opacity: 0.8;
  margin: 30px auto;
  padding: 25px;
  border-radius: 25px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
