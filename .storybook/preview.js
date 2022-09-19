import Center from '../src/storybook-utils/decorators/Center';
import { withConsole } from '@storybook/addon-console';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

export const decorators = [
  Story => (
    <Center>
      <Story />
    </Center>
  ),
  (storyfn, context) => withConsole()(storyfn)(context),
];
