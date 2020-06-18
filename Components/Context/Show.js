import React, { useState } from 'react'
export const ShowContext = React.createContext()

export default function Show({ children }) {
  const [Show, setShow] = useState(false)

  return (
    <ShowContext.Provider value={[Show, setShow]}>
      {children}
    </ShowContext.Provider>
  )
}