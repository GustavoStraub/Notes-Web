import React, { useState } from 'react'
import Router from 'next/router'
export const TokenContext = React.createContext()

export default function Token({ children }) {
  const [Token, setToken] = useState()

  if (Token) {
    localStorage.setItem('token', Token.token)
    console.log(localStorage.getItem('token'))
  }

  return (
    <TokenContext.Provider value={[Token, setToken]}>
      {children}
    </TokenContext.Provider>
  )
}