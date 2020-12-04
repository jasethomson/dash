import React from 'React';
import AppContext from '../context';

export default class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: null
    }
  }

  render() {
    return (
      <div id="recipesContainer" className="topDiv insert-101 insert-101-1">
        Recipes
      </div>
    )
  }
}
