import React from 'react';
import { findNodeHandle, requireNativeComponent, UIManager } from 'react-native';

const COMPONENT_NAME = 'PipView';
const RNPipView = requireNativeComponent(COMPONENT_NAME);

export default class PipView extends React.PureComponent {
  render() {
    return <RNPipView />;
  }

  updateFromManager = async () => {
    UIManager.dispatchViewManagerCommand(
      findNodeHandle(this),
      // @ts-ignore : https://github.com/DefinitelyTyped/DefinitelyTyped/issues/35872
      UIManager.getViewManagerConfig(COMPONENT_NAME).Commands.updateFromManager,
      [20],
    );
  };
}
