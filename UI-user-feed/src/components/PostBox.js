import React, {Component} from 'react'
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addPost} from "../actions/feedActions";
import store from "../store";

class PostBox extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (ev) => {
    ev.preventDefault();

    let textArea = document.getElementById('PostBoxField');
    let val = textArea.value;

    if (val !== '') {
      store.dispatch(addPost(val));
      textArea.value='';
    } else {
      alert('You have to enter some text first :)');
    }
  };


  render() {
    return (
      <div className="PostBox">
        <form action="" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="PostBoxField">Say Something Cool</label>
            <textarea className="form-control" id="PostBoxField" rows="3">

            </textarea>
            <div>
              <button className="btn btn-block btn-success">Post It</button>
            </div>
          </div>
        </form>
      </div>)
  }
}

const mapStateToProps = (state) => {
  return ({
    feedItems: state.feed.feedItems,
    newItem: state.feed.newItem
  });
};


PostBox.propTypes = {
  feedItems: PropTypes.array.isRequired,
  newItem: PropTypes.object,
};

PostBox.defaultProps = {
  feedItems: [],
  newItem: null
};

export default connect(mapStateToProps, {addPost})(PostBox);