import { ChainId } from '@sushiswap/sdk';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { NetworkConnector } from './NetworkConnector';

import nftzip_LOGO_URL from '../assets/svgs/logo_blue.svg';
import { GET_RPC, CHAIN } from 'constants/networks';

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';

// 'https://rpc.testnet.fantom.network',
// 4002

const RPC = {
  [CHAIN[process.env.REACT_APP_ENV]]: GET_RPC[process.env.REACT_APP_ENV],
};
// const RPC = isMainnet
//   ? {
//       [ChainId.FANTOM]: 'https://rpc.ftm.tools',
//     }
//   : {
//       [ChainId.FANTOM_TESTNET]: 'https://localhost:7545',
//     };

console.log('RPC', RPC);

export const network = new NetworkConnector({
  defaultChainId: ChainId.FANTOM,
  urls: RPC,
});

export const injected = new InjectedConnector({
  supportedChainIds: isMainnet
    ? [
        250, // fantom
      ]
    : [
        1337, // fantom testnet
        4002,
      ],
});

export const walletlink = new WalletLinkConnector({
  url: 'https://rpc.ftm.tools',
  appName: 'nftzip',
  appLogoUrl: nftzip_LOGO_URL,
});
