import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions';

class Counter extends Component {
  handleIncrement = () => {
    let { dispatch, count } = this.props;
    dispatch(increment(count));
  }

  handleDecrement = () => {
    let { dispatch, count } = this.props;
    dispatch(decrement(count));
  }

  render() {
    const { count } = this.props;
    return (
      <div>
        Count: { count }
        <br />
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);
