import { Component, ComponentProps, ParentComponent } from 'solid-js';
import { Portal } from 'solid-js/web';

const Title: ParentComponent = props => {
  return (
    <Portal mount={document.head}>
      <title>{props.children}</title>
    </Portal>
  );
};

export default Title;
