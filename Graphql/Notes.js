import gql from 'graphql-tag'

const User = gql`
  query User($id: ID!){
    User(id: $id){
      id
      notes{
        id
        title
        note
      }
    }
  }
`

export default User