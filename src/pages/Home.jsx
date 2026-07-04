import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServiceTriad from '../components/home/ServiceTriad';
import WhyRPX from '../components/home/WhyRPX';
import StatsSection from '../components/home/StatsSection';
import Timeline from '../components/home/Timeline';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceTriad />
      <StatsSection />
      <WhyRPX />
      <Timeline />
      <CTASection />
    </>
  );
}