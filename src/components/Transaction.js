import React from 'react';
import arc from '../img/arch.svg';
import smallArc from '../img/small-arc.svg';
import faintArc from '../img/faint-arc.svg';

import './Transaction.scss';

const Transaction = () => {
  return (
    <div className='finance-container'>
      <div className='pink-container'>
        <div className='pink-box'>
          <div className='semi-arc'>
            <img src={arc} alt='arc' />
          </div>
          <div className='small-arc'>
            <img src={smallArc} alt='smallarc' />
          </div>
          <div className='faint-arc'>
            <img src={faintArc} alt='faintarc' />
          </div>
          <div className='financial-details'>
            <p>Available Balance </p>
            <h2> ₦1,063,345.04</h2>
          </div>
          <div className='financial-details'>
            <p>Impact Investments </p>
            <h2> ₦1,007,345.04</h2>
          </div>
          <div className='financial-details'>
            <p>Total Savings </p>
            <h2> ₦2,007,345.04</h2>
          </div>
          <div className='financial-details'>
            <p>Total returns </p>
            <h2> ₦1,223,456.04</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
