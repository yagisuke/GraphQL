import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricList extends Component {
  onLike(id) {
    this.props.mutate({ variables: { id } })
  }

  renderLyrics() {
    return this.props.lyrics.map(({ id, content, likes }, index) => {
      return (
        <li key={index} className="collection-item">
          {content}
          <a
            href="javascript: void(0)"
            className="secondary-content"
            onClick={() => this.onLike(id)}
          >
            <i className="material-icons">
              thumb_up
            </i>
            <span className="badge">{likes}</span>
          </a>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="collection">
        {this.renderLyrics()}
      </ul>
    )
  }
}

const mutation = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default graphql(mutation)(LyricList);
