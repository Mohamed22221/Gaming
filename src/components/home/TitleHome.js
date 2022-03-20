import React, { useState } from 'react'
import styled from 'styled-components';
const TitleHome = () => {



  return (
    <StyleTitleHome>
     <div className="title">
       <h3>Area</h3>
       <h3>{new Date().toLocaleString()}</h3>
     </div>
     <input placeholder="Search Here" type="text" />
    
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
`
export default TitleHome