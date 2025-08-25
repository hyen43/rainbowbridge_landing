import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>무지개다리</h3>
            <p>반려동물과의 소중한 추억을<br />영원히 간직할 수 있도록</p>
          </div>
          <div className="footer-section">
            <h4>서비스</h4>
            <ul>
              <li><a href="#features">49일 질문</a></li>
              <li><a href="#features">하늘나라 만들기</a></li>
              <li><a href="#process">이용방법</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>출시 알림</h4>
            <div className="download-links">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfaztDSwr6Fs2YNSx2RdmCV5SLPVku3WFQhST10HfVszCeDFA/viewform?usp=sharing&ouid=116485252378500087935"
                className="download-link" 
                rel="noopener noreferrer" 
                target="_blank"
              >
                📧 출시 알림 신청
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 무지개다리. 모든 권리 보유.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;