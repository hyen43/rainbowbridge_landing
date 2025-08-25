import React from 'react';
import './Process.css';

const Process: React.FC = () => {
  return (
    <section id="process" className="process">
      <div className="container">
        <h2 className="section-title">이용 방법</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>앱 다운로드 및 시작</h3>
              <p>무지개다리 앱을 다운로드하고<br />반려동물 정보를 등록해주세요</p>
            </div>
          </div>
          <div className="step-connector">→</div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>매일 질문 받기</h3>
              <p>49일 동안 매일 하나씩<br />특별한 질문이 전달됩니다</p>
            </div>
          </div>
          <div className="step-connector">→</div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>추억 기록하기</h3>
              <p>질문에 답하며 소중한 추억을<br />하나씩 기록해 나가세요</p>
            </div>
          </div>
          <div className="step-connector">→</div>
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>하늘나라 모습 만들기</h3>
              <p>반려동물이 행복하게 지내는<br />하늘나라 모습을 상상해보세요</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;