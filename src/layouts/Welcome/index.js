import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner1 from './Banner1';
import ValuesSection from './ValuesSection';
import TeamSection from './TeamSection';
import ContentSection from './ContentSection';
import HeaderSection from './Header';
import FooterSection from './FooterSection';
import Banner2 from './Banner2';
import Banner3 from './Banner3';
import Carosul2 from './Carosul2/index.js';
import Carosul3 from './Carosul3';

const benefits = [
  'Competitive salaries',
  'Flexible work hours',
  '30 days of paid vacation',
  'Annual team retreats',
  'Benefits for you and your family',
  'A great work environment',
];

function Welcome() {
  return (
    <div className="bg-gray-900">
      <HeaderSection />
      <main className="isolate">
        <Banner1 />
        <Banner2 />
        {/* <ContentSection /> */}
        <Banner3 />
        {/* <ValuesSection /> */}
        {/* <TeamSection /> */}
        <Carosul2 />
        <Carosul3 />
      </main>
      <FooterSection />
    </div>
  );
}

export default Welcome;
