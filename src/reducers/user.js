import {
  NEW_USER,
  ADD_JWT,
  UPDATE_USERNAME,
  DUMP_USER
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
    case UPDATE_USERNAME:
      return {
        ...state,
        name: payload
      }
    case DUMP_USER:
      return initialState
    default:
      return state
  }
}