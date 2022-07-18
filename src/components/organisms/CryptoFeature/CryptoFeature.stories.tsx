import CryptoFeature from './CryptoFeature';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Organisms/Sections',
  component: CryptoFeature,
} as ComponentMeta<typeof CryptoFeature>;

const Template: ComponentStory<typeof CryptoFeature> = () => <CryptoFeature />;

export const CryptoFeatures = Template.bind({});
