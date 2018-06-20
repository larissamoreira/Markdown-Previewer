import React from "react";
var myMarked = require("marked");

export default class Preview extends React.Component {
  render() {
    const { text } = this.props;
    const textMarked = myMarked(text);
    return <div id="preview">{textMarked}</div>;
  }
}
