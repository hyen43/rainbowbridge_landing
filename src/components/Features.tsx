import React from 'react';
import './Features.css';

const Features: React.FC = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title">당신의 애도 여정을 함께 걸어갑니다</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">💌</div>
            <h3>49일간의 치유 질문</h3>
            <p>
              "오늘 가장 그리운 추억은 무엇인가요?"<br />
              "함께 했던 가장 행복한 순간을 기억해 보세요"<br />
              매일 다른 질문을 통해 억눌린 감정을 자연스럽게<br />
              표현하고, 소중한 추억을 차근차근 정리해 나갈 수 있습니다.<br />
              <strong>혼자가 아닌, 함께하는 애도의 시간을 만들어 드립니다.</strong>
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">☁️</div>
            <h3>평안한 하늘나라 만들기</h3>
            <p>
              반려동물이 더 이상 아프지 않고<br />
              자유롭게 뛰노는 모습을 상상해 보세요.<br />
              좋아했던 간식, 장난감과 함께<br />
              행복한 하늘나라에서의 일상을 그려보며<br />
              <strong>죄책감 대신 따뜻한 그리움으로 기억할 수 있습니다.</strong>
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🕊️</div>
            <h3>건강한 이별, 새로운 시작</h3>
            <p>
              급작스럽게 찾아온 이별 앞에서<br />
              제대로 애도할 시간도 없이 일상으로 돌아가야 했나요?<br />
              49일이라는 충분한 시간 동안<br />
              슬픔을 온전히 느끼고, 추억을 정리하며<br />
              <strong>사랑했던 기억은 간직한 채 새로운 일상을 준비하세요.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;