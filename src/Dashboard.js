/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-filename-extension */
import './App.css';
import React from 'react';
import PoolBox from './Components/PoolBox/PoolBox';

function Dashboard() {
  const DAI_IMAGE = 'https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png';

  return (
    <div className="Defiris">

      <section className="section is-small">
        <h1 className="title">Defiris</h1>
      </section>
      <div className="container">

        <PoolBox coin1="usdc" coin2="dai" protocol="Aave" />
        <PoolBox coin1="usdc" coin2="dai" protocol="Aave" />
        <PoolBox coin1="usdc" coin2="dai" protocol="Aave" />
        <PoolBox coin1="usdc" coin2="dai" protocol="Aave" />
        <PoolBox coin1="usdc" coin2="dai" protocol="Aave" />
        <PoolBox coin1="usdc" coin2="dai" protocol="Aave" />

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
