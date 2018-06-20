import React from "react";
import Preview from "./Preview";

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <textarea
          id="editor"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <Preview text={this.state.input} />
      </React.Fragment>
    );
  }
}
