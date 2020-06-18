import gql from 'graphql-tag'

const Login = gql`
  query Login($email: String!, $password: String!){
    Login(email: $email, password: $password){
      id
      name
      email
      token
    }
  }
`

export default Login