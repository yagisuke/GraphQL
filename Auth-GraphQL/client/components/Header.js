import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router'
import query from '../queries/CurrentUser';
import mutation from '../mutations/Logout'

class Header extends Component {
  onLogoutClick() {
    this.props.mutate({
      refetchQueries: [{ query }]
    });
  }

  renderButtons() {
    const { loading, user } = this.props.data;

    if (this.props.data.loading) {
      return <li />;
    }

    if (user) {
      return (
        <li>
          <a onClick={this.onLogoutClick.bind(this)}>Logout</a>
        </li>
      );
    } else {
      return (
        [<li key='signup'>
          <Link to="/signup">Signup</Link>
        </li>,
        <li key='login'>
          <Link to="/login">Login</Link>
        </li>]
      );
    }
  }

  render() {
    return(
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          <ul className="right">
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default graphql(mutation)(
  graphql(query)(Header)
);
