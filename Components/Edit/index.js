import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { useMutation, useQuery } from 'react-apollo'
import EditNote from '../../Graphql/EditNote'
import Note from '../../Graphql/Note'
import DeleteNote from '../../Graphql/DeleteNote'
import { ShowContext } from '../Context/Show'


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
margin-bottom: 5px;
:last-child{
  margin: 0;
}
}
`
export default function index(props) {
  const [Show, setShow] = useContext(ShowContext)
  const [NoteData, data2] = useMutation(EditNote)

  function DeleteHandler(e) {
    e.preventDefault()
    NoteInfo({
      variables: {
        id: props.id
      }
    })
    setShow(false)
  }
  const [Title, setTitle] = useState()
  const [Desc, setDesc] = useState()
  const [NoteInfo, data3] = useMutation(DeleteNote)

  function SubmitForm(e) {
    e.preventDefault()
    NoteData({
      variables: {
        id: props.id,
        title: Title,
        note: Desc
      }
    })
    setShow(false)
  }
  const GetNote = () => {
    const { data, error, loading } = useQuery(Note, {
      variables: {
        id: props.id
      },
      cachePolicy: { query: true, data: false }
    })
    if (loading) {
      return <div>Loading...</div>
    }
    if (error) {
      return <div></div>
    }
    let Data = data.Note


    return (
      <Main>
        <Form>
          <img src="./img/close.png" onClick={() => setShow(false)} />
          <input type="text" defaultValue={Data.title} onChange={e => setTitle(e.target.value)} />
          <textarea type="text" defaultValue={Data.note} onChange={e => setDesc(e.target.value)} />
          <button onClick={SubmitForm}>Update</button>
          <button onClick={DeleteHandler}>Delete</button>
        </Form>
      </Main>
    )
  }


  return (
    <>
      {GetNote()}
    </>
  )
}
