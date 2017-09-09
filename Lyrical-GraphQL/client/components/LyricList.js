import React, { Component } from 'react';

class LyricList extends Component {
  onLike(id) {
      console.log(id)
  }

  renderLyrics() {
    return this.props.lyrics.map(({ id, content }, index) => {
      return (
        <li key={index} className="collection-item">
          {content}
          <i
            className="material-icons"
            onClick={() => this.onLinke(id)}
          >
            thumb_up
          </i>
        </li>
      );
    });
  }

  render() {
    console.log(this.props)
    return (
      <ul className="collection">{this.renderLyrics()}</ul>
    )
  }
}

export default LyricList;
