import { useCallback } from 'react';
import { ethers } from 'ethers';
import { useWeb3React } from '@web3-react/core';
import { GET_RPC, CHAIN } from '../constants/networks.js';
// eslint-disable-next-line no-undef

const NETWORK = process.env.REACT_APP_ENV;

const RPC = GET_RPC[NETWORK];
const CHAIN_ID = CHAIN[NETWORK];

export default () => {
  const { chainId } = useWeb3React();
  console.log('there is a chainid' + chainId);
  console.log(RPC, CHAIN_ID);
  const getContract = useCallback(
    async (address, abi) => {
      if (chainId) {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        return new ethers.Contract(address, abi, signer);
      } else {
        const provider = new ethers.providers.JsonRpcProvider(RPC, CHAIN_ID);

        return new ethers.Contract(address, abi, provider);
      }
    },
    [chainId]
  );

  return { getContract };
};
