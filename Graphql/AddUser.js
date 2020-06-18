import gql from 'graphql-tag'

const AddUser = gql`
  mutation($name: String!, $email: String!, $password: String!){
    addUser(name: $name, email: $email, password: $password){
      name
      email
    }
  }
`
export default AddUser