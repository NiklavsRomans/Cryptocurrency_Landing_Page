import PlatformFeature from './PlatformFeature';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Organisms/Sections',
  component: PlatformFeature,
} as ComponentMeta<typeof PlatformFeature>;

const Template: ComponentStory<typeof PlatformFeature> = () => (
  <PlatformFeature />
);

export const PlatformFeatures = Template.bind({});
