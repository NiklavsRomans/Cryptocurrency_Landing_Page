import LandingPage from './LandingPage';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Pages/Page',
  component: LandingPage,
} as ComponentMeta<typeof LandingPage>;

const Template: ComponentStory<typeof LandingPage> = () => <LandingPage />;

export const LandingMainPage = Template.bind({});
