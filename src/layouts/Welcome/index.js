import React from 'react';
import Banner1 from './Banner1';
import HeaderSection from './Header';
import FooterSection from './FooterSection';
import Banner3 from './Banner3';
import JustForYou from './JustForYou';
import SpecialOfferForYou from './SpecialOfferForYou';
import BrandCollection from './BrandCollection';
import Banner0 from './Banner0';
import Collection from './Collection';
import Banner5 from './Banner5';
import Banner6 from './Banner6';

function Welcome() {
  return (
    <div className="bg-gray-900">
      <HeaderSection />
      <main className="isolate">
        <Banner0 />
        <Banner1 />
        <BrandCollection />
        <Collection />
        <Banner3 />
        <SpecialOfferForYou />
        <JustForYou />
        <Banner5 />
        <Banner6 />
      </main>
      <FooterSection />
    </div>
  );
}

export default Welcome;
