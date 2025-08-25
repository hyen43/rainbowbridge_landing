import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>무지개다리</h1>
          <span>🌈</span>
        </div>
        <nav className="nav">
          <a href="#features">서비스 소개</a>
          <a href="#process">이용 방법</a>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfaztDSwr6Fs2YNSx2RdmCV5SLPVku3WFQhST10HfVszCeDFA/viewform?usp=sharing&ouid=116485252378500087935"
            className="download-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            출시 알림 신청
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;