import CardFeature from './CardFeature';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Organisms/Sections',
  component: CardFeature,
} as ComponentMeta<typeof CardFeature>;

const Template: ComponentStory<typeof CardFeature> = () => <CardFeature />;

export const CardFeatures = Template.bind({});
