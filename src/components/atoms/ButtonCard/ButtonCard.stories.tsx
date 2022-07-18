import ButtonCard from './ButtonCard';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/Buttons',
  component: ButtonCard,
} as ComponentMeta<typeof ButtonCard>;

const Template: ComponentStory<typeof ButtonCard> = () => (
  <ButtonCard label={'Get Started'} />
);

export const CardButton = Template.bind({});
