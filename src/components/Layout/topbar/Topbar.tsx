import ConnectModal from 'components/modal/connectModal/ConnectModal';
import { useContext, useEffect, useRef, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { truncateWalletString } from 'utils';
import './topbar.scss';
import AccountModal from 'components/modal/accountModal/AccountModal';
import clsx from 'clsx';
import { useHistory } from 'react-router';
import { useWeb3React } from '@web3-react/core';
import { useLocation } from 'react-router-dom';
type MenuType = {
  menuOpen?: boolean;
  setMenuOpen?(flag: boolean): void;
};
export default function Topbar({ menuOpen, setMenuOpen }: MenuType) {
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [showAcountModal, setShowAcountModal] = useState(false);


  const [loginStatus, setLoginStatus] = useState(false);
  const { connector, library, chainId, account, active } = useWeb3React();

  useEffect(() => {
      const isLoggedin = account && active && chainId === parseInt(process.env.REACT_APP_NETWORK_ID, 10);
      setLoginStatus(isLoggedin);
  }, [connector, library, account, active, chainId]);

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
    <div className="nav-background">
      <div className="topbar">
        <div className="logo">
          <HashLink to="/">
            <img src="/assets/logo.png" alt="" />
          </HashLink>
        </div>

        <ul className="menu">
            <li className={clsx("menu-item", navId === "" ? "selected" : "")}>
              <HashLink to="/">Home</HashLink>
            </li>
            <li className={clsx("menu-item", navId === "dashboard" ? "selected" : "")}>
              <HashLink to="/dashboard">Dashboard</HashLink>
            </li>
            <li className={clsx("menu-item", navId === "voting" ? "selected" : "")}>
              <HashLink to="/voting">Voting</HashLink>
            </li>
            <li className={clsx("menu-item", navId === "market" ? "selected" : "")}>
              <HashLink to="/market">Market</HashLink>
            </li>
            <li className={clsx("menu-item", navId === "wallet" ? "selected" : "")}>
              <HashLink to="/wallet">Wallet</HashLink>
            </li>
            <li className={clsx("menu-item", navId === "contact" ? "selected" : "")}>
              <HashLink to="/contact">Contact</HashLink>
            </li>
        </ul>

        <div className="btns">
          <HashLink to="/contact" className="iconBtn">
            <img src="/assets/icons/icon_global.svg" alt="" />
          </HashLink>
          <HashLink to="/contact" className="iconBtn">
            <img src="/assets/icons/icon_setting.svg" alt="" />
          </HashLink>
          
          <HashLink to="/contact" className="loginBtn">Register</HashLink>
          <HashLink to="/contact" className="loginBtn">Sign In</HashLink>
          <div className="connectBtn" onClick={() => !loginStatus ? setShowConnectModal(true) : setShowAcountModal(true)}>
            {loginStatus ? truncateWalletString(account) : 'Connect Wallet'}
          </div>
          
        </div>
        <div className={menuOpen ? 'hamburger active' : 'hamburger'} onClick={() => setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
        <ConnectModal showConnectModal={showConnectModal} setShowConnectModal={setShowConnectModal} />
        <AccountModal showAccountModal={showAcountModal} setShowAccountModal={setShowAcountModal} />
      </div>
    </div>
  );
}
