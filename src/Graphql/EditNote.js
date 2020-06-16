import gql from 'graphql-tag'

const EditNote = gql`
  mutation($name: String!, $title: String, $note: String){
    editNote(id: $id, title: $title, note: $note){
      title
      note
    }
  }
`
export default EditNote