import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-subtitle">IT Engineer / Developer</p>
          <h1 className="hero-title">
            <span className="hero-title-line">シンプルに、</span><br />
            <span className="hero-title-line">価値を創る。</span>
          </h1>
          <p className="hero-description">
            テクノロジーの力で、複雑な課題をシンプルに解決し、<br/>
            使いやすく直感的な体験を形にします。
          </p>
        </div>
        
        {/* Decorative background elements */}
        <div className="deco-shape deco-circle"></div>
        <div className="deco-shape deco-square"></div>
        <div className="deco-shape deco-triangle"></div>
      </div>
    </section>
  );
};

export default Hero;
