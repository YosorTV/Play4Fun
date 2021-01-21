import { GET_GAMES, SEARCHED_GAMES, CLEARED_SEARCH } from "../actions/gamesAction"

const initState = {
  newGames: [],
  popularGames: [],
  upcomingGames: [],
  searchedGames: []
}

const gamesReducer = (state = initState, { type, payload }) => {
  switch(type){
    case GET_GAMES: 
    return {
      ...state, 
      popularGames: payload.popularGames,
      upcomingGames: payload.upcomingGames,
      newGames: payload.newGames
    };
    
    case SEARCHED_GAMES:
      return {...state, searchedGames: payload.searchedGames}

    case CLEARED_SEARCH:
      return {...state, searchedGames:[]}

        default: return {...state}
  }
}

export default gamesReducer