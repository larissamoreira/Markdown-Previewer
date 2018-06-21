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

  componentDidMount() {
    const defaultText =
      " # H1\n" +
      "## H2\n" +
      "[here is a link](https://www.google.com)\n" +
      "`back-ticks around`\n" +
      "``` print('codeblock') ```\n" +
      "1. First ordered list item\n" +
      "> Block Quotes!\n" +
      "![React Logo w/ Text](https://goo.gl/Umyytc)" +
      "**bolded text**";

    this.setState({
      input: defaultText
    });
  }

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
