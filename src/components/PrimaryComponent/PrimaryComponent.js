import React from 'react';
import T from 'prop-types';

import Styles from './PrimaryComponent.pcss';

class PrimaryComponent extends React.Component {
  static propTypes = {
    text: T.string,
  }

  static defaultProps = {
    text: 'Primary Component',
  }

  render() {
    const { text } = this.props;
    return (
      <div className={Styles.Wrapper}>
        {text}
      </div>
    );
  }
}

export default PrimaryComponent;
