/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

function Box(props) {
  return (

    <div className="box">
      <div className="columns">

        <div className="column is-1">
          <figure className="image is-64x64">
            <img src="https://cryptologos.cc/logos/aave-aave-logo.png" alt="Wassa" />
          </figure>
        </div>

        <div className="column is-1">
          <figure className="image is-64x64">
            <img src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=010" alt="Wassa" />
          </figure>
        </div>

        <div className="column is-1">
          <figure className="image is-64x64">
            <img src="https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png" alt="Wassa" />
          </figure>
        </div>
        <center>
          <div className="title column">
            Pool
            {` ${props.coin1}`}
            {' '}
            versus
            {` ${props.coin2}`}
            {' '}
            in
            {` ${props.protocol}`}
          </div>

        </center>
        <div className="column">
          <button className="button is-success is-large">Access Pool</button>
        </div>
      </div>
    </div>
  );
}

export default Box;
