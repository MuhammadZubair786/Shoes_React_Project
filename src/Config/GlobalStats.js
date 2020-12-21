import React, { createContext, useReducer } from "react"
import AppReducer from "./AppReducer"

// Initial state
const initialState = {
  Cards : []
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions
  function addCart(data) {
      console.log("GLOBAL DATA :",data)
    dispatch({
      type: "ADD_CARD",
      payload: data
    })
  }

  function deleteCart(id) {
    console.log("Delete Card :",id)
    dispatch({
      type: "DELETE_Card",
      payload: id
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        Cards : state.Cards,
        addCart,
        deleteCart
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
