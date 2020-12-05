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
    let stateCopy = this.state;
    stateCopy.value[type] = event.target.value;
    this.setState({ ...stateCopy });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value.email + this.state.value.password);
    event.preventDefault();
  }

  render() {
    return (
      <div id="loginContainer" className="topDiv loginContainer">
        <div className="insert-101 insert-101-1">
          <div className="insert-102 insert-102-1">
            <h1>Login</h1>
          </div>
          <div className="insert-102 insert-102-2">
            <form onSubmit={this.handleSubmit}>
              <div className="insert-103 insert-103-1">
                <label className="none">Email:</label>
                <input type="text" value={this.state.value.email} onChange={(event) => this.handleChange(event, 'email')} placeholder="Email" />
              </div>
              <div className="insert-103 insert-103-2">
                <label className="none">Password:</label>
                <input type="password" value={this.state.value.password} onChange={(event) => this.handleChange(event, 'password')} placeholder="Password" />
              </div>
              <div className="insert-103 insert-103-3">
                <input className="button" type="submit" value="Submit" />
              </div>
            </form>
          </div>
          <div className="insert-102 insert-102-3">
            <div className="forgotPassword">
              <Link to='/forgotpassword' className="navC">Forgot Password?</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
