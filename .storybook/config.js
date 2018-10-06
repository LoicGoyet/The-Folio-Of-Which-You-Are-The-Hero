import { configure } from '@storybook/react';
import '../src/style/index.scss';

const req = require.context('../src/', true, /\**\/stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
