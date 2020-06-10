import React, { useState } from 'react'
import styled from 'styled-components'
import { useMutation } from 'react-apollo'
import AddUser from '../../Graphql/AddUser'
import Router from 'next/router'

const Wrapper = styled.div`
background: #333232;
border-radius: 5px;
display: flex;
flex-direction: column;
padding: 2% 5%;
justify-content: center;
align-items: center;
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

  const [UserData, { error }] = useMutation(AddUser, { errorPolicy: 'all' })


  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  function SubmitForm(e) {
    e.preventDefault()
    UserData({
      variables: {
        name: Name,
        email: Email,
        password: Password
      }
    })
    Router.push('/home')
  }

  return (
    <Wrapper>
      <Title>Create Account</Title>
      {error && error.graphQLErrors.map(({ message }, i) => (
        <Error key={i}>{message}*</Error>))}
      <Form onSubmit={SubmitForm}>
        <Input onChange={e => setName(e.target.value)} type="text" placeholder="Name" required />
        <Input onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" required />
        <Input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" required />
        <Button type="submit">Create Account</Button>
      </Form>
      <P onClick={() => Router.push('/login')}>Has an account? Login here</P>
    </Wrapper>
  )
}
