import React from "react";

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

function selector(state) {
  return {};
}

export default connect(selector)(MainLayout);
