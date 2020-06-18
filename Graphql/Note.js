import gql from 'graphql-tag'

const Note = gql`
  query Note($id: ID!){
    Note(id: $id){
       id
       title
       note
    }
  }
`

export default Note