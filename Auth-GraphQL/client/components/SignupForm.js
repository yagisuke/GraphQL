import React, { Component } from 'react';
import AuthForm from './AuthForm'
import { graphql } from 'react-apollo';
import mutation from '../mutations/Signup';
import query from '../queries/CurrentUser';

class SignupForm extends Component {
  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password }
    });
  }

  render() {
    return (
      <div>
        <h3>Signup</h3>
        <AuthForm
          errors={[]}
          onSubmit={this.onSubmit.bind(this)}
        />
      </div>
    );
  }
}

export default graphql(mutation)(SignupForm);
