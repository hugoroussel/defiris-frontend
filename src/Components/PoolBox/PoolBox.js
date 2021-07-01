/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';

function Box(props) {
  return (

    <div className="poolbox box">
      <div className="columns" style={{ alignItems: 'center' }}>

        <div className="column is-1">
          <figure className="image is-64x64">
            <img src={props.protocolImage} alt="coin1" />
          </figure>
        </div>

        <div className="column is-1">
          <figure className="image is-64x64">
            <img src={props.coin1Image} alt="coin2" />
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
          <Link to="/pool" className="button is-black is-large">Access Pool</Link>
        </div>
      </div>
    </div>
  );
}

export default Box;
