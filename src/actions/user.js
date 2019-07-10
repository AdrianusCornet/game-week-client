export const NEW_USER = 'NEW_USER'
export const ADD_JWT = 'ADD_JWT'
export const UPDATE_USER_NAME = 'UPDATE_USER_NAME'

export function newUser(user)  {
  return {
    type: NEW_USER,
    payload: user
  }
}