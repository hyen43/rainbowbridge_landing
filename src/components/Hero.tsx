import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            반려동물과의 마지막 인사,<br />
            혼자 감당하지 마세요
          </h1>
          <p className="hero-subtitle">
            49일간의 특별한 질문과 추억 만들기를 통해<br />
            건강한 애도를 도와드립니다.<br />
            <strong>출시 소식을 가장 먼저 받아보세요.</strong>
          </p>
          <div className="hero-buttons">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfaztDSwr6Fs2YNSx2RdmCV5SLPVku3WFQhST10HfVszCeDFA/viewform?usp=sharing&ouid=116485252378500087935"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              출시 알림 신청하기
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="rainbow-bridge">
            <span className="rainbow">🌈</span>
            <div className="pet-memorial">
              <span className="paw">🐾</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;