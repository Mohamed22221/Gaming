import { createGlobalStyle } from "styled-components";
const GlopalStyle = createGlobalStyle`
 :root{
    --primary-color: rgb(153 5 190 / 80%);
    --primary-color-obacity: rgb(153 5 190 / 10%);
    --background-dark-color: #1f2029;
    --font: #b7b4b4;
    --white-color: #FFF;
} 

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem;
    
}
body{
    background-color:black;
     font-family: 'Nunito', sans-serif;
     color: black;
}
body::-webkit-scrollbar{
    width: 9px;
    background-color: black;
}
body::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: var(--primary-color);
}
body::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: black;
}
a{
    
    font-family: inherit;
    color: var(--font-light-color);
    font-size: inherit;
    font-size: 1rem;
}


`

export default GlopalStyle