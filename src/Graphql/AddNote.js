import gql from 'graphql-tag'

const AddNote = gql`
  mutation($title: String!, $note: String, $userId: String!){
    addNote(title: $title, note: $note, userId: $userId){
      id
      title
      note
    }
  }
`
export default AddNote