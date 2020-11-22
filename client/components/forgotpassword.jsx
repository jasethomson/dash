import React from 'React';
import AppContext from '../context';

export default class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      telephone: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, type) {
    this.setState({ value: event.target.telephone });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.telephone);
    event.preventDefault();
  }

  render() {
    return (
      <div id="forgotPasswordContainer" className="insert101 insert101A">
        <form onSubmit={this.handleSubmit}>
          <label>
            Please enter the phone number associated with your account.:
          <input type="text" value={this.state.telephone} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
