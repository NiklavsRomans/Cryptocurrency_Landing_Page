import Input from './Input';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = () => <Input />;

export const MainInput = Template.bind({});
