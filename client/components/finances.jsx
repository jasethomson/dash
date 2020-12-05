import React from 'React';
import AppContext from '../context';

export default class Finances extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: null
    }
  }

  accounts() {
    return (
      <table>
        <tr className="thead">
          <th>Account</th>
          <th>Type</th>
          <th>Balance</th>
        </tr>
        {/* loop here to map through table data */}
        <tr>
          <td>TCU Checking</td>
          <td>Checking</td>
          <td>$734.59</td>
        </tr>
        <tr>
          <td>TCU Savings</td>
          <td>Savings</td>
          <td>$8,000</td>
        </tr>
        <tr>
          <td>American Express</td>
          <td>Credit Card</td>
          <td>$(1,800)</td>
        </tr>
        <tr>
          <td>TCU CC</td>
          <td>Credit Card</td>
          <td>$(1,000)</td>
        </tr>
        <tr>
          <td>All Accounts</td>
          <td></td>
          <td>$1</td>
        </tr>
      </table>
    )
  }

  render() {
    return (
      <div id="financesContainer" className="topDiv financesContainer">
        <div className="insert-101 insert-101-1">
          <div className="insert-102 insert-102-1">
            <div className="insert-103 insert-103-1">
              <div className="header">
                <h3>Accounts</h3>
              </div>
              {this.accounts()}
            </div>
            <div className="insert-103 insert-103-2">
              <div className="header">
                <h3>Monthly Bills</h3>
              </div>
            </div>
          </div>
          <div className="insert-102 insert102-2">
            <div className="insert-103 insert-103-1">
              <div className="header">
                <h3>Spending Breakdown</h3>
              </div>
            </div>
            <div className="insert-103 insert-103-2">
              <div className="header">
                <h3> Monthly Budget</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
