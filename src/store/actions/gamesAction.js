import axios from 'axios';
import { popularGamesUrl, upcomingGamesUrl, newGamesUrl, searchGameUrl } from '../../api';

// Actions
export const GET_GAMES = "GET_GAMES";
export const SEARCHED_GAMES = "SEARCHED_GAMES";
export const CLEARED_SEARCH = "CLEARED_SEARCH";

export const loadGames = () => async dispatch => {
  const popularData = await axios.get(popularGamesUrl());
  const upcomingData = await axios.get(upcomingGamesUrl());
  const newData = await axios.get(newGamesUrl());
    dispatch({
      type: GET_GAMES,
      payload:{
        popularGames:popularData.data.results,
        upcomingGames:upcomingData.data.results,
        newGames:newData.data.results
      }
    });
}

export const searchData = gameName => async dispatch => {
  const searchGames = await axios.get(searchGameUrl(gameName));
    dispatch({
      type:SEARCHED_GAMES,
      payload:{
        searchedGames:searchGames.data.results
      }
    })
  }