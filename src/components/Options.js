import './Options.scss';
import React from 'react';
import cardpicOne from '../img/hervest-cardpic-1.svg';
import cardpicTwo from '../img/hervest-cardpic-2.svg';
import cardpicThree from '../img/Hervest-cardpic-3.svg';

const Options = () => {
  return (
    <div className='option-container'>
      <div className='option-card'>
        <div className='text-box'>
          <h4>Create a savings plan</h4>
          <p>Earn up to 12%</p>
        </div>

        <div className='card-icon'>
          <img src={cardpicOne} alt='hervest-pic' />
        </div>
      </div>
      <div className='option-card'>
        <div className='text-box'>
          <h4>Invest in a Female Farmer</h4>
          <p>Get up to 25% returns per annum</p>
        </div>

        <div className='card-icon'>
          <img src={cardpicTwo} alt='hervest-pic' />
        </div>
      </div>
      <div className='option-card'>
        <div className='text-box'>
          <h4>Invite your girls to HerVest</h4>
          <p>Share your girl code</p>
          <div className='share-wrapper'>
            <div className='pink-box'>
              <p>HG7FIB</p>
            </div>
            <div className='share-text'>
              <p>Share</p>
            </div>
          </div>
        </div>

        <div className='card-icon'>
          <img src={cardpicThree} alt='hervest-pic' />
        </div>
      </div>
    </div>
  );
};

export default Options;
