import Button from './Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Buttons/Button',
  component: Button,
  argTypes: { onClick: { action: 'onClick' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
  children: 'primary',
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'secondary',
  children: 'secondary',
};

export const Success = Template.bind({});

Success.args = {
  variant: 'success',
  children: 'success',
};

export const Danger = Template.bind({});

Danger.args = {
  variant: 'danger',
  children: 'danger',
};
