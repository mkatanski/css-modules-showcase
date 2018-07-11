/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { PrimaryComponent, SecondaryComponent, ThemeProvider } from '../src';

const stories = storiesOf('Css Modules', module);

stories.addDecorator(withKnobs);

const themeLabel = 'Theme';
const themeOptions = {
  light: 'Light Theme',
  dark: 'Dark Theme',
};

const defaultTheme = 'light';

stories.add('Theme Provider', () => (
  <ThemeProvider theme={select(themeLabel, themeOptions, defaultTheme)}>
    <PrimaryComponent text={text('Primary Text', 'Primary Component')} />
    <div style={{ height: '20px' }} />
    <SecondaryComponent text={text('Secondary Text', 'Secondary Component')} />
  </ThemeProvider>
));
