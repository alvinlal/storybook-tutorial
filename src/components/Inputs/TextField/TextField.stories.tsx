import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextField from './TextField';

export default {
  title: 'Components/Input/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

export const small: ComponentStory<typeof TextField> = () => <TextField size='small' />;

export const medium: ComponentStory<typeof TextField> = () => <TextField size='medium' />;

export const large: ComponentStory<typeof TextField> = () => <TextField size='large' />;
