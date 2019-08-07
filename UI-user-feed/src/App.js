import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store'
import './App.scss';
import Navbar from './components/Navbar'
import PostBox from "./components/PostBox";
import Feed from "./components/Feed";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <main className="App">
            <Navbar/>
            <div className="container">
              <PostBox/>
              <Feed/>
            </div>
          </main>
        </Router>
      </Provider>
    );
  }
}

export default App;
