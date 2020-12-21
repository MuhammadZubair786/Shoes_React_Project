export default (state, action) => {
    switch (action.type) {
      case "ADD_CARD":
        return {
          ...state,
          Cards: [...state.Cards, action.payload]
        }
      case "DELETE_Card":
        return {
          ...state,
          Cards: state. Cards.filter(
           Card => Card.id !== action.payload
          )
        }
      default:
        return state
    }
  }
  