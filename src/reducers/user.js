import {
  NEW_USER,
  ADD_JWT
} from '../actions/user'

const initialState = {
  userId: NaN,
  name: '',
  jwt: '',
}

export default function user(state = initialState, { type, payload }) {
  switch (type) {
    case NEW_USER:
      return {
        ...initialState,
        ...payload
      }
    case ADD_JWT:
      return {
        ...state,
        jwt: payload
      }
    default:
      return state
  }
}