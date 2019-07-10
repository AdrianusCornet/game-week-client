// import actions 

const initialState = {
  name: '',
  jwt: '',
}

export default function user(state = initialState, { type, payload }) {
  switch (type) {
    case null:
      return payload
    default:
      return state
  }
}