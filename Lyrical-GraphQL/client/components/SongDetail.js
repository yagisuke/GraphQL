import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/fetchSong';

class SongDetail extends Component {
  render() {
    if (this.props.data.loading) return <div>Loading...</div>;

    const {id, title} = this.props.data.song;

    return (
      <div>
        <h3>Song Detail</h3>
        <p>{id}</p>
        <p>{title}</p>
      </div>
    )
  }
}

export default graphql(query, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);
