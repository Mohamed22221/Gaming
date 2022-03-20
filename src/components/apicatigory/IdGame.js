import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import TitleHome from '../home/TitleHome';
import gameimage from '../../img/play1.webp'

const IdGame = ({games}) => {
const params = useParams()    
const [gameid , setGameId] = useState({})
const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
    params: {id: `${params.gameId}`},
    headers: {
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': '945727363amshe31e391d0d43606p1148b7jsndb10b7fe9916'
      }
  };
      useEffect(()=>{
        axios.request(options).then((res)=>{
            setGameId(res.data)
            console.log(res.data)
        })
      },[])
  return (
    <IdStyle>
        <TitleHome/>
    <div className="about-item">
        <div className='img'>
            <img src={gameimage}/>
        </div>
        <div className='name'>
            <h1>Name:<span> {gameid.title}</span></h1>
        </div>
        <div className='data'>
            <h1>Date:<span> {gameid.release_date}</span></h1>
        </div>
        <div className='link'>
            <h1>Link:<a href={gameid.freetogame_profile_url} target="_blank"><span> go link game</span> </a></h1>
        </div>
        <div className='discription'>
            <h1>discription</h1>
            <p>{gameid.description}</p>
        </div>
        <div className='price'>
            <h1>Price</h1>
            <p>15,45$</p>
        </div>
        <textarea name='massage' placeholder='Enter a message here'>
        </textarea>
        <div className='order'>
        <button type='button'>
            Start Order
        </button>
        </div>




    </div>
        
      
    </IdStyle>
  )
}
const IdStyle = styled.div`
    color: white;
    flex: 2;
    padding: 20px;
    @media (max-width:965px ) {
    margin-top: 370px;
  }
  @media (max-width:550px ) {
    margin-top: 300px;
  }
 
  
.about-item{
    padding-top: 20px;
    .img{
        img{
            width: 100%;
        }
    }
    .name ,.data ,.discription ,.link{
        padding: 20px;
        span{
            color : var(--font);
        }
    }
    .discription{
        p{
           padding: 20px 0; 
           color : var(--font);
           font-size:18px
        }
        
    }
    .price{
        padding: 20px;
        display: flex;
        justify-content: space-between;
        p{
            color: #9d8c15;
        }
    }
    textarea{
        padding: 20px;
        margin: 20px 0 20 20px;
        width: 100%;
        background-color: transparent;
    }
    .order{
        padding: 30px;

       button{
        all: unset;
        width: 100%;
        text-align:center;
        cursor: pointer;
        padding: 10px 0px;
        background-color: var(--primary-color);
       }

    }
}

`
export default IdGame