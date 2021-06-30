/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-filename-extension */
import './App.css';
import React from 'react';
import PoolBox from './Components/PoolBox/PoolBox';
import logo from './public/newlogo.png';

function Dashboard() {
  const DAI_IMAGE = 'https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png';
  const USDC_IMAGE = 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=010';
  const AAVE_IMAGE = 'https://cryptologos.cc/logos/aave-aave-logo.png';
  const COMPOUND_IMAGE = 'https://cryptologos.cc/logos/compound-comp-logo.png';
  const TETHER_IMAGE = 'https://cryptologos.cc/logos/tether-usdt-logo.png';

  return (
    <div className="Defiris">

      <section className="section is-small">
        <div className="columns">
          <div className="column" />
          <div className="column">
            <figure className="image">
              <img alt="defiris logo" src={logo} />
            </figure>
          </div>
          <div className="column" />
        </div>

      </section>
      <div className="container">

        <h1 className="title">Aave Pools</h1>
        <PoolBox coin1Image={USDC_IMAGE} coin2Image={DAI_IMAGE} protocolImage={AAVE_IMAGE} coin1="usdc" coin2="dai" protocol="Aave" />
        <PoolBox coin1Image={USDC_IMAGE} coin2Image={TETHER_IMAGE} protocolImage={AAVE_IMAGE} coin1="usdc" coin2="dai" protocol="Aave" />
        <PoolBox coin1Image={DAI_IMAGE} coin2Image={TETHER_IMAGE} protocolImage={AAVE_IMAGE} coin1="usdc" coin2="dai" protocol="Aave" />
        <h1 className="title">Compound Pools</h1>
        <PoolBox coin1Image={USDC_IMAGE} coin2Image={DAI_IMAGE} protocolImage={COMPOUND_IMAGE} coin1="usdc" coin2="dai" protocol="Aave" />
        <PoolBox coin1Image={USDC_IMAGE} coin2Image={DAI_IMAGE} protocolImage={COMPOUND_IMAGE} coin1="usdc" coin2="dai" protocol="Aave" />
        <PoolBox coin1Image={USDC_IMAGE} coin2Image={DAI_IMAGE} protocolImage={COMPOUND_IMAGE} coin1="usdc" coin2="dai" protocol="Aave" />

      </div>

      <section className="section is-small">
        <p>
          Build by Hugo Roussel for ETHGlobal HackMoney 2021
        </p>
      </section>

    </div>
  );
}

export default Dashboard;
