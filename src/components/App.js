import React from 'react';
import FilterEmoji from './FilterEmoji';
import EmojiList from './EmojiList';
import emojiData from '../data/emojiList.json';
import _ from 'underscore';

class App extends React.Component {
  // Our state is the currently selected emojis and the search term
  constructor(props) {
    super(props);
    // Put the array of currently selected emojis in the state so we can persist it and pass it to the EmojiList for display
    this.state = { emojis: emojiData };
    this.filterEmojiData = this.filterEmojiData.bind(this);
  }
  render() {
    return (
      <div>
        <h1>Emoji Search</h1>
        <FilterEmoji filterEmojiList={this.filterEmojiData} />
        <hr/>
        <EmojiList emojis={this.state.emojis} />
      </div>
    );
  }

  filterEmojiData(filterTerm='') {
    let reg=new RegExp(filterTerm, 'gi')
    let tmp =_.filter(emojiData, function(item) { return reg.test(item.keywords) || reg.test(item.title); });
    this.setState({emojis: tmp});
  }
}

export default App;

