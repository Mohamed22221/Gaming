import React from 'react'
import styled from 'styled-components'
import TitleHome from '../home/TitleHome'
import play1 from "../../img/play1.webp"
import { Link } from 'react-router-dom'

const OtherGames = ({games}) => {
  const ListGames = games.map((item)=>{
    return ( 
    <Link to={`/game${item.id}`}   >
    <div key={item.id}>
      <div className='img'>
       <img src={play1}/>
      </div>
      <h1>{item.title}</h1>
    </div>
    </Link>  
    )
  })
   return (
     <BestStyle>
         <TitleHome/>
 <div className='item-game'>
   
   {ListGames}
 </div>
     </BestStyle>
   )
 }
 const BestStyle = styled.div`
 
  padding: 20px;
  flex: 2;
  color: white;
  @media (max-width:750px ) {
     margin-top: 360px;
   }
   @media (max-width:550px ) {
     margin-top: 300px;
   }
 .item-game{
   display: grid;
   grid-template-columns: repeat( auto-fill, minmax(250px, 1fr) );
   gap: 25px;
   padding-top: 40px;
   cursor: pointer;
   h1{
     padding: 10px;
   }
 
 
   .img{
     overflow: hidden;
     img{
       width: 100%;
       overflow: hidden;
       transition: 0.7s;
       &:hover{
         transform: scale(1.3) rotate(-10deg);
          
       }
     }
   }
 }
 `

export default OtherGames