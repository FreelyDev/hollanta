import './menu.scss';
import { useContext, useEffect, useRef, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { truncateWalletString } from 'utils';
import MultiLanguageContext from 'context/MultiLanguageContext';
import ConnectModal from 'components/modal/connectModal/ConnectModal';
import AccountModal from 'components/modal/accountModal/AccountModal';
import { useHistory } from 'react-router';
import { useWeb3React } from '@web3-react/core';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

type MenuType = {
  menuOpen: boolean;
  setMenuOpen(flag: boolean): void;
};

export default function Menu({ menuOpen, setMenuOpen }: MenuType) {
  const [loginStatus, setLoginStatus] = useState(false);
  const { connector, library, chainId, account, active } = useWeb3React();

  useEffect(() => {
      const isLoggedin = account && active && chainId === parseInt(process.env.REACT_APP_NETWORK_ID, 10);
      setLoginStatus(isLoggedin);
  }, [connector, library, account, active, chainId]);
  
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [showAcountModal, setShowAcountModal] = useState(false);

  const [navId, setNavId] = useState("");
  const search = useLocation();
  useEffect(() => {
    
    if(search.hash.includes("#")){
      const hash = search.hash.replace("#", "");
      setNavId(hash);
    }else{
      const hash = search.pathname.replace("/", "");
      setNavId(hash);
    }
    
  }, [setNavId, search]);
  return (
    <>
    <div className={'menubar ' + (menuOpen && 'active')}>
      <div className="menuContent">
        <div className="sideBar">
        <div className="navList" >
          <ul className="menu">

            <li className={clsx("menu-item", navId === "" ? "selected" : "")} onClick={() => setMenuOpen(false)}>
              <HashLink to="/">Home</HashLink>
            </li>
            <li className={clsx("menu-item", navId === "dashboard" ? "selected" : "")} onClick={() => setMenuOpen(false)}>
              <HashLink to="/dashboard">Dashboard</HashLink>
            </li>
            <li className={clsx("menu-item", navId === "voting" ? "selected" : "")} onClick={() => setMenuOpen(false)}>
              <HashLink to="/voting">Voting</HashLink>
            </li>
            <li className={clsx("menu-item", navId === "market" ? "selected" : "")} onClick={() => setMenuOpen(false)}>
              <HashLink to="/market">Market</HashLink>
            </li>
            <li className={clsx("menu-item", navId === "wallet" ? "selected" : "")} onClick={() => setMenuOpen(false)}>
              <HashLink to="/wallet">Wallet</HashLink>
            </li>
            <li className={clsx("menu-item", navId === "contact" ? "selected" : "")} onClick={() => setMenuOpen(false)}>
              <HashLink to="/contact">Contact</HashLink>
            </li>
          </ul>

        </div>
      </div>
      </div>
    </div>
    <ConnectModal showConnectModal={showConnectModal} setShowConnectModal={setShowConnectModal} />
    <AccountModal showAccountModal={showAcountModal} setShowAccountModal={setShowAcountModal} />
    </>
  );
}
