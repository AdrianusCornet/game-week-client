export const NEW_USER = 'NEW_USER'
export const ADD_JWT = 'ADD_JWT'
export const UPDATE_USERNAME = 'UPDATE_USERNAME'

export function newUser(userId, name, jwt = '')  {
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
export function addJwt(jwt) {
  return{
    type: ADD_JWT,
    payload: jwt
  }
}
export function updateUsername(name) {
  return{
    type: UPDATE_USERNAME,
    payload: name
  }
}