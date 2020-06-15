import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import CardContainer from "./ui_components/card/cardContainer/CardContainer";

import { getUserData } from './actions/userDetails_action';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputYear: ""
    }
  }
  
  updateYear = (event) => {
    this.setState({ inputYear: event.target.value })
  }

  updateUsers = () => {
    this.props.getUserData(this.state.inputYear);
  }

  render() {
    return (
      <div className="App">
        <div className="app-container">
          <div className="app-header"> Birthday Calendar
          <input type="text" value={this.state.inputYear} onChange={this.updateYear} />
            <button onClick={this.updateUsers}>UPDATE</button>
          </div>
          <CardContainer userData={this.props.userData} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.userDetails.users,
  }
};

export default connect(mapStateToProps, { getUserData })(App);
