import gql from 'graphql-tag'

const DeleteNote = gql`
  mutation($id: String!){
    deleteNote(id: $id){
      id
      title
      note
    }
  }
`
export default DeleteNote