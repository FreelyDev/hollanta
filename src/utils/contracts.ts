import '@ethersproject/shims';
import { BigNumber, ethers } from 'ethers';
import { toast } from 'react-toastify';
import { currentNetwork, getContractObj, getERC20TokenObj } from '.';
import { RPC_URLS } from './connectors';
import { CancelICOSign, ClaimFromICOSign, ClaimFundTokenFromICOSign, CompleteICOSign, ContributeToICOSign, DepositICOTokenSign, RefundFromICOSign } from './api';

export async function scGetTokenTotalSupply(address) {
  const jsonProvider = new ethers.providers.JsonRpcProvider(RPC_URLS[currentNetwork]);
  const tokenContract = getERC20TokenObj(address, jsonProvider);
  try {
    const [
      decimals,
      totalSupply,
    ] = await Promise.all([
      tokenContract.decimals(),
      tokenContract.totalSupply()
    ]);
    return ethers.utils.formatUnits(totalSupply, decimals);
  } catch (error) {
    console.log(error);
    return null;

  }
}

export async function scApproveToken(provider, account, to, token, amount) {
  const tokenContract = getERC20TokenObj(token, provider);

  const allowanceAmount = await tokenContract.allowance(account, to);
  if (allowanceAmount.lt(BigNumber.from(amount))) {
    const load_approve_toast_id = toast.loading(`Please wait, Token is approving now...`);
    try {
      var tx = await tokenContract.approve(to, ethers.constants.MaxUint256);
      await tx.wait(1);
      toast.dismiss(load_approve_toast_id);
      return true;

    } catch (e) {
      console.log(e);
      toast.dismiss(load_approve_toast_id);
      return false;
    }
  }
  return true;
}

/**============================ Launchpad Admin Web3 Functions =============================**/

