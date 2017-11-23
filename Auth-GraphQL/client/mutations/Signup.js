import qgl from 'graphql-tag'

export default qgl`
  mutation Signup($email: String, $password: String) {
    signup($email: email, password: $password) {
      id
      email
    }
  }
`;
