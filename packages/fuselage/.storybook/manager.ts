import colorTokens from '@quickchat.vn/fuselage-tokens/colors.json';
import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

import manifest from '../package.json';
import logo from './logo.svg';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: manifest.name,
    brandImage: logo,
    brandUrl: manifest.homepage,
    colorPrimary: colorTokens.n500,
    colorSecondary: colorTokens.p500,
  }),
});
