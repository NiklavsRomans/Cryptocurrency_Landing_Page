import Title from './Title';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = () => (
  <Title fontSize="50" title_text="We make crypto clear and simple" />
);

export const MainParagraph = Template.bind({});
