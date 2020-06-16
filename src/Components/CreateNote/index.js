import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { useMutation } from 'react-apollo'
import NewShowContext from '../Context/NewShowContext'

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

export default function index(props) {

  const [Title, setTitle] = useState('')
  const [Desc, setDesc] = useState('')

  return (
    <Main>
      <Form>
        <img src="./img/close.png" onClick={() => setShow(false)} />
        <input type="text" onChange={e => setTitle(e.target.value)} />
        <textarea type="text" onChange={e => setDesc(e.target.value)} />
        <button onClick={SubmitForm}>Update</button>
        <button onClick={DeleteHandler}>Delete</button>
      </Form>
    </Main>
  )
}
