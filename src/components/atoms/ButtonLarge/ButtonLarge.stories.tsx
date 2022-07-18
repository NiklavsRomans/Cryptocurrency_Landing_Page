import ButtonLarge from './ButtonLarge';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/Buttons',
  component: ButtonLarge,
} as ComponentMeta<typeof ButtonLarge>;

const Template: ComponentStory<typeof ButtonLarge> = () => <ButtonLarge />;

export const LargeButton = Template.bind({});
