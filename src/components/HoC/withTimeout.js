import React from 'react';

const withTimeout = WrappedComponent => {
  class WithTimeout extends React.Component {
    timeout = null

    addTimeout = (func, delay) => {
      this.timeout = setTimeout(func, delay);
    }

    clearTimeout = () => {
      clearTimeout(this.timeout);
    }

    render() {
      return (
        <WrappedComponent
          addTimeout={this.addTimeout}
          clearTimeout={this.clearTimeout}
          {...this.props}
        />
      );
    }
  }

  return WithTimeout;
};

export default withTimeout;
