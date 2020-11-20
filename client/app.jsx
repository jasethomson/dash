import React, { Fragment } from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeHolder: null,
      todos: []
    }
  }
  getTodos() {
    fetch('http://localhost:5000/todos')
      .then(res => res.json())
      .then(todos => this.setState({ todos }));
  }
  componentDidMount() {
    this.getTodos();
  }
  render() {
    return (
      <Fragment>
        <div>App</div>
      </Fragment>
    );
  }
}
