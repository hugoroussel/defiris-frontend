/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-filename-extension */
import '../App.css';
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { FaWallet } from 'react-icons/fa';
import erc20 from '../abi/erc20';
import defiris from '../abi/defiris';
import logo from '../public/logo.png';
import Navbar from '../Components/Navbar/Navbar';

function hexToInt(hexstring) {
  return parseInt(hexstring, 16);
}

const DAI_IMAGE = 'https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png';
const USDC_IMAGE = 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=010';
const AAVE_IMAGE = 'https://cryptologos.cc/logos/aave-aave-logo.png';
const COMPOUND_IMAGE = 'https://cryptologos.cc/logos/compound-comp-logo.png';
const TETHER_IMAGE = 'https://cryptologos.cc/logos/tether-usdt-logo.png';
const MPH_IMAGE = 'https://88mph.app/docs/img/88mph-logo-dark.png';
const BUSD_IMAGE = 'https://cryptologos.cc/logos/binance-usd-busd-logo.png';
const GUSD_IMAGE = 'https://cryptologos.cc/logos/gemini-dollar-gusd-logo.png';

const DAI = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const USDC = '0x1613beB3B2C4f22Ee086B2b38C1476A3cE7f78E8';
const DEFIRIS = '0x998abeb3E57409262aE5b751f60747921B33613E';

function Portefolio() {
  const [address, setAddress] = useState('');
  const [tokens, setTokens] = useState('');
  const [daiBalance, setDaiBalance] = useState(0);
  const [usdcBalance, setUsdcBalance] = useState(0);

  async function getAccount() {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    setAddress(account);
    return account;
  }

  async function getDaiContract() {
    const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
    // const signer = await provider.getSigner();
    const daiContract = new ethers.Contract(DAI, erc20, provider);
    return daiContract;
  }

  async function getUsdcContract() {
    const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
    // const signer = await provider.getSigner();
    const usdcContract = new ethers.Contract(USDC, erc20, provider);
    return usdcContract;
  }

  async function setStableCoinsBalances() {
    const daiContract = await getDaiContract();
    const ca = await getAccount();
    const balance = await daiContract.balanceOf(ca);
    setDaiBalance(hexToInt(balance._hex));
    const usdcContract = await getUsdcContract();
    const balanceUSDC = await usdcContract.balanceOf(ca);
    setUsdcBalance(hexToInt(balanceUSDC._hex));
  }

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      // alert('MetaMask is installed!');
      getAccount();
      setStableCoinsBalances();
    } else {
      // alert('Please use Metamask to use this application');
    }
  }, []);

  return (

    <div className="Defiris">
      <Navbar />

      <br />
      <br />
      <br />
      <br />

      <div className="section is-small">
        <h1 className="title is-12">
          Portefolio
        </h1>
      </div>

      <div className="columns">
        <div className="column" />
        <div className="column is-two-fifths">
          <div className="box">
            <center>
              <div className="column">
                <h1 className="title is-12">
                  <FaWallet />
                </h1>
              </div>
            </center>
            <br />
            <br />

            <div className="columns" style={{ alignItems: 'center' }}>
              <div className="column">
                <figure className="image is-48x48">
                  <img src={DAI_IMAGE} />
                </figure>
              </div>
              <div className="column">0</div>
            </div>

            <div className="columns" style={{ alignItems: 'center' }}>
              <div className="column">
                <figure className="image is-48x48">
                  <img src={USDC_IMAGE} />
                </figure>
              </div>
              <div className="column">0</div>
            </div>

            <div className="columns" style={{ alignItems: 'center' }}>
              <div className="column">
                <figure className="image is-48x48">
                  <img src={MPH_IMAGE} />
                </figure>
              </div>
              <div className="column">0</div>
            </div>

            <div className="columns" style={{ alignItems: 'center' }}>
              <div className="column">
                <figure className="image is-48x48">
                  <img src={GUSD_IMAGE} />
                </figure>
              </div>
              <div className="column">0</div>
            </div>

            <div className="columns" style={{ alignItems: 'center' }}>
              <div className="column">
                <figure className="image is-48x48">
                  <img src={TETHER_IMAGE} />
                </figure>
              </div>
              <div className="column">0</div>
            </div>

            <div className="columns" style={{ alignItems: 'center' }}>
              <div className="column">
                <figure className="image is-48x48">
                  <img src={BUSD_IMAGE} />
                </figure>
              </div>
              <div className="column">0</div>
            </div>

          </div>
        </div>
        <div className="column" />
      </div>

      <h1 className="title is-12">
        Your address:
        {' '}
        {address}
      </h1>

      <section className="section is-small">
        <p>
          Build by Hugo Roussel for ETHGlobal HackMoney 2021
        </p>
      </section>

    </div>
  );
}

export default Portefolio;
