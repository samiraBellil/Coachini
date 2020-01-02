import {ADD_BLOG , DELETE_BLOG , UPDATE_BLOG} from './types'

export const ADD_BLOG = newbLOG => ({
    type: ADD_BLOG,
    payload: newbLOG
  })
  
  
  export const DELETE_BLOG = id => ({
    type: Delete_BLOG,
    payload: id,
  })
  
  export const UPDATE_BLOG = updatedBlog => {
    return{
      type: UPDATE_BLOG,
      payload: updatedBlog
    }
  }
  