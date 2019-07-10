export const NEW_USER = 'NEW_USER'
export const ADD_JWT = 'ADD_JWT'
export const UPDATE_USER_NAME = 'UPDATE_USER_NAME'

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