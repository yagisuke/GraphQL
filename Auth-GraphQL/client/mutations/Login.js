import qgl from 'graphql-tag'

export default qgl`
  mutation Login($email: String, $password: String) {
    login (email: $email, password: $password) {
      id
      email
    }
  }
`;
