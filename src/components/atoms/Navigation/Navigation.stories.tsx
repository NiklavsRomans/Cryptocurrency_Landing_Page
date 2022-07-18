import Navigation from './Navigation';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/Navigation',
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = () => <Navigation />;

export const HeaderNavigation = Template.bind({});
