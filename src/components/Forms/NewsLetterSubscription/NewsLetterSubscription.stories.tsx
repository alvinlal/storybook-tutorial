import NewsLetterSubscriptionComponent from './NewsLetterSubscription';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Forms/NewsLetterSubscription',
  component: NewsLetterSubscriptionComponent,
} as ComponentMeta<typeof NewsLetterSubscriptionComponent>;

export const NewsLetterSubscription: ComponentStory<typeof NewsLetterSubscriptionComponent> =
  () => <NewsLetterSubscriptionComponent />;
