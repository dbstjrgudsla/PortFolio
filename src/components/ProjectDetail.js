import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetail.css';

// 미디어 파일 import
import coinAlarmImage from '../pictures/coinalarm.png';
import ttoonVideo from '../video/ttoon_video.mov';

// CoinAlarm 프로젝트 이미지들
let architectureImage, serviceFlowImage;
try {
  architectureImage = require('../pictures/architecture.png');
} catch (e) {
  architectureImage = null;
}
try {
  serviceFlowImage = require('../pictures/service_flow.png');
} catch (e) {
  serviceFlowImage = null;
}

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [mediaLoaded, setMediaLoaded] = useState(false);
  const [mediaError, setMediaError] = useState(false);

  // 페이지 로드 시 스크롤을 맨 위로
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMediaLoad = useCallback(() => {
    setMediaLoaded(true);
  }, []);

  const handleMediaError = useCallback(() => {
    setMediaError(true);
  }, []);

  const projectsData = {
    'dongne': {
      title: '동네형',
      subtitle: '트레이너와 회원간 PT를 위한 매칭 웹서비스',
      projectInfo: {
        name: '동네형',
        duration: '2023.12 ~ 2024.03',
        members: '5명',
        platform: '웹 서비스'
      },
      coreFeatures: [
        '지역 기반 트레이너 검색 및 필터링',
        '실시간 채팅 시스템으로 트레이너-회원 소통',
        '리뷰 및 평점 시스템으로 신뢰도 향상',
        '트레이너 프로필 및 경력 관리'
      ],
      architecture: 'React 프론트엔드 - REST API - Node.js 백엔드 - MySQL 데이터베이스',
      serviceFlow: '회원가입/로그인 → 지역 설정 → 트레이너 검색 → 프로필 확인 → 채팅 상담 → PT 진행 → 리뷰 작성',
      myRole: [
        '메인페이지 개발',
        '카카오 지도를 활용한 지도 API 활용으로 검색 헬스장 위치 조회 및 검색 기능 구현',
        '친구 신청 및 id 기반 유저 검색'
      ],
      troubleShooting: {
        title: '트러블 슈팅',
        cases: [
          {
            title: '1. 카카오 지도 API 연동 오류',
            details: {
              background: '카카오 지도 API 키 인증 및 CORS 정책으로 인한 API 호출 실패',
              solution: '도메인 등록 및 API 키 재발급, 프록시 서버를 통한 CORS 우회 처리',
              comparison: 'API 호출 실패로 지도 기능 미작동 → 정상적인 지도 서비스 및 헬스장 위치 검색 기능 제공',
              learning: 'API 키 관리의 중요성과 CORS 정책 이해, 프록시 서버를 통한 보안 정책 우회 방법 학습'
            }
          }
        ]
      },
      technologies: ['REST API', 'React', 'Kakao Map API'],
      color: '#2563eb'
    },
    'ttoon': {
      title: 'TTOON',
      subtitle: '일기를 네컷만화로 바꾸는 TTOON',
      projectInfo: {
        name: 'TTOON',
        duration: '2024.03 ~ 2024.06',
        members: '6명',
        platform: '웹 서비스'
      },
      coreFeatures: [
        '사용자 일기 입력',
        '등장인물 설정하면 네컷그림으로 나오고 스타일 설정가능',
        '친구끼리 피드 소통 및 친구기능',
        '좋아요 기능, 팔로우 팔로잉 기능',
        '만화저장 기능'
      ],
      architecture: 'React 프론트엔드 - REST API - Spring Boot 백엔드 - AI 이미지 생성 모델 - AWS S3 스토리지',
      serviceFlow: '일기 작성 → AI 텍스트 분석 → 감정 및 키워드 추출 → 네컷 만화 생성 → 스타일 선택 → 결과 확인 → 저장/공유',
      myRole: [
        '백엔드 API diagram 같이 설계하고 반응형 웹, 디자인 활용 및 axios와 tailwind css로 개발',
        '소셜로그인 개발 카카오, 구글',
        'S3 Cloudfront, Route53 배포',
        '일기 작성 페이지 및 SNS 형식으로 토큰별 id 값으로 일기 조회 및 친구 신청, 좋아요 기능 등 개발'
      ],
      troubleShooting: {
        title: '트러블 슈팅',
        cases: [
          {
            title: '1. axios 백엔드 통신 오류',
            details: {
              background: 'multiform 형식으로 데이터 전송 시 데이터 형식 차이로 인한 통신 오류',
              solution: 'FormData 객체 사용 및 Content-Type 헤더 설정으로 해결',
              comparison: '데이터 전송 실패로 이미지 업로드 불가 → 정상적인 파일 업로드 및 데이터 통신',
              learning: 'HTTP 요청 시 데이터 형식의 중요성과 FormData 객체 활용법 습득'
            }
          },
          {
            title: '2. AWS CloudFront 배포 문제',
            details: {
              background: 'SPA 라우팅 시 404 오류 발생 및 캐시 무효화 문제',
              solution: 'CloudFront 에러 페이지 설정 및 캐시 정책 수정으로 해결',
              comparison: '페이지 새로고침 시 404 오류 → 모든 라우팅에서 정상적인 페이지 로드',
              learning: 'SPA 배포 시 서버 설정의 중요성과 CDN 캐시 정책 관리 방법 학습'
            }
          }
        ]
      },
      technologies: ['AWS S3', 'CloudFront', 'Route53', 'REST API', 'React', 'Tailwind CSS'],
      color: '#2563eb'
    },
    'autoalarm': {
      title: 'CoinAlarm',
      subtitle: '실시간 코인 예약알림 서비스',
      projectInfo: {
        name: 'CoinAlarm',
        duration: '2개월 (2025.01 ~ 2025.02)',
        members: '2명',
        theme: '하이브리드 클라우드를 이용한 메시지 이중화'
      },
      architecture: {
        title: '아키텍처',
        description: '온프레미스에 구축한 쿠버네티스 클러스터와 AWS EKS를 이중화해서 구현하며, CI/CD 파이프라인을 통해 자동 배포 시스템을 구축했습니다. WAS 서버는 Redis를 통해 인증번호를 주고 로그인을 할 수 있으며, KAFKA를 통해서 사용자의 알림정보를 전달해주고 알림메세지를 생성합니다. 프로메테우스 & 그라파나를 통해 온프레미스 클러스터에 파드와 내부 서버들의 오류를 모니터링합니다.'
      },
      myRole: {
        title: '나의 역할',
        details: [
          'React 기반 프론트엔드 개발',
          '온프레미스 Kubernetes 클러스터 구축 및 AWS EKS와의 하이브리드 클라우드 설계',
          'Prometheus + Grafana 모니터링 시스템 구축',
          'HAProxy를 이용한 로드밸런서 구성으로 고가용성 달성',
          'CI/CD 파이프라인 구축'
        ]
      },
      troubleShooting: {
        title: '트러블 슈팅',
        cases: [
          {
            title: '1. SSL 인증서 관련 문제',
            details: {
              background: 'HTTPS 환경에서 WebSocket 연결 시 SSL 인증서 불일치로 인한 연결 실패 발생',
              solution: 'Let\'s Encrypt를 이용한 무료 SSL 인증서 발급 및 자동 갱신 설정, Ingress Controller에 TLS 설정 적용',
              comparison: 'HTTP 환경에서만 동작 → HTTPS 환경에서 안전한 WebSocket 연결 지원',
              learning: 'HTTPS 환경에서의 WebSocket 보안 연결 구성 방법과 SSL 인증서 관리의 중요성 학습'
            }
          },
          {
            title: '2. 제한된 포트 환경 문제',
            details: {
              background: '학원 데이터센터 환경에서 외부 접근 가능한 포트가 10개로 제한되어 다수의 마이크로서비스 노출에 어려움',
              solution: 'Ingress Controller를 이용한 단일 진입점 구성, 경로 기반 라우팅으로 여러 서비스를 하나의 포트로 통합',
              comparison: '각 서비스마다 별도 포트 필요 → 단일 포트(80/443)로 모든 서비스 접근 가능',
              learning: 'Ingress Controller의 활용법과 네트워크 제약 환경에서의 아키텍처 설계 능력 향상'
            }
          },
          {
            title: '3. 리소스 부족 Pod 스케줄링 실패',
            details: {
              background: '온프레미스 환경의 제한된 리소스로 인해 모든 Pod가 정상적으로 스케줄링되지 않는 문제',
              solution: 'Resource Requests/Limits 최적화, HPA(Horizontal Pod Autoscaler) 설정, 우선순위 기반 Pod 스케줄링 적용',
              comparison: '리소스 과할당으로 인한 불안정한 서비스 → 효율적인 리소스 관리로 안정적인 서비스 운영',
              learning: 'Kubernetes 리소스 관리의 중요성과 제한된 환경에서의 최적화 기법 습득'
            }
          }
        ]
      },
      githubUrl: 'https://github.com/Yoonseok-Ji/CoinAlarm-Autoever_School_Project',
      technologies: ['AWS EKS', 'Kubernetes', 'Prometheus', 'Grafana', 'React'],
      color: '#2563eb'
    }
  };

  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="project-detail">
        <div className="container">
          <h1>프로젝트를 찾을 수 없습니다.</h1>
          <button onClick={() => navigate('/')} className="back-btn">
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  const renderMedia = () => {
    // CoinAlarm에는 이미지 표시 (coinalarm.png)
    if (projectId === 'autoalarm') {
      return (
        <div className="media-container">
          <img 
            src={coinAlarmImage}
            alt="CoinAlarm 스크린샷"
            className="project-screenshot"
            onLoad={handleMediaLoad}
            onError={handleMediaError}
            loading="eager"
          />
          {(!mediaLoaded && !mediaError) && (
            <div className="media-placeholder">
              <div className="placeholder-content">
                <h3>🪙 CoinAlarm</h3>
                <p>가상화폐 알림 서비스</p>
                <small>이미지 로딩 중...</small>
              </div>
            </div>
          )}
          {mediaError && (
            <div className="media-placeholder">
              <div className="placeholder-content">
                <h3>🪙 CoinAlarm</h3>
                <p>가상화폐 알림 서비스</p>
                <small>실시간 가격 모니터링 대시보드</small>
              </div>
            </div>
          )}
        </div>
      );
    }
    
    // TTOON에는 비디오 표시 (ttoon_video.mov)
    if (projectId === 'ttoon') {
      return (
        <div className="media-container">
          <video 
            src={ttoonVideo}
            alt="TTOON 데모 비디오"
            className="project-video"
            controls
            muted
            preload="metadata"
            onLoadedData={handleMediaLoad}
            onError={handleMediaError}
          />
          {(!mediaLoaded && !mediaError) && (
            <div className="media-placeholder">
              <div className="placeholder-content">
                <h3>🎨 TTOON</h3>
                <p>AI 네컷 만화 생성기</p>
                <small>비디오 로딩 중...</small>
              </div>
            </div>
          )}
          {mediaError && (
            <div className="media-placeholder">
              <div className="placeholder-content">
                <h3>🎨 TTOON</h3>
                <p>AI 네컷 만화 생성기</p>
                <small>일기를 만화로 변환하는 데모</small>
              </div>
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="media-placeholder">
        <div className="placeholder-content">
          <h3>💻 {project.title}</h3>
          <p>{project.subtitle}</p>
          <small>프로젝트 미리보기</small>
        </div>
      </div>
    );
  };

  return (
    <div className="project-detail">
      <div className="project-detail-container">
        <button onClick={() => navigate('/')} className="back-btn">
          ← 돌아가기
        </button>

        <div className="project-hero">
          <div className="project-info">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-subtitle">{project.subtitle}</p>
            
            {/* 프로젝트 기본 정보 추가 */}
            <div className="project-basic-info">
              {projectId === 'autoalarm' && (
                <>
                  <div className="info-item">
                    <strong>인원:</strong> 2명
                  </div>
                  <div className="info-item">
                    <strong>개발기간:</strong> 2024.12 ~ 2025.02
                  </div>
                  <div className="info-item">
                    <strong>주제:</strong> 하이브리드 클라우드를 이용한 메시지 발송 이중화
                  </div>
                </>
              )}
              {projectId === 'ttoon' && (
                <>
                  <div className="info-item">
                    <strong>인원:</strong> 6명
                  </div>
                  <div className="info-item">
                    <strong>개발기간:</strong> 2024.03 ~ 2024.06
                  </div>
                  <div className="info-item">
                    <strong>주제:</strong> 일기를 네컷만화로 바꾸는 TTOON
                  </div>
                </>
              )}
              {projectId === 'dongne' && (
                <>
                  <div className="info-item">
                    <strong>인원:</strong> 5명
                  </div>
                  <div className="info-item">
                    <strong>개발기간:</strong> 2023.12 ~ 2024.03
                  </div>
                  <div className="info-item">
                    <strong>주제:</strong> 트레이너와 회원간 PT를 위한 매칭 웹서비스
                  </div>
                </>
              )}
              
              {/* GitHub 링크 */}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
                  📁 GitHub Repository
                </a>
              )}
            </div>
          </div>

          <div className="imac-mockup">
            <div className="imac-screen">
              <div className="screen-content">
                <div className="browser-bar">
                  <div className="browser-buttons">
                    <span className="btn-close"></span>
                    <span className="btn-minimize"></span>
                    <span className="btn-maximize"></span>
                  </div>
                  <div className="address-bar">
                    <span>{project.title.toLowerCase()}.com</span>
                  </div>
                </div>
                <div className="website-preview">
                  {renderMedia()}
                </div>
              </div>
            </div>
            <div className="imac-stand"></div>
            <div className="imac-base"></div>
          </div>
        </div>

        <div className="project-content">
          <div className="content-grid">
            {/* CoinAlarm 프로젝트의 새로운 구조 */}
            {projectId === 'autoalarm' && (
              <>
                {/* 아키텍처 */}
                <section className="project-section full-width">
                  <h2>{project.architecture.title}</h2>
                  <p className="section-description">{project.architecture.description}</p>
                  {architectureImage && (
                    <div className="image-container">
                      <img 
                        src={architectureImage} 
                        alt="시스템 아키텍처" 
                        className="section-image"
                      />
                    </div>
                  )}
                </section>

                {/* 서비스 플로우 */}
                <section className="project-section full-width">
                  <h2>서비스 플로우</h2>
                  {serviceFlowImage && (
                    <div className="image-container">
                      <img 
                        src={serviceFlowImage} 
                        alt="서비스 플로우" 
                        className="section-image"
                      />
                    </div>
                  )}
                </section>

                {/* 나의 역할 */}
                <section className="project-section full-width">
                  <h2>{project.myRole.title}</h2>
                  <ul className="simple-role-list">
                    {project.myRole.details.map((role, index) => (
                      <li key={index}>{role}</li>
                    ))}
                  </ul>
                </section>

                {/* 트러블 슈팅 */}
                <section className="project-section full-width">
                  <h2>{project.troubleShooting.title}</h2>
                  <div className="structured-trouble-list">
                    {project.troubleShooting.cases.map((troubleCase, index) => (
                      <div key={index} className="structured-trouble-item">
                        <h4>{troubleCase.title}</h4>
                        <div className="trouble-structure">
                          <div className="trouble-point">
                            <strong>1. 문제배경</strong>
                            <p>{troubleCase.details.background}</p>
                          </div>
                          <div className="trouble-point">
                            <strong>2. 해결방법</strong>
                            <p>{troubleCase.details.solution}</p>
                          </div>
                          <div className="trouble-point">
                            <strong>3. 이전과의 비교</strong>
                            <p>{troubleCase.details.comparison}</p>
                          </div>
                          <div className="trouble-point">
                            <strong>4. 깨달은 점</strong>
                            <p>{troubleCase.details.learning}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            )}

            {/* 다른 프로젝트들의 기존 구조 유지 */}
            {projectId !== 'autoalarm' && (
              <>
                {/* 핵심 기능 */}
                {project.coreFeatures && (
                  <section className="project-section">
                    <h2>핵심 기능</h2>
                    <ul className="features-list">
                      {project.coreFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* 아키텍처 */}
                <section className="project-section full-width">
                  <h2>아키텍처</h2>
                  <div className="architecture">
                    <p>{project.architecture}</p>
                  </div>
                </section>

                {/* 서비스 플로우 */}
                <section className="project-section full-width">
                  <h2>서비스 플로우</h2>
                  <div className="service-flow">
                    <p>{project.serviceFlow}</p>
                  </div>
                </section>

                {/* 나의 역할 */}
                {project.myRole && (
                  <section className="project-section full-width">
                    <h2>나의 역할</h2>
                    <ul className="role-list">
                      {project.myRole.map((role, index) => (
                        <li key={index}>{role}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* 트러블 슈팅 */}
                {project.troubleShooting && (
                  <section className="project-section full-width">
                    <h2>{project.troubleShooting.title}</h2>
                    <div className="structured-trouble-list">
                      {project.troubleShooting.cases.map((troubleCase, index) => (
                        <div key={index} className="structured-trouble-item">
                          <h4>{troubleCase.title}</h4>
                          <div className="trouble-structure">
                            <div className="trouble-point">
                              <strong>1. 문제배경</strong>
                              <p>{troubleCase.details.background}</p>
                            </div>
                            <div className="trouble-point">
                              <strong>2. 해결방법</strong>
                              <p>{troubleCase.details.solution}</p>
                            </div>
                            <div className="trouble-point">
                              <strong>3. 이전과의 비교</strong>
                              <p>{troubleCase.details.comparison}</p>
                            </div>
                            <div className="trouble-point">
                              <strong>4. 깨달은 점</strong>
                              <p>{troubleCase.details.learning}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </>
            )}

            {/* 사용 기술 */}
            {project.technologies && (
              <section className="project-section">
                <h2>사용 기술</h2>
                <div className="tech-stack">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
