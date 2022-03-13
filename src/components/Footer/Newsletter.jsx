import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__opensans">And Never Miss Latest Updates</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" name="" id="" placeholder='Enter Your Email Address' />
      <div type="button"className="custom__button">Subscribe</div>
    </div>
  </div>
);

export default Newsletter;
