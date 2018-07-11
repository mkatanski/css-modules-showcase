import React from 'react';
import T from 'prop-types';

import Styles from './SecondaryComponent.pcss';

class SecondaryComponent extends React.Component {
  static propTypes = {
    text: T.string,
  }

  static defaultProps = {
    text: 'Secondary Component',
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

export default SecondaryComponent;
