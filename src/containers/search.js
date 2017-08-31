import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchVideos } from '../actions/index';

/**
 * SearchBar
 * @type {SearchBar}
 */
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
  }
  /**
   * Form Submit Handler
   * @method submitHandler
   * @param  {event}      submit event
   * @return {void}
   */
  submitHandler(event) {
    event.preventDefault();
    this.props.searchVideos(this.state.search);
  }
  /**
   * Input onChange handler
   * @method inputHandler
   * @param  {event}
   * @return {void}
   */
  inputHandler(event) {
    const { value } = event.target;
    this.setState({ search: value });
  }
  /**
   * Render Component
   * @method render
   * @return {JSX}
   */
  render() {
    return (
      <form onSubmit={this.submitHandler.bind(this)}>
        <input
          value={this.state.search}
          onChange={this.inputHandler.bind(this)}
        />
        <button>Search</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchVideos }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
