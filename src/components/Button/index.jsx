import { Component } from "react";
import "./styles.css";

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
