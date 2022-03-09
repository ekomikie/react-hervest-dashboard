import React from 'react';
import './Item.scss';
import piggybank from '../img/piggy-bank.svg';

const Item = () => {
  return (
    <div className='item-card'>
      <div className='item-box'>
        <div className='item-icon-box'>
          <img src={piggybank} alt='piggybank' />
        </div>
        <div className='item-text'>
          <p className='save-text'>Saving for rainy days</p>
        </div>
      </div>
      <h3 className='amount-figure'>N400,000</h3>
      <div className='grey-line'>
        <div className='green-line'></div>
      </div>
    </div>
  );
};

export default Item;
