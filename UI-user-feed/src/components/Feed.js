import React, {Component} from 'react'
import {connect} from "react-redux";
import PropTypes from 'prop-types'
import FeedItem from "./FeedItem";
import {getFeedItems} from "../actions/feedActions";

import store from '../store'

class Feed extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getFeedItems();
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.feedItems) {
      this.setState({'feedItems': nextProps.feedItems})
    }

    if (nextProps.newItem) {
      this.setState({'newItem': nextProps.newItem})
    }

    if (nextProps.errors) {
      this.setState({'errors': nextProps.errors})
    }
  }

  render() {
    let contentBody = this.props.feedItems ?
      this.props.feedItems.map((item, index) => (
        <FeedItem record={item} key={item.id}/>
      )) : null;

    return (
      <section className="FeedContainer">
        <div className="PostCountBox">
          Post Count: {this.props.feedItems.length || 0}
        </div>
        <div className="Feed">
          {contentBody}
        </div>
      </section>)
  }
}

const mapStateToProps = (state) => {
  return ({
    feedItems: state.feed.feedItems,
    newItem: state.feed.newItem
  });
};


Feed.propTypes = {
  feedItems: PropTypes.array.isRequired,
  newItem: PropTypes.object,
};

Feed.defaultProps = {
  feedItems: [],
  newItem: null
};

export default connect(mapStateToProps, {getFeedItems})(Feed);