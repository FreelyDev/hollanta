import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import {
  CoinbaseWallet,
  injectedConnector,
  networkConnector,
  walletConnector,
} from "../utils/connectors";
import { toast } from 'react-toastify';
import { currentNetwork } from "utils";

let connector = null;
connector = networkConnector;

const useAuth = () => {
  const { chainId, activate, deactivate } = useWeb3React();

  const login = useCallback(
    async (walletId = 0) => {
      if (walletId === 1) {
        connector = injectedConnector;
      } else if (walletId === 2) {
        connector = walletConnector;
      } else if (walletId === 3) {
        connector = CoinbaseWallet;
      }

      await activate(connector);
      if (connector !== networkConnector && chainId !== parseInt(currentNetwork)) {
        toast.error("Unsupported Network. This platform is working on Goerli Testnet.");
      }
    },
    [activate, chainId]
  );

  const logout = useCallback(() => {
    connector = networkConnector;
    deactivate();
  }, [deactivate]);

  return { login, logout };
};

export default useAuth;
