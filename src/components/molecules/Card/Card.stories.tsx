import Wallet from '../../../assets/icons/wallet.png';

import Card from './Card';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Molecules/Cards',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = () => (
  <Card
    icon={Wallet}
    title={'Trade Desk'}
    description={
      'Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform'
    }
    buttonLabel={'Find and ATM'}
  />
);

export const ClientCard = Template.bind({});
