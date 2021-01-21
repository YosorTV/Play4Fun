const initState = { game: { platforms:[] }, screenshots:{ results:[] }, isLoading:true }

const detailReducer = (state = initState, {type, payload}) => {
  switch(type){
    case "GET_DETAIL":
      return {
        ...state,
        game: payload.game,
        screenshots:payload.screenshots,
        isLoading:false,
      }
      case "LOADING_DETAIL":
        return{
          ...state,
          isLoading:true
        }
    default: return {...state}
  }
}

export default detailReducer;