import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  // action creators
  decrement,
  delay,
  increment,

  // selectors
  getCurrentCount
} from '../redux/counter';

import { connect } from 'react-redux';

import IncrementingLoader from './incrementingLoader';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.delayIncrementCounter = this.delayIncrementCounter.bind(this);
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }
  incrementCounter() {
    this.props.increment(1);
  }

  decrementCounter() {
    this.props.decrement(1);
  }

  delayIncrementCounter() {
    this.props.delay(1);
  }

  render() {
    const { counter, isLoading } = this.props;

    return (
      <div>
        <button onClick={this.delayIncrementCounter}>
          Increment after 2 seconds
        </button>{' '}
        <button onClick={this.incrementCounter}>
          Increment
        </button>{' '}
        <button onClick={this.decrementCounter}>
          Decrement
        </button>
        <hr />
        <div>Clicked: { counter } times</div>
        {isLoading && <IncrementingLoader />}
      </div>
    );
  }
}

Counter.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  counter: PropTypes.number,
  decrement: PropTypes.func,
  delay: PropTypes.func,
  increment: PropTypes.func,
}

// We are creating a FUNCTION for map state to props so that this component
// will get it's OWN copy of the selectors 
// NORMALLY YOU WOULD ONLY DO THIS IF YOU WERE PASSING PROPS TO THE SELECTOR!!!
const makeMapStateToProps = () => {
  const mapStateToProps = state => ({
    counter: getCurrentCount(state), // from a useless selector used as an example
    isLoading: state.isLoading
  });
  return mapStateToProps;
}

const mapDispatchToProps = dispatch => ({
  delay: (inc) => dispatch(delay(inc)),
  decrement: (inc) => dispatch(decrement(inc)),
  increment: (inc) => dispatch(increment(inc))
});

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(Counter);
