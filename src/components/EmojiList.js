import React from 'react';
import PT from 'prop-types';
import EmojiDetails from './EmojiDetails'



class EmojiList extends React.Component {
 
  renderEmojiList(arr) {
    return arr.map((item, index) => {
      return (
        <EmojiDetails key={index} symbol={item.symbol} title={item.title} keywords={item.keywords} />  //map the data to the item props
      )
    });
  }

  render() {
    return (
      <div>
        {this.renderEmojiList(this.props.emojis)}
      </div>
    );
  }

  static propTypes={ // Specify types of props to be expected - produces console warnings to help debug
    emojis: PT.array.isRequired,
  }
}



export default EmojiList;