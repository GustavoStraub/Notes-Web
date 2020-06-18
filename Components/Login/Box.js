import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { useQuery, useApolloClient } from 'react-apollo'
import Login from '../../Graphql/Login'
import Router from 'next/router'
import { TokenContext } from '../Context/Token'

const Wrapper = styled.div`
background: #333232;
border-radius: 5px;
display: flex;
flex-direction: column;
padding: 2% 5%;
justify-content: center;
align-items: center;
@media only screen and (max-width: 768px) {
  width: 80%;
}
`
const Title = styled.h2`
color: rgba(255,255,255,0.8);
margin-bottom: 10%;
text-shadow: 2px 2px black;
`
const Form = styled.form`
display: flex;
flex-direction: column;
aling-items: center;
justify-content: center;
`
const Input = styled.input`
background: #121212;
border-radius: 3px;
outline: none;
color: rgba(255,255,255,0.8);
border: none;
text-align: center;
font-family: "Museo-300";
padding: 10px 20px;
width: 300px;
margin-bottom: 5%;
border: 1px solid #333232;
@media only screen and (max-width: 768px) {
  width: 200px;
}
:focus{
  border-color: #4d4175;
}
`
const Button = styled.button`
background: #121212;
border: 1px solid #121212;
color: rgba(255,255,255,0.8);
padding: 10px 0;
width: 60%;
align-self:center;
border-radius: 5px;
font-family: "Museo-300";
cursor: pointer;
border: 2px solid #4d4175;
outline: none;
`
const Error = styled.span`
color: #c73434;
margin-bottom: 2%;
`
const P = styled.p`
color: rgba(255,255,255,0.7);
margin-top: 5%;
cursor: pointer;
text-decoration: underline;
font-style: italic;
font-size: 0.8em;
`
export default function Box() {

  useEffect(() => {
    localStorage.removeItem('token')
  }, [])

  const apolloClient = useApolloClient()

  const [ErrorMsg, setError] = useState()
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [state, setState] = useState()
  const [Token, setToken] = useContext(TokenContext)

  const User = async () => {
    setError(null)
    await apolloClient.query({
      query: Login,
      variables: { email: Email, password: Password }
    })
      .then(res => {
        setToken(res.data.Login)
      })
      .catch(e => setError(e))
  }


  useEffect(() => {
    if (Token) {
      Router.push('/home')
    }
  }, [Token])

  const SubmitForm = (e) => {
    e.preventDefault()
    User()
  }


  return (
    <Wrapper>
      <Title>Login</Title>
      {ErrorMsg && ErrorMsg.graphQLErrors.map(({ message }, i) => (
        <Error key={i}>{message}*</Error>))}
      <Form onSubmit={SubmitForm}>
        <Input onChange={e => setEmail(e.target.value.toLowerCase())} type="email" placeholder="Email" required />
        <Input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" required />
        <Button type="submit">Login</Button>
      </Form>
      <P onClick={() => Router.push('/index')}>Don't have an account? Create one here</P>
    </Wrapper>
  )
}