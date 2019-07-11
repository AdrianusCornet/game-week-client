export const NEW_USER = 'NEW_USER'
export const ADD_JWT = 'ADD_JWT'
export const UPDATE_USERNAME = 'UPDATE_USERNAME'
export const DUMP_USER = 'DUMP_USER'

export const newUser = (userId, name, jwt = '') => {
  const newUser = {
    userId,
    name,
    jwt
  }
  return {
    type: NEW_USER,
    payload: newUser
  }
}
export const addJwt = (jwt) => {
  return{
    type: ADD_JWT,
    payload: jwt
  }
}
export const updateUsername = (name) => {
  return {
    type: UPDATE_USERNAME,
    payload: name
  }
}
export const dumpUser = () => {
  return {
    type: DUMP_USER
  }
}