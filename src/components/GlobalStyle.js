import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }
  body{
    width:100%;
    font-family: 'Righteous', cursive;
  }
  a{
    text-decoration:none;
    color:#2a2a2a;
  }
  #root{
    background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  }
  h3{
    font-size:1.3rem;
    color:#333;
    padding:1rem 0rem;
  }
  img{
    display:block;
  }
`


export default GlobalStyle