import React from 'react';
import AppContext from './context';
import Dashboard from './components/dashboard';
import Finances from './components/finances';
import Login from './components/login';
import ForgotPassword from './components/forgotpassword';
import Nav from './components/nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeHolder: null,
      view: {
        name: 'settings',
        params: {}
      }
    }
  }
  // getTodos() {
  //   fetch('http://localhost:5000/todos')
  //     .then(res => res.json())
  //     .then(todos => this.setState({ todos }));
  // }
  componentDidMount() {
    // this.getTodos();
  }
  render() {
    const appContext = {
      setUser: this.setUser,
      viewParams: this.state.view.params
    };
    return (
      <AppContext.Provider value={appContext} >
        <Router>
          <Nav />
          <Route exact path='/finances' component={Finances} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/forgotpassword' component={ForgotPassword} />
          <Route exact path='/' component={Dashboard}></Route>
        </Router>
      </AppContext.Provider>
    );
  }
}
