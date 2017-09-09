import React, { Component } from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';
import query from '../queries/fetchSong';
import LyricCreate from './LyricCreate';

class SongDetail extends Component {
  render() {
    const { song, loading } = this.props.data;

    if (loading) return <div>Loading...</div>;
    if (!song) return <div>But Request: <Link to="/">Back</Link></div>;

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricCreate songId={song.id} />
      </div>
    )
  }
}

export default graphql(query, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);
