import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
 const TitleHome = ({ games }) => {
   //state filter map
 const [filterData , SetFilter] = useState([])
   //function filter map
 const HandelFilter = (event)=>{
 const searchValue = event.target.value
 const NewData = games.filter((value)=>{
   return value.title.toUpperCase().includes(searchValue.toUpperCase())
 })
 if (searchValue === "") {
  SetFilter([])
 }else{
    SetFilter(NewData)
 }

}
  return (
    <StyleTitleHome>
      <div className="title">
        <h3>Area</h3>
        <h3>{new Date().toLocaleString()}</h3>
      </div>
      <input placeholder="Search Here.." type="text" onChange={HandelFilter} />
    {/*search map-------*/}
      {filterData.length != 0 && 
      <div className='data-search'>
        {filterData.map((item) => {
          return (<Link to={`/game${item.id}`} key={item.id} className="link" >
            <p>{item.title}</p>
          </Link>)
        })}
      </div>
      } 

    </StyleTitleHome>
  )
}
const StyleTitleHome = styled.div`
    flex:2;
   .title{
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    color: var(--font);
    cursor: pointer;
    }
    input{
    width: 100%;
    border: none;
    border-bottom: 1px solid var(--primary-color);
    padding: 10px 50px 20px;
    text-align: center;
    font-weight: 500;
    font-size: 22px;
    background: transparent;
    color: var(--primary-color);
      
    }
    .data-search{
    margin-top: 5px;
    width: 100%;
    height: 150px;
    background-color: transparent;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow: hidden;
    overflow-y: auto;
     &::-webkit-scrollbar {
    display: none;
}
    }
    .link{
      width: 100%;
     height: 50px;
     display: flex;
     align-items: center;
     color: white;
     &:hover{
      background-color: #383838;
     }
    }

    .link p{
      padding: 6px;
    }

`
export default TitleHome