import React from 'react'
import styled from 'styled-components';
import Categorys from '../components/home/Categorys';
import TitleHome from '../components/home/TitleHome';
const Home = ({games}) => {
  return (
    <HomeStyle>
      <TitleHome 
       games={games}
       placeholder="Search Here.." 
       />
      <Categorys/>

    </HomeStyle>
  )
}
const HomeStyle = styled.div`
    padding: 20px ;
    flex:2;
    @media (max-width:950px ) {
 margin-top: 300px;
  
}
@media (max-width:949px ) {
 margin-top: 370px;
  
}
@media (max-width:500px ) {
 margin-top: 300px;
  
}

`
export default Home