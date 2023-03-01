import { ChainId } from '@sushiswap/sdk';

import { calculateGasMargin, getHigherGWEI } from 'utils';
import { Contracts } from 'constants/networks';
import useContract from 'hooks/useContract';

import { FACTORY_ABI } from './abi';

// eslint-disable-next-line no-undef
const chainName = process.env.REACT_APP_ENV;
const CHAIN =
  chainName === 'MAINNET'
    ? ChainId.FANTOM
    : chainName === 'TESTNET'
    ? ChainId.FANTOM_TESTNET
    : 1337;

console.log(CHAIN);
export const useFactoryContract = () => {
  const { getContract } = useContract();

  const getFactoryContract = async () =>
    await getContract(Contracts[CHAIN].factory, FACTORY_ABI);

  const getPrivateFactoryContract = async () =>
    await getContract(Contracts[CHAIN].privateFactory, FACTORY_ABI);

  const getArtFactoryContract = async () =>
    await getContract(Contracts[CHAIN].artFactory, FACTORY_ABI);

  const getPrivateArtFactoryContract = async () =>
    await getContract(Contracts[CHAIN].privateArtFactory, FACTORY_ABI);

  const createNFTContract = async (contract, name, symbol, value, from) => {
    const args = [name, symbol];

    const options = {
      value,
      from,
      gasPrice: getHigherGWEI(),
    };

    const gasEstimate = await contract.estimateGas.createNFTContract(
      ...args,
      options
    );
    console.log(options, gasEstimate);
    options.gasLimit = calculateGasMargin(gasEstimate);
    return await contract.createNFTContract(...args, options);
  };

  return {
    getFactoryContract,
    getPrivateFactoryContract,
    getArtFactoryContract,
    getPrivateArtFactoryContract,
    createNFTContract,
  };
};
