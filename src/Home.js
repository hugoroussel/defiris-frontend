/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-filename-extension */
import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './public/logo_transparent.png';

function App() {
  return (
    <div className="Defiris">

      <section className="section is-small">
        <h1 className="title" />
      </section>

      <div className="container">

        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            <div className="tile">

              <div className="tile is-parent is-vertical">
                <article className="el tile is-child notification is-light">
                  <br />
                  <br />
                  <center>
                    <p className="title">📈📉</p>
                    <p className="title">Bet on Interest</p>
                    <p className="subtitle">Short or long interests of different lending pools such as Aave, Compound</p>
                  </center>
                </article>

                <article className="el tile is-child notification is-light">
                  <br />
                  <br />
                  <center>
                    <p className="title">🔀</p>
                    <p className="title">Receive multiple assets</p>
                    <p className="subtitle">Get payed in multiple assets. Get exposed to interest of assets you do not own.</p>
                  </center>
                </article>
              </div>

              <div className="tile is-parent">
                <article className="el tile is-child notification is-light">
                  <br />
                  <br />
                  <center>
                    <p className="title">Defiris</p>
                    <p className="subtitle">Interest Rate Swaps Made Easy</p>
                    <br />
                    <Link to="/dashboard" className="button is-dark">Launch Application</Link>
                    <br />
                    <figure className="image is-4by4">
                      <img alt="defiris logo" src={logo} />
                    </figure>
                  </center>
                </article>
              </div>
            </div>

            <div className="tile is-parent">
              <article className="el tile is-child notification is-light">
                <center>
                  <p className="title">🎚️</p>
                  <p className="title">Leverage your yield</p>
                  <p className="subtitle">Bet on pools with more assets</p>
                </center>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="el tile is-child notification is-light">
              <h1 className="dtitle">Protocols</h1>
              <div classNameName="content">
                <br />
                <br />
                <center>
                  <figure className="image is-128x128">
                    <img src="https://88mph.app/docs/img/88mph-logo-dark.png" alt="88mph logo" />
                  </figure>
                  <br />
                  <br />
                  <br />
                  <br />
                  <figure className="image is-128x128">
                    <img src="https://cryptologos.cc/logos/aave-aave-logo.png" alt="88mph logo" />
                  </figure>
                  <br />
                  <br />
                  <br />
                  <br />
                  <figure className="image is-128x128">
                    <img src="https://cryptologos.cc/logos/compound-comp-logo.png" alt="88mph logo" />
                  </figure>
                </center>
              </div>
            </article>
          </div>
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

export default App;
