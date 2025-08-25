import React from 'react';
import './Survey.css';

const Survey: React.FC = () => {
  return (
    <section id="survey" className="survey">
      <div className="container">
        <h2 className="section-title">곧 만나뵐게요</h2>
        <div className="survey-content">
          <div className="survey-text">
            <h3>출시 소식을 알려드릴게요</h3>
            <p>
              무지개다리는 반려동물을 떠나보낸 분들의 진짜 마음을<br />
              이해하고 위로할 수 있는 서비스가 되고 싶습니다.
            </p>
            <div className="survey-features">
              <div className="survey-feature">
                <span className="feature-emoji">📧</span>
                <div>
                  <h4>가장 먼저 알림받기</h4>
                  <p>서비스 출시 소식을 가장 먼저 전해드립니다</p>
                </div>
              </div>
              <div className="survey-feature">
                <span className="feature-emoji">🎁</span>
                <div>
                  <h4>특별 할인 혜택</h4>
                  <p>사전 신청자분들께는 출시 기념 특별 할인 혜택을 제공합니다</p>
                </div>
              </div>
              <div className="survey-feature">
                <span className="feature-emoji">💝</span>
                <div>
                  <h4>진심을 담은 서비스</h4>
                  <p>반려동물을 사랑하는 마음으로 정성껏 준비하고 있습니다</p>
                </div>
              </div>
            </div>
            <p className="survey-cta">
              <strong>간단한 이메일 주소만 입력하세요.</strong><br />
              출시 소식을 가장 먼저 알려드립니다.
            </p>
          </div>
          <div className="survey-form">
            <div className="form-container">
              <h4>출시 알림 신청하기</h4>
              <p>이메일 주소를 남겨주시면 서비스 출시 소식을 전해드립니다</p>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfaztDSwr6Fs2YNSx2RdmCV5SLPVku3WFQhST10HfVszCeDFA/viewform?usp=sharing&ouid=116485252378500087935"
                className="survey-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                📧 출시 알림 신청하기
              </a>
              <p className="privacy-note">
                이메일 주소는 출시 알림 목적으로만 사용되며,<br />
                마케팅 수신 거부 시 즉시 삭제됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Survey;