'use client';
import React from 'react';
import HomePageAnimation from '@/animation/homePage/data';
import Lottie from 'react-lottie';

const HomePage = () => {
  return (
    <div>
      <Lottie
        options={{
          animationData: HomePageAnimation,
          rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
        }}
      />
    </div>
  );
};

export default HomePage;
