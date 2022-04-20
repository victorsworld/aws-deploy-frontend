import { CREATE_TALK, ERROR_CREATE_TALK, GET_ALL_TALKS, GET_TALK_BY_ID, GET_ALL_USER_TALKS, DELETE_USER_TALK_BY_ID } from '../actionTypes/actionTypes';

const initialState = {
   talks: [],
   message: null,
   talk: null,
   userTalks: []
 };

export default function(state = initialState, action) {
  switch (action.type) {

    case DELETE_USER_TALK_BY_ID: 
      let newUserTalkArray = state.userTalks.filter(talk => talk._id !== action.id)
      return {
        ...state, 
        userTalks: newUserTalkArray
      }

    case GET_ALL_USER_TALKS:
      return {
        ...state, 
        userTalks: [...action.payload]
      }

    case GET_ALL_TALKS: 
      return {
        ...state, 
        talks: [...action.payload]
      }

    case CREATE_TALK:
      let newTalksArray = [...state.talks, action.payload];
      return {
       ...state,
        talks: newTalksArray
      };

    case GET_TALK_BY_ID: 
    
      return {
        ...state, 
        talk: action.payload
      }  
    case ERROR_CREATE_TALK:
      return {
        ...state,
        message: action.payload
      }
    default:
      return state;
  }
}
