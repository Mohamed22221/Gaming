import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import catigory from '../../img/catogry.jpg'
const Categorys = () => {
  return (
    <CategorysStyle>
        <h1>CATEGORYS</h1>
        
        <div className='all-categorys'>
            <Link to="/bestgames">
            <div className='item-catigory'>
                <div className='img-catigory'>
                 <img src={catigory}/>
                </div>
                <div className='about-catigory'>
                    <p>Best Games</p>
                </div>
                <div className='footer-catigory'>
                    <h3>Best Games</h3>
                </div>

            </div>
            </Link>
            <Link to="/kuitegames">
            <div className='item-catigory'>
                <div className='img-catigory'>
                 <img src={catigory}/>
                </div>
                <div className='about-catigory'>
                    <p>Kuwaiti Games</p>
                </div>
                <div className='footer-catigory'>
                    <h3>Kuwaiti Games</h3>
                </div>

            </div>
            </Link>
            <Link to="/khalegames">
            <div className='item-catigory'>
                <div className='img-catigory'>
                 <img src={catigory}/>
                </div>
                <div className='about-catigory'>
                    <p>Khaleeji Games</p>
                </div>
                <div className='footer-catigory'>
                    <h3>Khaleeji Games</h3>
                </div>

            </div>
            </Link>
            <Link to="/famousgames">
            <div className='item-catigory'>
                <div className='img-catigory'>
                 <img src={catigory}/>
                </div>
                <div className='about-catigory'>
                    <p>Famous Games in Arabic</p>
                </div>
                <div className='footer-catigory'>
                    <h3>Famous Games in Arabic</h3>
                </div>

            </div>
            </Link>
            <Link to="/nationalgames">
            <div className='item-catigory'>
                <div className='img-catigory'>
                 <img src={catigory}/>
                </div>
                <div className='about-catigory'>
                    <p>International Games</p>
                </div>
                <div className='footer-catigory'>
                    <h3>International Games</h3>
                </div>

            </div>
            </Link>

            <Link to="/othergames">
            <div className='item-catigory'>
                <div className='img-catigory'>
                 <img src={catigory}/>
                </div>
                <div className='about-catigory'>
                    <p>other games</p>
                </div>
                <div className='footer-catigory'>
                    <h3>other games</h3>
                </div>

            </div>
            </Link>
            <Link to="/kidsgames">
            <div className='item-catigory'>
                <div className='img-catigory'>
                 <img src={catigory}/>
                </div>
                <div className='about-catigory'>
                    <p>kids games</p>
                </div>
                <div className='footer-catigory'>
                    <h3>kids games</h3>
                </div>

            </div>
            </Link>


        </div>
    </CategorysStyle>
  )
}
const CategorysStyle = styled.div`
    padding-top: 15px;
    h1{
        padding-top: 15px;
        color: white;
        text-align: center;
        font-size: 1.8rem;
        position: relative;
        &::before{
        width: 5px;
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -10px;
        width: 78px;
        height: 5px;
        background: var(--primary-color);
        transition: .3s linear;
    }

    }
    
    .all-categorys{
        padding-top: 40px;
        display:grid;
        grid-template-columns: repeat( auto-fill, minmax(250px, 1fr) );
        gap: 20px;
        

        .item-catigory{
            width: 100%;
            position: relative;
            cursor: pointer;
      

        
            &:hover img{
                transform: scale(1.4) rotate(10deg);
            }
            .img-catigory{
                position: relative;
                overflow: hidden;
                &::before{
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background: var(--primary-color-obacity);
                    transition:all 0.5s ease-in-out;
                }
                img{
                    width: 100%;
                    overflow: hidden;
                    transition: all 0.5s ease-in-out;
                }
                
            }
            .about-catigory{
                position: absolute;
                top: 30%;
                left: 50%;
                transform: translate(-50%);
              
                p{
                   font-weight: 900;
                   font-size: 20px;
                   color: var(--primary-color);
                }
            }
            .footer-catigory{
                
                h3{
                  color: var( --font); 
                  font-weight:bold ;
                  font-size: 22px;
                  padding: 15px;
                }
            }
        }
    }
`
export default Categorys