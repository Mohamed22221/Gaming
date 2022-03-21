
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Home from './bages/Home';
import Main from './bages/Main';
import BestGames from './components/apicatigory/BestGames';
import axios from 'axios';
import IdGame from './components/apicatigory/IdGame';
import FamoGames from './components/apicatigory/FamoGames';
import InternGames from './components/apicatigory/InternGames';
import KhaleejiGames from './components/apicatigory/KhaleejiGames';
import KidsGames from './components/apicatigory/KidsGames';
import OtherGames from './components/apicatigory/OtherGames';
import KuwaitiGames from './components/apicatigory/KuwaitiGames';


function App() {
  {/*api games*/}
  const [games , setGames] = useState([])
  const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games?id=452',
    params: {platform: 'browser', category: 'mmorpg', 'sort-by': 'release-date'},
    headers: {
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
      'x-rapidapi-key': '945727363amshe31e391d0d43606p1148b7jsndb10b7fe9916'
    }
  };
useEffect(()=>{
    axios.request(options).then(function (response) {
      setGames(response.data);
  
  });
},[])

  return (

    <ContentStyle>
    
      <Routes>
        
        {/*go to pages*/} 
        <Route path="/" element={ <Home games={games} />} /> 
        <Route path="/Gaming" element={ <Home games={games}/>} />
        {/*go to categorys*/} 
        <Route path="/bestgames/" element={<BestGames games={games}/>} />
        <Route path="/famousgames/" element={<FamoGames games={games}/>} />
        <Route path="/nationalgames/" element={<InternGames games={games}/>} />
        <Route path="/khalegames/" element={<KhaleejiGames games={games}/>} />
        <Route path="/kidsgames/" element={<KidsGames games={games}/>} />
        <Route path="/othergames/" element={<OtherGames games={games}/>} />
        <Route path="/kuitegames/" element={<KuwaitiGames games={games}/>} />
        <Route path="/game/" element={<IdGame  games={games}/>} />
        <Route path=":gameId/" element={<IdGame games={games}/>} />
        
        </Routes>
 
      <Main />
    </ContentStyle>
  );
}
const ContentStyle = styled.div`
  display: flex;
@media (max-width:950px ) {
  flex-direction: column;
}

`
export default App;
