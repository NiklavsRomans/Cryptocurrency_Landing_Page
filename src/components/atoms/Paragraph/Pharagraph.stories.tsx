import Pharagraph from './Pharagraph';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/Pharagraph',
  component: Pharagraph,
} as ComponentMeta<typeof Pharagraph>;

const Template: ComponentStory<typeof Pharagraph> = () => (
  <Pharagraph
    fontSize="16"
    para="Buy, sell, and grow your crypto with CoinFlip, the platform dedicated to every trader at every level."
  />
);

export const MainParagraph = Template.bind({});
