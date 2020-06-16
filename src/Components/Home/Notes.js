import React, { useContext, useState } from 'react'
import { useQuery } from 'react-apollo'
import User from '../../Graphql/Notes'
import { TokenContext } from '../Context/Token'
import styled from 'styled-components'
import Edit from '../Edit'
import { Router } from 'next/router'

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

export default function Notes() {

  const [Token, setToken] = useContext(TokenContext)
  const [Note, setNote] = useState('')

  let ID
  Token ? ID = Token.id : ID = null
  const GetNotes = () => {
    const { data, error, loading } = useQuery(User, {
      variables: {
        id: "" + ID
      },
      pollInterval: 1000,
    })

    if (loading) {
      return <div>Loading...</div>
    }
    if (error) {
      return <div>{error.message}</div>
    }
    let Notes = data.User.notes

    if (Notes.length == 0) {
      return <div>Create Note</div>
    }
    console.log(Note)

    return (
      <Main>
        <Wrapper>
          <div>Notes:</div>
          {Notes.map(note => (
            <div onClick={() =>{setNote(note.id)}} key={note.id}>
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
    </div>
  )
}
