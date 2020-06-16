import React, { useState } from 'react'
import styled from 'styled-components'
import { useMutation, useQuery } from 'react-apollo'
import EditNote from '../../Graphql/EditNote'
import Note from '../../Graphql/Note'

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
background: rgba(0,0,0,0.8)
display: ${props => props.Show ? 'flex' : 'none'};
`
export default function index(props) {

  const [Title, setTitle] = useState()
  const [Desc, setDesc] = useState()

  const GetNote = () => {
    const { data, error, loading } = useQuery(Note, {
      variables: {
        id: props.id
      }
    })
    if (loading) {
      return <div>Loading...</div>
    }
    if (error) {
      return <div>{error.message}</div>
    }
    let Data = data.Note
    return (
      <Main>
        <input type="text" defaultValue={Data.title} />
        <textarea type="text" defaultValue={Data.note} />
      </Main>
    )
  }
  const [NoteData, data2] = useMutation(EditNote)


  return (
    <>
      {GetNote()}
    </>
  )
}
