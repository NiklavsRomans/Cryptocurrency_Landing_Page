import Header from './Header';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Molecules/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const MainHeader = Template.bind({});
