import React from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Wallpapers from '../img/banner.jpg';
 const Main = () => {
  return (
    <MainStyle>   
            <Navbar />
            <div className="img">
                <img src={Wallpapers}/>
            </div>
            <div className='about'>
              <h1>FIND OUR <span>GAMES</span> ON APPSTORE</h1>

            </div>
        
    </MainStyle>
  )
}
const MainStyle = styled.div`
overflow: hidden;
flex: 3;
.img{
    
    top: 0px;
    position: fixed;
    z-index: 100;
    width: 100%;
    img{
        overflow: hidden;
        height: 100vh;
        width: 100%;

    }

}
@media (max-width:950px ) 
{
      .img{
        position: absolute;
        img{ 
      width: 100%;
      height: 37vh;
        }
      }

}
.about{
  h1{
    position: fixed;
    top: 40%;
    left: 50%;
    font-size: 50px;
    color:white;
    z-index: 1000;
    @media (max-width:950px ) {
      position: absolute;
    left: 0;
    text-align: center;
    top: 20%;
    width: 100%;
    font-size: 30px;
    color:white;
    z-index: 110;
  }
  }
  span{
    font-size: 50px;
    color: black;
    font-weight: bold;
    @media (max-width:950px ) {

    font-size: 30px;

  
  }
}
  
}

`
export default Main