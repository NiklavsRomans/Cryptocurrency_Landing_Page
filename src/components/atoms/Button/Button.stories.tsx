import Button from './Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/Buttons',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => (
  <Button
    label={'Sign Up'}
    onClick={function (): void {
      throw new Error('Function not implemented.');
    }}
  />
);

export const MainButton = Template.bind({});
