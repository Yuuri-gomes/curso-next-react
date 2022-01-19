import P from 'prop-types';
import React from 'react';
import { Component } from 'react';
import './styles.css';

export class ButtonComponent extends Component {
  render() {
    const { text, whenClick, disabled } = this.props;
    return (
      <button disabled={disabled} onClick={whenClick} className="button">
        {text}
      </button>
    );
  }
}

ButtonComponent.defaultProps = {
  disabled: false,
};

ButtonComponent.propTypes = {
  text: P.string.isRequired,
  whenClick: P.func.isRequired,
  disabled: P.bool,
};
