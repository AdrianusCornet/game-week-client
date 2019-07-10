import { NEW_USER } from '../actions/user'

const initialState = {
  userId: NaN,
  name: '',
  jwt: '',
}

export default function user(state = initialState, { type, payload }) {
  switch (type) {
    case NEW_USER:
      const newUser = {
        ...initialState,
        ...payload
      }
      return newUser
    default:
      return state
  }
}