import React, { useState } from 'react'

export const TokenContext = React.createContext()

export default function Token({ children }) {
  const [Token, setToken] = useState()

  return (
    <TokenContext.Provider value={[Token, setToken]}>
      {children}
    </TokenContext.Provider>
  )
}