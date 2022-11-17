import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  button {
    border: none;
    background: none;
    transition: all .3s;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &:hover{
      cursor: pointer;
      transform: scale(1.02);
    }
  }

  ul{
    list-style: none;
  }
`;
