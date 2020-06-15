import React, { useContext } from 'react'
import { useQuery } from 'react-apollo'
import User from '../../Graphql/Notes'
import { TokenContext } from '../Context/Token'

export default function Notes() {

  const [Token, setToken] = useContext(TokenContext)
  let ID
  Token ? ID = Token.id : ID = null
  const GetNotes = () => {
    const { data, error, loading } = useQuery(User, {
      variables: {
        id: "" + ID
      }
    })

    if (loading) {
      return <div>Loading...</div>
    }
    if (error) {
      return <div>{error.message}</div>
    }
    let Notes = data.User.notes
    if (!Notes) {
      return <div>Create Note</div>
    }
    console.log(data.User.notes)

    return (
      <>
        {Notes.map(note => {
          <div key={note.id}>
            {note.id}
          </div>
        })}
      </>
    )
  }

  return (
    <div>
      {GetNotes()}
    </div>
  )
}
