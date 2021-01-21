import React,{ useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import Nav from '../components/Nav';
import { loadGames } from '../store/actions/gamesAction';
import GamesList from './GamesList';


const Home = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  },[dispatch])
  // getting data from store using react hook useSelector
  const { popularGames, upcomingGames, newGames, searchedGames } = useSelector(({ games }) => games);
  return (
    <>
      <Nav />
      <GamesList 
        popularG={popularGames}
        upcomingG={upcomingGames}
        newG={newGames}
        searchedG={searchedGames}
      />
    </>
  )
}

export default Home
