import gql from 'graphql-tag';

export default qgl`
  {
    songs {
      id
      title
    }
  }
`;
