import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    sortByNewestPost,
    sortByOldestPost,
    sortByHighestVoteScore,
    sortByLowestVoteScore,
    fetchAllPosts
} from '../actions';
import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const trigger = (
    <span>Sort By</span>
  );
  
  const options = [
    {
      key: 'sort',
      text: <span>Sorting Criteria</span>,
      disabled: false
    },
    { key: 'newestPost', text: 'Newest', value: 'newestPost' },
    { key: 'oldestPost', text: 'Oldest', value: 'oldestPost' },
    { key: 'highestPost', text: 'Popular', value: 'highestVote' },
    { key: 'lowestPost', text: 'Unpopular', value: 'lowestVote' }
  ];
  
class SortDropdown extends Component{
    state = { options };

  handleChange = (e, { value }) => {
    if (value === 'newestPost') {
      this.props.sortByNewestPost();
    } else if (value === 'oldestPost') {
      this.props.sortByOldestPost();
    } else if (value === 'highestVote') {
      this.props.sortByHighestVoteScore();
    } else if (value === 'lowestVote') {
      this.props.sortByLowestVoteScore();
    }
    this.props.fetchAllPosts();
  };

  render() {
    return (
        <div>
      <Dropdown
        trigger={trigger}
        options={this.state.options}
        onChange={this.handleChange}
        className="sorting-dropdown"
      />

      </div>

    );
  }
}

//const mapStateToProps = state => ({
  //sorting: state.sorting
//});

const mapStateToProps = ({ sorting }) => ({ sorting });

export default connect(mapStateToProps, {
  fetchAllPosts,
  sortByNewestPost,
  sortByOldestPost,     
  sortByHighestVoteScore,
  sortByLowestVoteScore
})(SortDropdown);