export async function scDepositICOToken(chainId, provider, account, signData: DepositICOTokenSign) {
  const launchPadContract = getContractObj('LaunchPad', chainId, provider);
  if (ethers.utils.getAddress(signData.icoToken) === ethers.constants.AddressZero) {
    try {
      const tx = await launchPadContract.depositIcoToken(signData.icoId, signData.icoToken, signData.amount, signData.signature, {
        value: BigNumber.from(signData.amount)
      });
      await tx.wait(1);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  } else {
    try {
      const isApproved = await scApproveToken(provider, account, launchPadContract.address, signData.icoToken, signData.amount);
      if (!isApproved) {
        toast.error(`Token approve failed.`);
        return false;
      }
      const tx = await launchPadContract.depositIcoToken(signData.icoId, signData.icoToken, signData.amount, signData.signature, {
        value: BigNumber.from(0)
      });
      await tx.wait(1);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}


export async function scCompleteICO(chainId, provider, signData: CompleteICOSign) {
  const launchPadContract = getContractObj('LaunchPad', chainId, provider);
  try {
    const tx = await launchPadContract.completeIco(signData.icoId, signData.icoToken, signData.price, signData.signature);
    await tx.wait(1);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function scCancelICO(chainId, provider, signData: CancelICOSign) {
  const launchPadContract = getContractObj('LaunchPad', chainId, provider);
  try {
    const tx = await launchPadContract.cancelIco(signData.icoId, signData.icoToken, signData.signature);
    await tx.wait(1);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function scClaimFundFromICO(chainId, provider, signData: ClaimFundTokenFromICOSign) {
  const launchPadContract = getContractObj('LaunchPad', chainId, provider);
  try {
    const tx = await launchPadContract.claimFundToken(signData.icoId, signData.fundToken, signData.signature);
    await tx.wait(1);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

/**============================ Launchpad User Web3 Functions =============================**/

export async function scContributeToICO(chainId, provider, account, signData: ContributeToICOSign) {
  const launchPadContract = getContractObj('LaunchPad', chainId, provider);
  if (ethers.utils.getAddress(signData.fundToken) === ethers.constants.AddressZero) {
    try {
      const tx = await launchPadContract.contribute(signData.icoId, signData.fundToken, signData.amountArgs, signData.signature, {
        value: BigNumber.from(signData.amount)
      });
      await tx.wait(1);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  } else {
    try {
      const isApproved = await scApproveToken(provider, account, launchPadContract.address, signData.fundToken, signData.amount);
      if (!isApproved) {
        toast.error(`Token approve failed.`);
        return false;
      }
      const tx = await launchPadContract.contribute(signData.icoId, signData.fundToken, signData.amountArgs, signData.signature, {
        value: BigNumber.from(0)
      });
      await tx.wait(1);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export async function scClaimFromICO(chainId, provider, signData: ClaimFromICOSign) {
  const launchPadContract = getContractObj('LaunchPad', chainId, provider);
  try {
    const tx = await launchPadContract.claim(signData.icoId, signData.icoToken, signData.price, signData.signature);
    await tx.wait(1);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function scRefundFromICO(chainId, provider, signData: RefundFromICOSign) {
  const launchPadContract = getContractObj('LaunchPad', chainId, provider);
  try {
    const tx = await launchPadContract.refund(signData.icoId, signData.fundToken, signData.signature);
    await tx.wait(1);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}


/**============================ NFT Web3 Functions =============================**/
export async function scGetPendingRewards(address) {
  const jsonProvider = new ethers.providers.JsonRpcProvider(RPC_URLS[currentNetwork]);
  const nftStakingContract = getContractObj('YashaNftStaking', currentNetwork, jsonProvider);
  const rewardTokenContract = getContractObj('RewardToken', currentNetwork, jsonProvider);
  try {
    const [
      decimals,
      pendingRewards,
    ] = await Promise.all([
      rewardTokenContract.decimals(),
      address ? nftStakingContract.pendingRewards(address) : BigNumber.from(0)
    ]);
    return ethers.utils.formatUnits(pendingRewards, decimals);
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function scStakeNFTs(chainId, provider, account, tokenIds: any[]) {
  const nftStakingContract = getContractObj('YashaNftStaking', chainId, provider);
  const nftContract = getContractObj('YashogunNFT', chainId, provider);
  try {
    const isApprovedForAll: boolean = await nftContract.isApprovedForAll(account, nftStakingContract.address);
    if (isApprovedForAll !== true) {
      const load_approve_toast_id = toast.loading(`Please wait, NFTs are approving now...`);
      try {
        const tx1 = await nftContract.setApprovalForAll(nftStakingContract.address, true);
        await tx1.wait(1);
      } catch (e) {
        toast.dismiss(load_approve_toast_id);
        return false;
      }
      toast.dismiss(load_approve_toast_id);
    }
    const tx = await nftStakingContract.stake(tokenIds);
    await tx.wait(1);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function scUnstakeNFTs(chainId, provider, tokenIds: any[]) {
  const nftStakingContract = getContractObj('YashaNftStaking', chainId, provider);
  try {
    const tx = await nftStakingContract.unStake(tokenIds);
    await tx.wait(1);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function scHarvest(chainId, provider) {
  const nftStakingContract = getContractObj('YashaNftStaking', chainId, provider);
  try {
    const tx = await nftStakingContract.harvest();
    await tx.wait(1);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

/*
export async function mintFixed(chainId, provider, _tokenURI, _price, _royalty) {
  const nftContract = getContractObj('YASHANFT', chainId, provider);
  const YASHAContract = getContractObj('YASHA', chainId, provider);
  try {
    const YASHADecimals = await YASHAContract.decimals();
    const tx = await nftContract.mintFixed(_tokenURI, YASHAContract.address, _royalty, ethers.utils.parseUnits(_price.toString(), YASHADecimals));
    await tx.wait(1);

    return tx.hash;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function mintAuction(chainId, provider, _tokenURI, _minBidPrice, _startTime: Date, _endTime: Date, _royalty) {
  const nftContract = getContractObj('YASHANFT', chainId, provider);
  const YASHAContract = getContractObj('YASHA', chainId, provider);
  const startUnixTimeStamp = Math.round(_startTime.getTime() / 1000);
  const endUnixTimeStamp = Math.round(_endTime.getTime() / 1000);
  try {
    const YASHADecimals = await YASHAContract.decimals();
    const tx = await nftContract.mintAuction(_tokenURI, YASHAContract.address, _royalty, ethers.utils.parseUnits(_minBidPrice.toString(), YASHADecimals), startUnixTimeStamp, endUnixTimeStamp);
    await tx.wait(1);

    return tx.hash;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function mintUnlimitedAuction(chainId, provider, _tokenURI, _royalty) {
  const nftContract = getContractObj('YASHANFT', chainId, provider);
  const YASHAContract = getContractObj('YASHA', chainId, provider);
  try {
    const tx = await nftContract.mintUnlimitedAuction(_tokenURI, YASHAContract.address, _royalty);
    await tx.wait(1);

    return tx.hash;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function buy(chainId, provider, account, _tokenID, _price) {
  const nftContract = getContractObj('YASHANFT', chainId, provider);
  try {
    await approveToken(chainId, provider, account, _price);
    const tx = await nftContract.buyWithToken(_tokenID);
    await tx.wait(1);

    return tx.hash;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function sell(chainId, provider, _tokenID, _buyer) {
  const nftContract = getContractObj('YASHANFT', chainId, provider);
  try {
    const tx = await nftContract.sell(_tokenID, _buyer);
    await tx.wait(1);

    return tx.hash;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function bid(chainId, library, provider, account, _tokenID, _price) {
  const nftContract = getContractObj('YASHANFT', chainId, provider);
  const YASHAContract = getContractObj('YASHA', chainId, provider);
  try {
    await approveToken(chainId, provider, account, _price);

    const YASHADecimals = await YASHAContract.decimals();
    const balanceYASHA = await YASHAContract.balanceOf(account);
    const bidTokenAmount = ethers.utils.parseUnits(_price.toString(), YASHADecimals)

    if (balanceYASHA.lt(bidTokenAmount)) return false;

    const load_bid_toast_id = toast.loading(`Plesae wait until send bid offer...`);
    const placeBidToNFT = await nftContract.bid(_tokenID, bidTokenAmount);
    await placeBidToNFT.wait(1);
    toast.dismiss(load_bid_toast_id);

    return true;
  } catch (e) {
    toast.dismiss();
    console.log(e);
    return false;
  }
}

export async function cancelBid(chainId, provider, _tokenID) {
  const nftContract = getContractObj('YASHANFT', chainId, provider);
  try {
    const tx = await nftContract.cancelBid(_tokenID);
    await tx.wait(1);
    return tx.hash;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function burn(chainId, provider, _tokenID) {
  const nftContract = getContractObj('YASHANFT', chainId, provider);
  try {
    const tx = await nftContract.burn(_tokenID);
    await tx.wait(1);

    return tx.hash;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function listFixed(chainId, provider, _tokenID, _price, _royalty) {
  const nftContract = getContractObj('YASHANFT', chainId, provider);
  const YASHAContract = getContractObj('YASHA', chainId, provider);
  try {
    const YASHADecimals = await YASHAContract.decimals();
    const tx = await nftContract.listFixed(_tokenID, YASHAContract.address, _royalty, ethers.utils.parseUnits(_price.toString(), YASHADecimals));
    await tx.wait(1);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function listAuction(chainId, provider, _tokenID, _minBidPrice, _startTime, _endTime, _royalty) {
  const nftContract = getContractObj('YASHANFT', chainId, provider);
  const YASHAContract = getContractObj('YASHA', chainId, provider);
  const startUnixTimeStamp = Math.round(_startTime.getTime() / 1000);
  const endUnixTimeStamp = Math.round(_endTime.getTime() / 1000);
  try {
    const YASHADecimals = await YASHAContract.decimals();
    const tx = await nftContract.listAuction(_tokenID, YASHAContract.address, _royalty, ethers.utils.parseUnits(_minBidPrice.toString(), YASHADecimals), startUnixTimeStamp, endUnixTimeStamp);
    await tx.wait(1);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function listUnlimitedAuction(chainId, provider, _tokenID, _royalty) {
  const nftContract = getContractObj('YASHANFT', chainId, provider);
  const YASHAContract = getContractObj('YASHA', chainId, provider);
  try {
    const tx = await nftContract.listUnlimitedAuction(_tokenID, YASHAContract.address, _royalty);
    await tx.wait(1);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function claimAuction(chainId, provider, _tokenID) {
  const nftContract = getContractObj('YASHANFT', chainId, provider);
  try {
    const tx = await nftContract.claimAuction(_tokenID);
    await tx.wait(1);

    return tx.hash;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function disableListing(chainId, provider, _tokenID) {
  const nftContract = getContractObj('YASHANFT', chainId, provider);
  try {
    const tx = await nftContract.disableListing(_tokenID);
    await tx.wait(1);

    return tx.hash;
  } catch (e) {
    console.log(e);
    return false;
  }
}


export async function getFeePercent(chainId, provider) {
  const nftContract = getContractObj('YASHANFT', chainId, provider);
  try {
    const feePercent = await nftContract.feePercent();
    return parseFloat(feePercent.toString());
  } catch (e) {
    console.log(e);
    return 0;
  }
}

export async function getBalanceOfYASHA(chainId, provider, account) {
  const YASHAContract = getContractObj('YASHA', chainId, provider);
  try {
    const YASHADecimals = await YASHAContract.decimals();
    const balanceYASHA = await YASHAContract.balanceOf(account);
    return parseFloat(ethers.utils.formatUnits(balanceYASHA, YASHADecimals));
  } catch (e) {
    console.log(e);
    return 0;
  }
}

export async function getBalanceOfBNB(library, account) {
  try {
    const balanceBNB = await library.getBalance(account);
    return parseFloat(ethers.utils.formatEther(balanceBNB));
  } catch (e) {
    console.log(e);
    return 0;
  }
}

export async function getAllowedMint(chainId, provider, account) {
  const nftContract = getContractObj('YASHANFT', chainId, provider);
  try {
    const enablePublic = await nftContract.enablePublicMint();
    if (enablePublic === true) return true;
    const enableUser = await nftContract.mapUserEnableForMint(account);
    return enableUser
  } catch (e) {
    console.log(e);
    return false;
  }
}
*/
