import React from 'react';
import PT from 'prop-types';
import '../css/styles.css';

class EmojiDetails extends React.Component {

  render() {
    return (

      <div className="div-table">
        <div className="div-table-row">
          <div className="div-table-col" align="center">{this.props.symbol}</div>
          <div className="div-table-col">
            <h3>{this.props.title}</h3>
            <i>{this.props.keywords}</i>
          </div>
        </div>
      </div>
      
    );
  }


  static propTypes = { // Specify types of props to be expected - produces console warnings
    title: PT.string.isRequired,
    symbol: PT.string.isRequired,
    keywords: PT.string.isRequired,
  }
}


export default EmojiDetails;