import { toast } from 'react-toastify';
import { baseApiUrl, baseSyncUrl, currentNetwork, subgraphUrl } from 'utils';

/**
 * Admin Api
 */

export interface DepositICOTokenSign {
  icoId: string;
  amount: string;
  icoToken: string;
  signature: string;
}

export interface CompleteICOSign {
  icoId: string;
  icoToken: string;
  price: string;
  signature: string;
}

export interface CancelICOSign {
  icoId: string;
  icoToken: string;
  signature: string;
}

export interface ClaimFundTokenFromICOSign {
  icoId: string;
  fundToken: string;
  signature: string;
}

export const apiPostCreateNewICO = async (
  signData: string, account: string, timestamp: number,
  logo: File, name: string, description: string,
  admin: string, icoToken: string, fundToken: string, price: number,
  startAt: number, endAt: number,
  hardcap: number, softcap: number,
  minPerUser: number, maxPerUser: number) => {

  const formdata = new FormData();
  formdata.append("signData", signData);
  formdata.append("account", account);
  formdata.append("timestamp", timestamp.toString());
  formdata.append("logo", logo);
  formdata.append("name", name);
  formdata.append("description", description);
  formdata.append("admin", admin);
  formdata.append("chainId", currentNetwork);
  formdata.append("icoToken", icoToken);
  formdata.append("fundToken", fundToken);
  formdata.append("price", price.toString());
  formdata.append("startAt", startAt.toString());
  formdata.append("endAt", endAt.toString());
  formdata.append("hardcap", hardcap.toString());
  formdata.append("softcap", softcap.toString());
  formdata.append("minPerUser", minPerUser.toString());
  formdata.append("maxPerUser", maxPerUser.toString());

  const requestOptions: RequestInit = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  const response = await fetch(`${baseApiUrl}/ico/admin/create`, requestOptions);
  const responseData = await response.json();
  if (responseData.status === 'success') {
    return true;
  } else {
    if (responseData?.data?.error) toast.error(responseData.data.error);
  }
  return false
}

export const apiPostDepositICOToken = async (icoId: string, amount: number) => {

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("icoId", icoId);
  urlencoded.append("chainId", currentNetwork);
  urlencoded.append("amount", amount.toString());

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  const response = await fetch(`${baseApiUrl}/ico/admin/deposit`, requestOptions);
  const responseData = await response.json();
  if (responseData.status === 'success') {
    const signData: DepositICOTokenSign = responseData.data;
    return signData;
  } else {
    if (responseData?.data?.error) toast.error(responseData.data.error);
  }
  return undefined;
}

export const apiPostCompleteICO = async (icoId: string) => {

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("icoId", icoId);
  urlencoded.append("chainId", currentNetwork);

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  const response = await fetch(`${baseApiUrl}/ico/admin/complete`, requestOptions);
  const responseData = await response.json();
  if (responseData.status === 'success') {
    const signData: CompleteICOSign = responseData.data;
    return signData;
  } else {
    if (responseData?.data?.error) toast.error(responseData.data.error);
  }
  return undefined;
}

export const apiPostCancelICO = async (icoId: string) => {

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("icoId", icoId);
  urlencoded.append("chainId", currentNetwork);

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  const response = await fetch(`${baseApiUrl}/ico/admin/cancel`, requestOptions);
  const responseData = await response.json();
  if (responseData.status === 'success') {
    const signData: CancelICOSign = responseData.data;
    return signData;
  } else {
    if (responseData?.data?.error) toast.error(responseData.data.error);
  }
  return undefined;
}

export const apiPostClaimFundTokenFromICO = async (icoId: string) => {

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("icoId", icoId);
  urlencoded.append("chainId", currentNetwork);

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  const response = await fetch(`${baseApiUrl}/ico/admin/claim`, requestOptions);
  const responseData = await response.json();
  if (responseData.status === 'success') {
    const signData: ClaimFundTokenFromICOSign = responseData.data;
    return signData;
  } else {
    if (responseData?.data?.error) toast.error(responseData.data.error);
  }
  return undefined;
}

export const apiPostAllowUsersToClaim = async (signData: string, account: string, timestamp: number, icoId: string) => {

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("icoId", icoId);
  urlencoded.append("chainId", currentNetwork);
  urlencoded.append("signData", signData);
  urlencoded.append("account", account);
  urlencoded.append("timestamp", timestamp.toString());

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  const response = await fetch(`${baseApiUrl}/ico/admin/allow-user-claim`, requestOptions);
  const responseData = await response.json();
  if (responseData.status === 'success') {
    return true;
  } else {
    if (responseData?.data?.error) toast.error(responseData.data.error);
  }
  return false;
}

/**
 * Client Api
 */
export interface ContributeToICOSign {
  icoId: string;
  fundToken: string;
  amount: string;
  amountArgs: string;
  signature: string;
}

export interface ClaimFromICOSign {
  icoId: string;
  icoToken: string;
  price: string;
  signature: string;
}

export interface RefundFromICOSign {
  icoId: string;
  fundToken: string;
  signature: string;
}

