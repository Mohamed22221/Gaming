import React, { useState } from "react";
import styled from "styled-components";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import TranslateIcon from '@mui/icons-material/Translate';
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <NavLink to="/Gaming">
      <Logo href="">
        GAMING<span></span>
      </Logo>
      </NavLink>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink><NavLink to="/Gaming"  onClick={() => setIsOpen(!isOpen)}>Dashboard</NavLink></MenuLink>
        <MenuLink href="">Branches</MenuLink>
        <MenuLink href="">AboutUs</MenuLink>
        <MenuLink href=""><LocalGroceryStoreIcon/></MenuLink>
        <MenuLink href="">EN<TranslateIcon/></MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;

const MenuLink = styled.a`
  
  padding: 1rem 1.5rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color:var(--white-color)  ;
  transition: all 0.3s ease-in;
  font-size: 1rem;
  font-weight: bold;
  padding-right: 20px;
`;

const Nav = styled.div`
  width:59%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: var(--primary-color);
  position: fixed;
  top: 0;
  z-index: 999;
 
  @media (max-width:950px ) {
  width: 100%;
 
  
}
`;

const Logo = styled.a`
  padding: 1rem 30px;
  color: white  ;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 100;
  @media (max-width: 1180px) {
    
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "650px" : "0")};
    transition: max-height 0.4s ease-in;
    width: 100%;
    background-color: var(--primary-color);
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  padding-right: 30px;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: var(--white-color) ;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 1180px) {
    display: flex;
  }
`;