import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Item from './Item';
import './PlansComponent.scss';

export default class PlansComponent extends Component {
  render() {
    var settings = {
      arrows: false,
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      focusOnSelect: true,
      slidesToScroll: 1,
      initialSlide: 0,

      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
      ],
    };
    return (
      <div className='plans-container'>
        <div className='plans-header'>
          <h2> Watch your plans</h2>
          <p>A goal without a plan is just a wish</p>
        </div>
        <div className='carousel-container'>
          <Slider {...settings}>
            <Item>One</Item>
            <Item>Two</Item>
            <Item>Three</Item>
            <Item>Three</Item>
            <Item>Three</Item>
            <Item>Three</Item>
          </Slider>
        </div>
      </div>
    );
  }
}
