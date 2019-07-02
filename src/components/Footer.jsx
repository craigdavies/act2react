import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FooterComponent extends Component {
  render() {
    return (
      <footer className={`footer sticky-footer` + this.props.className}>
        <div className="build-info">
          <p>
          &copy; <strong>The TCS Group</strong> - making counselling and psychotherapy accessible
          </p>
          <p>
          www.thetcsgroup.co.uk
          </p>
          <p>
          tel: 03302 020283
          </p>
          </div>
      </footer>
    );
  }
}

FooterComponent.propTypes = {
  className: PropTypes.string
};

FooterComponent.defaultProps = {
  className: ''
};

export default FooterComponent;
