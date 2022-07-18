import SupportFeature from './SupportFeature';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Organisms/Sections',
  component: SupportFeature,
} as ComponentMeta<typeof SupportFeature>;

const Template: ComponentStory<typeof SupportFeature> = () => (
  <SupportFeature />
);

export const SupportFeatures = Template.bind({});
