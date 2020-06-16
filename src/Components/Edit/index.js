import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { useMutation, useQuery } from 'react-apollo'
import EditNote from '../../Graphql/EditNote'
import Note from '../../Graphql/Note'
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
const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
export default function index(props) {
  const [Show, setShow] = useContext(ShowContext)
  const [NoteData, data2] = useMutation(EditNote)

  const [Title, setTitle] = useState()
  const [Desc, setDesc] = useState()

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
        <Form onSubmit={SubmitForm}>
          <h3 onClick={() => setShow(false)}>CLOSE</h3>
          <input type="text" defaultValue={Data.title} onChange={e => setTitle(e.target.value)} />
          <textarea type="text" defaultValue={Data.note} onChange={e => setDesc(e.target.value)} />
          <button>Update</button>
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
