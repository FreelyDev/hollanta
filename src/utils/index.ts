import { Contract } from '@ethersproject/contracts';
import ERC20_ABI from 'contracts/ERC20.json';
import LaunchPad_ABI from 'contracts/LaunchPad.json';
import YashogunNFT_ABI from 'contracts/YashogunNFT.json';
import YashaNftStaking_ABI from 'contracts/YashaNftStaking.json';

export const Networks = {
  MainNet: 1,
  Goerli: 5
};

export const CONTRACTS_BY_NETWORK = {
  [Networks.MainNet]: {

  },
  [Networks.Goerli]: {
    LaunchPad: {
      address: '0xb19114D11a7799bee3923B28cBE31Ae78B4bdB54',
      abi: LaunchPad_ABI,
    },
    YashogunNFT: {
      address: '0xA35aa383760616a2d0D628267Eb956fe6aC6ba17',
      abi: YashogunNFT_ABI,
    },
    YashaNftStaking: {
      address: '0xB43Eefe71182A1e74f174aCA8329b4C6043f02C0',
      abi: YashaNftStaking_ABI,
    },
    RewardToken: {
      address: '0x2ac4e5411843FF6389dF8866AdC77b976BB46AA4',
      abi: ERC20_ABI,
    },
  }
};

export const currentNetwork = process.env.REACT_APP_NETWORK_ID;

export const baseApiUrl = process.env.REACT_APP_API_URL;
export const baseSyncUrl = process.env.REACT_APP_SYNC_URL;
export const baseUploadUrl = process.env.REACT_APP_UPLOAD_URL;
export const subgraphUrl = process.env.REACT_APP_SUBGRAPH_URL;

export function getContractInfo(name, chainId = null) {

  const contracts = CONTRACTS_BY_NETWORK?.[chainId ? chainId : currentNetwork];
  if (contracts) {
    return contracts?.[name];
  } else {
    return null;
  }
}

export function truncateWalletString(walletAddress) {
  if (!walletAddress) return walletAddress;
  const lengthStr = walletAddress.length;
  const startStr = walletAddress.substring(0, 7);
  const endStr = walletAddress.substring(lengthStr - 7, lengthStr);
  return startStr + '...' + endStr;
}

export function numberToString(n1) {
  if (n1) {
    const cn1 = n1.toLocaleString('en-US');
    return cn1;
  } else {
    return '';
  }
}

export function truncateHashString(txhash) {
  if (!txhash) return txhash;
  const lengthStr = txhash.length;
  const startStr = txhash.substring(0, 10);
  const endStr = txhash.substring(lengthStr - 10, lengthStr);
  return startStr + '...' + endStr;
}

export function getContractObj(name, chainId, provider) {
  const info = getContractInfo(name, chainId);
  return !!info && new Contract(info.address, info.abi, provider);
}

export function getERC20TokenObj(address, provider) {
  return new Contract(address, ERC20_ABI, provider);
}

export const shorter = str => (str?.length > 8 ? str.slice(0, 6) + '...' + str.slice(-4) : str);
