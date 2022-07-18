import Hero from './Hero';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Organisms/Sections',
  component: Hero,
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = () => <Hero />;

export const HeroFeatures = Template.bind({});
