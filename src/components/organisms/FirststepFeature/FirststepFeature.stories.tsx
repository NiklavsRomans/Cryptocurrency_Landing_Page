import FirststepFeature from './FirststepFeature';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Organisms/Sections',
  component: FirststepFeature,
} as ComponentMeta<typeof FirststepFeature>;

const Template: ComponentStory<typeof FirststepFeature> = () => (
  <FirststepFeature />
);

export const FirststepFeatures = Template.bind({});
