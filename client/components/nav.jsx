import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: null
    }
  }

  render() {
    return (
      <nav>
        <div className="insert-101 insert-101-1">
          <h1>Dash</h1>
        </div>
        <div className="insert-101 insert-101-2">
          <ul>
            <li>
              <Link to='/' className="navA">Dashboard</Link>
            </li>
            <li>
              <Link to='/finances' className="navB">Finances</Link>
            </li>
            <li>
              <Link to='/recipes' className="navB">Recipes</Link>
            </li>
            <li>
              <Link to='/login' className="navC">Log Out</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
