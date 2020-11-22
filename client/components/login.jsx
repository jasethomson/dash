import React from 'react';
import AppContext from '../context';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        email: '',
        password: ''
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, type) {
    this.setState({ value: event.target.value[type] });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value.email + this.state.value.password);
    event.preventDefault();
  }

  render() {
    return (
      <div id="loginContainer" className="insert101 insert101A">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
          <input type="text" value={this.state.value.email} onChange={() => this.handleChange('email')} />
          </label>
          <label>
            Password:
          <input type="text" value={this.state.value.password} onChange={() => this.handleChange('password')} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div className="forgotPassword">
          <Link to='/forgotpassword' className="navC">Forgot Password</Link>
        </div>
      </div>
    );
  }
}
