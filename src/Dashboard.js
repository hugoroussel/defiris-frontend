/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-filename-extension */
import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import PoolBox from './Components/PoolBox/PoolBox';
import logo from './public/logo.png';
import Navbar from './Components/Navbar/Navbar';

function Dashboard() {
  // const DAI_IMAGE = 'https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png';
  // const USDC_IMAGE = 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=010';
  const AAVE_IMAGE = 'https://cryptologos.cc/logos/aave-aave-logo.png';
  const COMPOUND_IMAGE = 'https://cryptologos.cc/logos/compound-comp-logo.png';
  // const TETHER_IMAGE = 'https://cryptologos.cc/logos/tether-usdt-logo.png';
  const MPH_IMAGE = 'https://88mph.app/docs/img/88mph-logo-dark.png';
  // const ELEMENT_IMAGE = 'https://uploads-ssl.webflow.com/60b6dce67afe97711b72705a/60b6dd492ca92029837cea9a_element-logo.svg';

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
        <div className="columns">
          <div className="column" />
          <div className="column is-two-thirds">

            <h1 className="title">Fixed To Variable</h1>
            <hr />
            <PoolBox coin1Image={MPH_IMAGE} protocolImage={AAVE_IMAGE} coin1="Usdc" coin2="Dai" protocol="Compound" />
            <PoolBox coin1Image={MPH_IMAGE} protocolImage={COMPOUND_IMAGE} coin1="Usdc" coin2="Dai" protocol="Compound" />
            <h1 className="title">Variable to Variable</h1>
            <hr />
            <Link to="/aave" className="poolbox box">
              <div className="">
                <div className="columns" style={{ alignItems: 'center' }}>
                  <div className="column is-3">
                    <figure className="image is-96x96">
                      <img src={AAVE_IMAGE} alt="coin1" />
                    </figure>
                  </div>

                  <center>
                    <div className="title column">
                      Aave Pool, Dai, Gusd, Usdc, Usdt, Busd
                    </div>
                  </center>
                </div>
              </div>
            </Link>

            <Link to="/compound" className="poolbox box">
              <div className="">
                <div className="columns" style={{ alignItems: 'center' }}>
                  <div className="column is-3">
                    <figure className="image is-96x96">
                      <img src={COMPOUND_IMAGE} alt="coin1" />
                    </figure>
                  </div>

                  <center>
                    <div className="title column">
                      Compound Pool, Dai, Usdc, Tusd
                    </div>
                  </center>
                </div>
              </div>
            </Link>

            <Link to="/axc" className="poolbox box">
              <div className="">
                <div className="columns" style={{ alignItems: 'center' }}>
                  <div className="column is-2">
                    <figure className="image is-96x96">
                      <img src={AAVE_IMAGE} alt="coin1" />
                    </figure>
                  </div>
                  <figure className="image is-96x96">
                    <img src={COMPOUND_IMAGE} alt="coin1" />
                  </figure>

                  <center>
                    <div className="title column">
                      &nbsp;&nbsp;&nbsp;&nbsp;Aave versus Compound
                    </div>
                  </center>
                </div>
              </div>
            </Link>

            {/*
            <h1 className="title">Create</h1>
            <hr />
            <Link to="/create" className="poolbox box">
              <div className="">
                <div className="columns" style={{ alignItems: 'center' }}>
                  <div className="column" />
                  <div className="column">
                    <h1 className="title is-12">
                      +

                    </h1>
                  </div>
                  <div className="column" />
                </div>
              </div>
            </Link>
            */}

          </div>
          <div className="column" />
        </div>
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
