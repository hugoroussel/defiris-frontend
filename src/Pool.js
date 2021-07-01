/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-filename-extension */
import './App.css';
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import erc20 from './abi/erc20';
import defiris from './abi/defiris';
import logo from './public/logo.png';
import Navbar from './Components/Navbar/Navbar';

function hexToInt(hexstring) {
  return parseInt(hexstring, 16);
}

const DAI_IMAGE = 'https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png';
const USDC_IMAGE = 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=010';
const AAVE_IMAGE = 'https://cryptologos.cc/logos/aave-aave-logo.png';
const COMPOUND_IMAGE = 'https://cryptologos.cc/logos/compound-comp-logo.png';
const TETHER_IMAGE = 'https://cryptologos.cc/logos/tether-usdt-logo.png';
const MPH_IMAGE = 'https://88mph.app/docs/img/88mph-logo-dark.png';

const DAI = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const USDC = '0x1613beB3B2C4f22Ee086B2b38C1476A3cE7f78E8';
const DEFIRIS = '0x998abeb3E57409262aE5b751f60747921B33613E';

function Pool() {
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

  async function getDefirisContract() {
    const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
    // const signer = await provider.getSigner();
    const defirisContract = new ethers.Contract(DEFIRIS, defiris, provider);
    return defirisContract;
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

  async function approveUsdc() {
    const uc = await getUsdcContract();
    const res = await uc.populateTransaction.approve(DEFIRIS, 1000000000);
    res.from = await getAccount();
    res.chainId = 31337;
    console.log(res);
    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [res],
    });
  }

  async function approveDai() {
    const dc = await getDaiContract();
    const res = await dc.populateTransaction.approve(DEFIRIS, 1000000000);
    res.from = await getAccount();
    res.chainId = 31337;
    console.log(res);
    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [res],
    });
  }

  async function depositUsdc() {
    const dc = await getDefirisContract();
    const res = await dc.populateTransaction.depositVariable(1000000000);
    res.from = await getAccount();
    res.gasLimit = 1000000;
    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [res],
    });
  }

  async function depositDai() {
    const dc = await getDefirisContract();
    const res = await dc.populateTransaction.depositFixed(1000000000);
    res.from = await getAccount();
    res.gasLimit = 1000000;
    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [res],
    });
  }

  async function withdraw() {
    const dc = await getDefirisContract();
    const res = await dc.populateTransaction.withdraw();
    res.from = await getAccount();
    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [res],
    });
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
      alert('Please use Metamask to use this application');
    }
  }, []);

  return (

    <div className="Defiris">
      <Navbar />

      <section className="container is-small">
        <div className="columns">
          <div className="column" />
          <div className="column" />
          <div className="column">
            <figure className="image is-4by4">
              <img alt="defiris logo" src={logo} />
            </figure>

          </div>
          <div className="column" />
          <div className="column" />
        </div>

      </section>
      <div className="container is-fullheight">
        <h1 className="title is-12">
          Your address:
          {' '}
          {address}
        </h1>

        <div className="pool columns">
          <div className="column" />

          <div className="column">

            <div className="box">
              <h1 className="title is-12">
                Your coins:
              </h1>
              <div className="section is-small">
                <div className="coins columns">
                  <div className="column">
                    <figure className="image is-48x48">
                      <img src={DAI_IMAGE} alt="dai" />
                    </figure>
                  </div>
                  <div className="column"><strong>DAI</strong></div>
                  <div className="column">
                    {' '}
                    {daiBalance / 1e6}
                    {' '}
                  </div>
                </div>
              </div>

              <div className="section is-small">
                <div className="coins columns">
                  <div className="column">
                    <figure className="image is-48x48">
                      <img src={USDC_IMAGE} alt="dai" />
                    </figure>
                  </div>
                  <div className="column"><strong>USDC</strong></div>
                  <div className="column">
                    {' '}
                    {usdcBalance / 1e6}
                    {' '}
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="column">

            <div className="box">
              <h1 className="title is-7">
                Pools
              </h1>
              <div className="section is-small">
                <div className="coins columns">
                  <div className="column">
                    <figure className="image is-48x48">
                      <img src={MPH_IMAGE} alt="88mph logo" />
                    </figure>
                  </div>
                  <div className="column"><strong>DAI via Aave</strong></div>
                  <div className="column">
                    APY 5.9% (fixed)
                  </div>
                  <div className="column">
                    <button className="button is-small is-black" onClick={() => approveDai()}>Approve</button>
                  </div>
                  <div className="column">
                    <button className="button is-small is-black" onClick={() => depositDai()}>Deposit</button>
                  </div>
                  <div className="column">
                    <button className="button is-small is-black" onClick={() => withdraw()}>Withdraw</button>
                  </div>
                </div>
              </div>

              <div className="section is-small">
                <div className="coins columns">
                  <div className="column">
                    <figure className="image is-48x48">
                      <img src={COMPOUND_IMAGE} alt="dai" />
                    </figure>
                  </div>
                  <div className="column"><strong>USDC</strong></div>
                  <div className="column">
                    APY 10% (variable)
                  </div>
                  <div className="column">
                    <button className="button is-small is-black" onClick={() => approveUsdc()}>Approve</button>
                  </div>
                  <div className="column">
                    <button className="button is-small is-black" onClick={() => depositUsdc()}>Deposit</button>
                  </div>
                  <div className="column">
                    <button className="button is-small is-black" onClick={() => withdraw()}>Withdraw</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

      <section className="section is-small">
        <p>
          Build by Hugo Roussel for ETHGlobal HackMoney 2021
        </p>
      </section>

    </div>
  );
}

export default Pool;
