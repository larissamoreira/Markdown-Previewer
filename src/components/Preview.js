import React from "react";
var myMarked = require("marked");

export default class Preview extends React.Component {
  createMarkup(textMarked) {
    return { __html: textMarked };
  }
  render() {
    const { text } = this.props;
    const textMarked = myMarked(text);
    return <div dangerouslySetInnerHTML={this.createMarkup(textMarked)} />;
  }
}
