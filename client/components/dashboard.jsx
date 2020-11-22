import React from 'react';
import AppContext from '../context';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: null
    }
  }

  render(){
    return (
      <div id="dashboardContainer" className="insert101 insert101A">
        Dashboard
      </div>
    )
  }
}
