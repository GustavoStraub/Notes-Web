import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { useMutation } from 'react-apollo'
import { NewShowContext } from '../Context/NewShowContext'
import { TokenContext } from '../Context/Token'
import AddNote from '../../Graphql/AddNote'

const Main = styled.div`
position: absolute;
top: 0;
height: 100vh;
width: 100%;
color: white;
display: flex;
justify-content: center;
align-content: center;
flex-direction: column;
background: rgba(0,0,0,0.6)
`
const Form = styled.div`
border-radius: 5px;
position: relative;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background: #333232;
padding: 30px;
align-self: center;
@media only screen and (max-width: 768px) {
  width: 80%;
  height: 70vh;
}
img{
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
input{
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
  width: 250px;
}
:focus{
  border-color: #4d4175;
}
}
textarea{
  background: #121212;
  border-radius: 3px;
  outline: none;
  color: rgba(255,255,255,0.8);
  border: none;
  font-family: "Museo-300";
  padding: 10px 20px;
  width: 300px;
  margin-bottom: 5%;
  border: 1px solid #333232;
  resize: none;
  height: 400px;
  @media only screen and (max-width: 768px) {
    width: 250px;
  }
  :focus{
    border-color: #4d4175;
  }
}
button{
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
}
`
const Error = styled.span`
color: #c73434;
margin-bottom: 2%;
`

export default function index() {
  const [NoteData, { error }] = useMutation(AddNote, { errorPolicy: 'all' })

  const [showNew, setShowNew] = useContext(NewShowContext)
  const [Token, setToken] = useContext(TokenContext)
  const [Title, setTitle] = useState()
  const [Desc, setDesc] = useState('')

  function SubmitForm(e) {
    e.preventDefault()
    NoteData({
      variables: {
        title: Title,
        note: Desc,
        userId: Token.id
      }
    })
    setShowNew(false)
  }

  return (
    <Main>
      <Form>
        <img src="./img/close.png" onClick={() => setShowNew(false)} />
        {error && error.graphQLErrors.map(({ message }, i) => (
        <Error key={i}>{message}*</Error>))}
        <input type="text" placeholder="Title" onChange={e => setTitle(e.target.value)} required />
        <textarea type="text" onChange={e => setDesc(e.target.value)} required/>
        <button onClick={SubmitForm}>Save</button>
      </Form>
    </Main>
  )
}
