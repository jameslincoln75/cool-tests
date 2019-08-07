import React, {Component} from 'react'

class NavBar extends Component {
  render() {
    return (
      <header>
        <div className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container d-flex justify-content-between">
            <a href="/" className="navbar-brand d-flex align-items-center">
              <strong>User Feed</strong>
            </a>
          </div>
        </div>
      </header>)
  }
}


export default NavBar;