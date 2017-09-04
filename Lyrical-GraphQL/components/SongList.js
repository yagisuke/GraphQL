import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
  render() {
    const songs = this.props.data.songs;

    return (
      <div>
        {songs && <div>TITLE: {songs[0].title}</div>}
      </div>
    );
  }
}

const query = gql`
  {
    songs {
      title
    }
  }
`;

export default graphql(query)(SongList);
