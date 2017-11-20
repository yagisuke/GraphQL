import qgl from 'graphql-tag'

export default qgl`
  mutation {
    logout {
      id
      email
    }
  }
`;
