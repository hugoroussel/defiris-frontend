/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-filename-extension */
import './App.css';
import React from 'react';
import PoolBox from './Components/PoolBox/PoolBox';
import logo from './public/logo.png';
import Navbar from './Components/Navbar/Navbar';

function Dashboard() {
  const DAI_IMAGE = 'https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png';
  // const USDC_IMAGE = 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=010';
  const AAVE_IMAGE = 'https://cryptologos.cc/logos/aave-aave-logo.png';
  const COMPOUND_IMAGE = 'https://cryptologos.cc/logos/compound-comp-logo.png';
  // const TETHER_IMAGE = 'https://cryptologos.cc/logos/tether-usdt-logo.png';
  const MPH_IMAGE = 'https://88mph.app/docs/img/88mph-logo-dark.png';
  const ELEMENT_IMAGE = 'https://uploads-ssl.webflow.com/60b6dce67afe97711b72705a/60b6dd492ca92029837cea9a_element-logo.svg';

  return (
    <div className="Defiris">
      <Navbar />

      <section className="section is-small">
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
      <div className="container">

        <h1 className="title">Fixed To Variable</h1>
        <PoolBox coin1Image={COMPOUND_IMAGE} protocolImage={MPH_IMAGE} coin1="usdc" coin2="dai" protocol="Aave" />
        <PoolBox coin1Image={AAVE_IMAGE} protocolImage={MPH_IMAGE} coin1="usdc" coin2="dai" protocol="Aave" />
        <PoolBox coin1Image={COMPOUND_IMAGE} protocolImage={ELEMENT_IMAGE} coin1="usdc" coin2="dai" protocol="Aave" />
        <PoolBox coin1Image={AAVE_IMAGE} protocolImage={ELEMENT_IMAGE} coin1="usdc" coin2="dai" protocol="Aave" />
        <h1 className="title">Variable to Variable</h1>
        <PoolBox coin1Image={AAVE_IMAGE} coin2Image={DAI_IMAGE} protocolImage={COMPOUND_IMAGE} coin1="usdc" coin2="dai" protocol="Aave" />

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
