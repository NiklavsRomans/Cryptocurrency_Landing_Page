import Footer from './Footer';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Molecules/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const MainFooter = Template.bind({});
