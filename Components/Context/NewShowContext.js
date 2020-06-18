import React, { useState } from 'react'
export const NewShowContext = React.createContext()

export default function Show({ children }) {
  const [showNew, setShowNew] = useState(false)

  return (
    <NewShowContext.Provider value={[showNew, setShowNew]}>
      {children}
    </NewShowContext.Provider>
  )
}