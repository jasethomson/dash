import React, { Fragment } from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeHolder: null
    }
  }
  render() {
    return (
      <Fragment>
        <div>App</div>
      </Fragment>
    );
  }
}
