import Trade from '../assets/icons/trade.png';
import Flip from '../assets/icons/coinflip.png';
import Wallet from '../assets/icons/wallet.png';

type CardDataProps = {
    icon: string,
    title: string,
    description: string,
    label: string
}


const CardData: CardDataProps[] = [
    {
        icon: Trade,
        title: 'Trade Desk',
        description: 'Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform',
        label: 'Get Started'
    },
    {
        icon: Flip,
        title: 'CoinFlip ATMs',
        description: 'We have thousands of ATMs located across the U.S. where you can easily convert cash to crypto',
        label: 'Find an ATM'
    },
    {
        icon: Wallet,
        title: 'Trade Desk',
        description: 'Store your growing investments in ou non custodial wallet that gives you access to a full suite of DeFi service one place',
        label: 'Download the App'
    },
];

export default CardData
