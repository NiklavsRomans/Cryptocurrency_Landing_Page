import CryptoCard from './CryptoCard';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Molecules/Cards',
  component: CryptoCard,
} as ComponentMeta<typeof CryptoCard>;

const Template: ComponentStory<typeof CryptoCard> = () => (
  <CryptoCard
    coin={'Bitcoin'}
    symbol={'BTC'}
    current_price={69.0}
    price_change={20.45}
  />
);

export const CryptocurrencyCard = Template.bind({});
