import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchVideos, newSearchTerm } from '../actions/index';

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
    this.props.newSearchTerm(this.state.search);
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
      <div className="container">
        <form onSubmit={this.submitHandler.bind(this)}>
          <div className="row">
            <div className="col s10">
              <input
                value={this.state.search}
                onChange={this.inputHandler.bind(this)}
                placeholder="Search for your favorites videos"
              />
            </div>
            <div className="col s2">
              <button className="btn waves-effect waves-light">Search</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchVideos, newSearchTerm }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
