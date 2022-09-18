import Button from './Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => (
  <Button variant='primary'>Primary</Button>
);

export const Secondary: ComponentStory<typeof Button> = () => (
  <Button variant='secondary'>Secondary</Button>
);

export const Success: ComponentStory<typeof Button> = () => (
  <Button variant='success'>Success</Button>
);

export const Danger: ComponentStory<typeof Button> = () => <Button variant='danger'>Danger</Button>;
