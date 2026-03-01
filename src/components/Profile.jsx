import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <section id="about" className="section profile">
      <div className="container profile-container">
        <div className="section-header">
          <span className="section-subtitle">ABOUT ME</span>
          <h2 className="section-title">私について</h2>
        </div>
        
        <div className="profile-content">
          <div className="profile-avatar">
            {/* Using a placeholder gradient since we don't have an image, but it looks premium */}
            <div className="avatar-placeholder"></div>
          </div>
          <div className="profile-info">
            <h3 className="profile-name">
              山田 太郎 <span className="profile-name-en">Taro Yamada</span>
            </h3>
            <p className="profile-title">IT Engineer / System Developer</p>
            <p className="profile-bio">
              最新のWeb技術を活用し、ビジネス課題を解決するシステム開発を得意としています。
              「シンプルで直感的」であることをモットーに、ユーザーと開発者の両方にとって
              価値のあるプロダクト作りを目指しています。
            </p>
            <div className="profile-skills">
              <span className="skill-tag">React</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">UI/UX Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
