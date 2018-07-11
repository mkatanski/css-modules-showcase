import React from 'react';
import T from 'prop-types';

import Theme from '../../common/themes.pcss';

class ThemeProvider extends React.Component {
  static propTypes = {
    children: T.element.isRequired,
    theme: T.oneOf(['light', 'dark']),
  }

  static defaultProps = {
    theme: 'light',
  }

  get currentTheme() {
    const { theme } = this.props;
    switch (theme) {
      case 'light':
        return Theme.light;
      case 'dark':
        return Theme.dark;
      default: return Theme.light;
    }
  }

  render() {
    const { children } = this.props;

    return (
      <div className={this.currentTheme}>
        {children}
      </div>
    );
  }
}

export default ThemeProvider;
