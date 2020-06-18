import React, { useContext, useState } from 'react'
import { useQuery } from 'react-apollo'
import User from '../../Graphql/Notes'
import { TokenContext } from '../Context/Token'
import styled from 'styled-components'
import Edit from '../Edit'
import { Router } from 'next/router'
import { ShowContext } from '../Context/Show'
import { NewShowContext } from '../Context/NewShowContext'
import CreateNote from '../CreateNote'

const Main = styled.div`
color: rgba(255,255,255,0.9);
display: flex;
justify-content: center;
align-items: center;
width: 100%;
flex-direction: column;
`
const Wrapper = styled.div`
border-radius: 5px;
width: 50%;
display: flex;
justify-content: center;
align-items: center;
background: #333232;
border: 2px solid #4d4175;
flex-direction: column;
div{
  cursor: pointer;
  color: rgba(255,255,255,0.9);
  border-bottom: 1px solid #4d4175;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  :last-child{
    border: none;
  }
  :first-child{
    cursor: auto;
  }

}
`
const Options = styled.div`

`

export default function Notes() {

  const [Show, setShow] = useContext(ShowContext)
  const [Token, setToken] = useContext(TokenContext)
  const [showNew, setShowNew] = useContext(NewShowContext)
  const [Note, setNote] = useState('')

  let ID
  Token ? ID = Token.id : ID = null
  const GetNotes = () => {
    const { data, error, loading } = useQuery(User, {
      variables: {
        id: "" + ID
      },
      pollInterval: 2000,
    })

    if (loading) {
      return <div>Loading...</div>
    }
    if (error) {
      return <div>{error.message}</div>
    }
    let Notes = data.User.notes

    if (Notes.length == 0) {
      return (<Main>
        <Wrapper>
          <div>Notes:</div>
          <div style={{ fontStyle: 'italic', cursor: 'pointer' }} onClick={() => setShowNew(true)}>
            Create new Note +
            </div>
        </Wrapper>
      </Main>
      )
    }
    console.log(Note)

    function IDshow(id) {
      setShow(true)
      setNote(id)
    }

    return (
      <Main>
        <Wrapper>
          <div>Notes:</div>
          <div style={{ fontStyle: 'italic' }} onClick={() => setShowNew(true)}>Create new Note +</div>
          {Notes.map(note =>
            (<div onClick={() => IDshow(note.id)} key={note.id}>
              <p>{note.title}</p>
            </div>
            ))}
        </Wrapper>
      </Main>
    )
  }

  return (
    <div>
      {GetNotes()}
      {Show ? <Edit id={Note} /> : <div />}
      {showNew ? <CreateNote /> : <div />}
    </div>
  )
}
