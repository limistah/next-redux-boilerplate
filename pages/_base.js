import React from "react";
import { connect } from "react-redux";
import MainLayout from "../layouts/Main";
import { currentUserSelector } from "../store/selectors/index";

class BaseContextProviders extends React.Component {
  getStateAsJS = () => this.props.fullState.toJS();

  render() {
    const { currentUser, appState } = this.props;
    return (
      <MainLayout>
        {React.Children.map(this.props.children, (element) => {
          return React.cloneElement(element, {
            baseState: {
              currentUser,
            },
          });
        })}
      </MainLayout>
    );
  }
}

const selectors = (state) => {
  const currentUser = currentUserSelector(state);

  return {
    currentUser,
    fullState: state,
  };
};

export default connect(selectors)(BaseContextProviders);
