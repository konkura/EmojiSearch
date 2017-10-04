import React from 'react';
import PT from 'prop-types';

class FilterEmoji extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.filterEmojiList(this.state.value);
    event.preventDefault();
  }

  render() {
    const style = { 'wordBreak': 'break-word', width: '400px' };
    return (
      <form onSubmit={this.handleSubmit}>
        <input style={style} type="text" value={this.state.value || ''} onChange={this.handleChange} /> {/* value={code || ''} stops you getting warnings about uncontrolled input */}
        <input type="submit" value="Filter" />
      </form>
    );
  }

  static propTypes = { 
    filterEmojiList: PT.func.isRequired
  }
}

export default FilterEmoji;