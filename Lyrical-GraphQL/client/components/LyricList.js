import React, { Component } from 'react';

class LyricList extends Component {
  renderLyrics() {
    return this.props.lyrics.map(({ content }, index) => {
      return (
        <li key={index} className="collection-item">
          {content}
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