export const apiPostContributeToICO = async (icoId: string, amount: number, account: string) => {

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("icoId", icoId);
  urlencoded.append("chainId", currentNetwork);
  urlencoded.append("amount", amount.toString());
  urlencoded.append("account", account);

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  const response = await fetch(`${baseApiUrl}/ico/user/contribute`, requestOptions);
  const responseData = await response.json();
  if (responseData.status === 'success') {
    const signData: ContributeToICOSign = responseData.data;
    return signData;
  } else {
    if (responseData?.data?.error) toast.error(responseData.data.error);
  }
  return undefined;
}

export const apiPostClaimFromICO = async (icoId: string, account: string) => {

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("icoId", icoId);
  urlencoded.append("chainId", currentNetwork);
  urlencoded.append("account", account);

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  const response = await fetch(`${baseApiUrl}/ico/user/claim`, requestOptions);
  const responseData = await response.json();
  if (responseData.status === 'success') {
    const signData: ClaimFromICOSign = responseData.data;
    return signData;
  } else {
    if (responseData?.data?.error) toast.error(responseData.data.error);
  }
  return undefined;
}

export const apiPostRefundFromICO = async (icoId: string, account: string) => {

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("icoId", icoId);
  urlencoded.append("chainId", currentNetwork);
  urlencoded.append("account", account);

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  const response = await fetch(`${baseApiUrl}/ico/user/refund`, requestOptions);
  const responseData = await response.json();
  if (responseData.status === 'success') {
    const signData: RefundFromICOSign = responseData.data;
    return signData;
  } else {
    if (responseData?.data?.error) toast.error(responseData.data.error);
  }
  return undefined;
}

/**
 * Public Api
 */
export interface LaunchpadData {
  icoId: string;
  fundToken: string;
  amountArgs: string;
  signature: string;
}

export interface ICOData {
  _id: string;
  logo: string;
  name: string;
  description: string;
  admin: string;
  chainId: number;
  icoToken: string;
  icoTokenName: string;
  icoTokenSymbol: string;
  icoTokenDecimal: number;
  fundToken: string;
  fundTokenName: string;
  fundTokenSymbol: string;
  fundTokenDecimal: number;
  price: number;
  hardcap: number;
  softcap: number;
  minPerUser: number;
  maxPerUser: number;
  filledAmt: number;
  icoTokenAmt: number;
  startAt: number;
  endAt: number;
  status: string;
}

export const apiPostSyncLaunchpad = async () => {

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("chainId", currentNetwork);

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  const response = await fetch(`${baseSyncUrl}/launchpad`, requestOptions);
  const responseData = await response.json();
  if (responseData.status === 'success') {
    const signData: LaunchpadData = responseData.data;
    return signData;
  } else {
    if (responseData?.data?.error) toast.error(responseData.data.error);
  }
  return undefined;
}

export const apiGetICOList = async () => {
  const response = await fetch(`${baseApiUrl}/ico/list/${currentNetwork}`);
  const responseData = await response.json();
  if (responseData.status === 'success') {
    const icoList: ICOData[] = responseData.data;
    return icoList;
  } else {
    if (responseData?.data?.error) toast.error(responseData.data.error);
  }
  return undefined;
}

export const apiGetICOInfo = async (icoId: string) => {
  const response = await fetch(`${baseApiUrl}/ico/info/${currentNetwork}/${icoId}`);
  const responseData = await response.json();
  if (responseData.status === 'success') {
    const icoData: ICOData = responseData.data;
    return icoData;
  } else {
    if (responseData?.data?.error) toast.error(responseData.data.error);
  }
  return undefined;
}

export const apiPostIsAdmin = async (account: string) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("chainId", currentNetwork);
  urlencoded.append("address", account);

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  const response = await fetch(`${baseApiUrl}/ico/is-admin`, requestOptions);
  const responseData = await response.json();
  if (responseData.status === 'success') {
    if (responseData.data === true)
      return true;
  } else {
    if (responseData?.data?.error) toast.error(responseData.data.error);
  }
  return false;
}

/**
 * NFT Subgraph Api
 */

export interface NFTHoldAndStakingTokenIds {
  nftHolds: string[];
  nftStakings: string[];
}

export const apiPostNFTSubgraph = async (owner: string) => {

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const graphql = JSON.stringify({
    query: "query($owner: String!){nftHolds(where: {owner: $owner}) {id}  nftStakings(where: {owner: $owner, staked: true}) {id}}",
    variables: { "owner": owner.toLowerCase() }
  })
  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: graphql,
    redirect: 'follow'
  };


  const response = await fetch(`${subgraphUrl}`, requestOptions);
  const responseData = await response.json();
  const data = responseData.data;

  let nftHolds = [];
  let nftStakings = [];

  for (let i = 0; i < data?.nftHolds.length; i++) {
    nftHolds.push(data?.nftHolds[i].id);
  }

  for (let i = 0; i < data?.nftStakings.length; i++) {
    nftStakings.push(data?.nftStakings[i].id);
  }

  const result: NFTHoldAndStakingTokenIds = {
    nftHolds: nftHolds,
    nftStakings: nftStakings
  }
  return result;
}
