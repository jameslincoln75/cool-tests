import React, {Component} from 'react'
import moment from 'moment'


class FeedItem extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let ts = moment.unix(this.props.record.timestamp).format("MM/DD/YY h:mA");

    return (
      <article className="FeedItem">
        <div className="FeedItemHeader">
          <div className="FeedItemHeader--user">
            {this.props.record.user}
          </div>
          <div className="FeedItemHeader--timestamp">
            {ts}
          </div>
        </div>
        <div className="FeedItemBody">
          {this.props.record.value}
        </div>
      </article>)
  }
}


export default FeedItem;