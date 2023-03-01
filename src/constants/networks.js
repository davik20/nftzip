import { ChainId } from '@sushiswap/sdk';

export const NETWORK_LABEL = {
  [ChainId.MAINNET]: 'Ethereum',
  [ChainId.RINKEBY]: 'Rinkeby',
  [ChainId.ROPSTEN]: 'Ropsten',
  [ChainId.GÖRLI]: 'Görli',
  [ChainId.KOVAN]: 'Kovan',
  [ChainId.FANTOM]: 'Fantom',
  [ChainId.FANTOM_TESTNET]: 'Fantom Testnet',
  [ChainId.MATIC]: 'Matic',
  [ChainId.MATIC_TESTNET]: 'Matic Testnet',
  [ChainId.XDAI]: 'xDai',
  [ChainId.BSC]: 'BSC',
  [ChainId.BSC_TESTNET]: 'BSC Testnet',
  [ChainId.MOONBASE]: 'Moonbase',
  [ChainId.AVALANCHE]: 'Avalanche',
  [ChainId.FUJI]: 'Fuji',
  [ChainId.HECO]: 'HECO',
  [ChainId.HECO_TESTNET]: 'HECO Testnet',
  [ChainId.HARMONY]: 'Harmony',
  [ChainId.HARMONY_TESTNET]: 'Harmony Testnet',
};

export const Contracts = {
  [ChainId.FANTOM]: {
    auction: '0x951Cc69504d39b3eDb155CA99f555E47E044c2F1',
    sales: '0xa06aecbb8CD9328667f8E05f288e5b3ac1CFf852',
    bundleSales: '0x56aD389A02Ea9d63f13106cB0c161342f537a92e',
    factory: '0xCC7A2eC7A8A0564518fD3D2ca0Df8B2137626144', //FantomNFTFactory
    privateFactory: '0xa4fDb09e1796730bfBA8a352074F0dd65D400Dd4', //FantomNFTFactoryPrivate
    artFactory: '0x520DaB621f93F59d3557174280AB1B6d4FB8c956', //FantomArtFactory
    privateArtFactory: '0x736Eae40AdFf88570b92378c97a0D11b44E1C953', //FantomArtFactoryPrivate
  },
  [ChainId.FANTOM_TESTNET]: {
    auction: '0xDC8e329b0bA326f7Fcdbb5d42B437FfC7EA7C7a8',
    sales: '0xB83e34dB1D2e8662E6f64FD8f1EC072031C45ff3',
    bundleSales: '0x52352D4a5fB2a79722a875bBdF2a6D00A152a3C5',
    factory: '0xCFC92B32aEcAe32fFbDe5316bE7C7852a47Bd91D', //FantomNFTFactory
    privateFactory: '0x7d3bb8dD1f3b123C6DFEf882709Fadc007ee4532', //FantomNFTFactoryPrivate
    artFactory: '0x980A2fAC219CD4e26033E82A44D6798F7488aDb2', //FantomArtFactory
    privateArtFactory: '0x0106fe87F41BAa91D6fe52c508723e8cf5082c49', //FantomArtFactoryPrivate
  },
  [1337]: {
    auction: '0x05BB93DB30dc54a0196aF76AA0C7120B7327184b',
    sales: '0xFa6eb0563532C7584cDD0A4E47976074e367f4dD',
    bundleSales: '0xDAB5b82C09e436cf727FF3be91AdBE200A4E370a',
    factory: '0x51A796941f41706139A186aB8485b57247384c28', //FantomNFTFactory
    privateFactory: '0x61c14C90C70928fD74D667e110996B6e0463161A', //FantomNFTFactoryPrivate
    artFactory: '0xb0AcF8c41ab0954156e2D7CC6aE06b6f1a5a8269', //FantomArtFactory
    privateArtFactory: '0xE01968fF95a90cCCE8084ec84DdECD3726bEbA71', //FantomArtFactoryPrivate
  },
};

export const CHAIN = {
  MAINNET: 250,
  TESTNET: 4002,
  LOCAL: 1337,
};

export const ALLOWED_CHAINS = [250, 4002, 1337];

export const GET_RPC = {
  MAINNET: 'https://rpc.ftm.tools',
  TESTNET: 'https://rpc.testnet.fantom.network',
  LOCAL: 'HTTP://127.0.0.1:7545',
};

export const DEFAULT_CHAIN = 1337;
