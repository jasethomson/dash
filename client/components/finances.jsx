import React from 'React';
import AppContext from '../context';

export default class Finances extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: null
    }
  }

  render() {
    return (
      <div id="financesContainer" className="insert101 insert101A">
        Finances
      </div>
    )
  }
}
