import React, { useContext } from 'react'
import styled from 'styled-components'
import { TokenContext } from '../Context/Token'
import Router from 'next/router'

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 15px;
background: #333232;
margin-bottom: 3vh;
`
const Using = styled.div`
color: rgba(255,255,255,0.7);
text-shadow: 1px 1px black;
span{
  color: rgba(255,255,255,0.8);
  text-shadow: 1px 1px black;
  font-style: italic;
}
`
const LogOut = styled.div`
button{
  border: 1px solid #121212;
  color: rgba(255,255,255,0.8);
  padding: 10px ;
  align-self:center;
  border-radius: 5px;
  font-family: "Museo-300";
  cursor: pointer;
  border: 2px solid #4d4175;
  outline: none;
  background: #121212;
}
`


export default function Header() {
  const [Token, setToken] = useContext(TokenContext)

  const LogOutHandler = () => {
    setToken()
    Router.push('/login')
  }

  return (
    <Wrapper>
      <Using>
        Logged as: <span>{Token ? Token.name : ''}</span>
      </Using>
      <LogOut>
        <button onClick={LogOutHandler}>Logout</button>
      </LogOut>
    </Wrapper>
  )
}
