import React from 'react';
import {Link} from 'react-router-dom';
import Human from '../../images/human-standing.svg';

export default function LandingPageBanner() {
  return (
    <div className='landing__page__banner'>
          {/* SECTION */}
        <section className='landing__page__section1'>
            <div className='landing__page__section1__div1'>
              <h1>
              Let's blog
              <br/>
              anytime, anywhere
              </h1>
            <Link to='/Register' id='landing__page__section1__btn' title='Join Now'>Join Now</Link>
            </div>
        </section>
          {/* SECTION 2 */}
        <section className='landing__page__section2'>
            <div className='landing__page__section2__div1'>
              <img src={Human} alt="A person standing" className='landing__page__img__human__standing' />
            </div>
        </section>
    </div>

    )
}