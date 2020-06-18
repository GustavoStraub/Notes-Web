import gql from 'graphql-tag'

const DeleteUser = gql`
  mutation($id: String!){
    deleteUser(id: $id){
      id
      name
    }
  }
`
export default DeleteUser