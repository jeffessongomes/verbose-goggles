import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #FFF;
    background-repeat: no-repeat;
    background-size: cover;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  button{
    cursor: pointer;
  }
`;