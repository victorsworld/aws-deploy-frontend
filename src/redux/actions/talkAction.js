import { CREATE_TALK, ERROR_CREATE_TALK, GET_ALL_TALKS, GET_TALK_BY_ID, GET_ALL_USER_TALKS, DELETE_USER_TALK_BY_ID } from '../actionTypes/actionTypes';
import Axios from '../../lib/Axios';


export const handleUserDeleteTalkByID = (id) => async dispatch => {
  try {

    let deletedByID = await Axios.delete(`/talk/delete-by-id/${id}`);

    dispatch({
      type: DELETE_USER_TALK_BY_ID,
      payload: deletedByID,
      id
    })
 
  } catch (error) {
    console.log(error)
    dispatch(errorCreateTalk(error))
    return Promise.reject(error);
  }
}

export const getAllUserTalks = (id) => async dispatch => {

  try {

    let foundAllUserTalks = await Axios.get(`/talk/get-all-user-talks/${id}`)
  
    dispatch({
      type: GET_ALL_USER_TALKS,
      payload: foundAllUserTalks.data
    })

    return Promise.resolve(foundAllUserTalks.data);

  } catch (error) {
    console.log(error)
    dispatch(errorCreateTalk(error))
    return Promise.reject(error);
  }


}

export const createTalk = (talkInfo) => async dispatch => {

  let talkObj = {
    id: talkInfo.id,
    title: talkInfo.title, 
    talk: talkInfo.talk, 
    image: talkInfo.image
  }

  try {

    let success = await Axios.post('/talk/create-talk', talkObj)

    dispatch(successCreateTalk(success.data));

    return Promise.resolve(success);

  } catch (error) {
    console.log(error)
    dispatch(errorCreateTalk(error))
    return Promise.reject(error);
  }

}

export const getAllTalks = () => async dispatch => {

  try {

    let success = await Axios.get(`/talk/get-all-talks`)

    dispatch({
      type: GET_ALL_TALKS,
      payload: success.data
    })
    return Promise.resolve(success.data)
  } catch (error) {
    console.log(error)
    dispatch(errorCreateTalk(error))
    return Promise.reject(error);
  }

}

const successCreateTalk = (createdTalk) => dispatch => {
  dispatch({
    type: CREATE_TALK,
    payload: createdTalk
  })
}

const errorCreateTalk = (message) => dispatch => {
  dispatch({
    type: ERROR_CREATE_TALK,
    payload: message
  })
}

export const getTalkByID = (id) => async dispatch => {

  try {
    let foundTalk = await Axios.get(`/talk/get-talk-by-id/${id}`)

    dispatch({
      type: GET_TALK_BY_ID,
      payload: foundTalk.data
    });

    return Promise.resolve(foundTalk.data)

  } catch (error) {
    dispatch(errorCreateTalk(error));
    return Promise.reject(error);
  }

}