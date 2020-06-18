import React, { useContext, useEffect } from 'react'
import { TokenContext } from '../Context/Token'
import Router from 'next/router'

export default function UserIsLogged() {
  const [Token, setToken] = useContext(TokenContext)

  useEffect(() => {
    if (!Token) {
      Router.push('/login')
    }
  }, [])

  return (
    <>
    </>
  )
}
