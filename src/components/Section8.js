import React from 'react';
import '../styles/section8.css';

const Section8 = () => {
    return (
        <section id="section8" className="section8">
            <div className="sec8-wrap">
                {/* 첫 번째 항목 */}
                <div className="sec8-check-item">
                    <div className="sec8-flex">
                        <i className="ri-checkbox-circle-line sec8-main-color sec8-fs-30 sec8-pr-10 sec8-lh-1"></i>
                        <b className="sec8-fs-22">각종 의류</b>
                    </div>
                    <div className="sec8-divider"></div>
                    <div className="sec8-text">
                        티셔츠, 조끼, 자켓, 패딩, 수영복, 스키복, 내복, 속옷, 양말 등
                    </div>
                </div>

                {/* 두 번째 항목 */}
                <div className="sec8-check-item">
                    <div className="sec8-flex">
                        <i className="ri-checkbox-circle-line sec8-main-color sec8-fs-30 sec8-pr-10 sec8-lh-1"></i>
                        <b className="sec8-fs-22">각종 신발</b>
                    </div>
                    <div className="sec8-divider"></div>
                    <div className="sec8-text">
                        운동화, 구두, 슬리퍼 등
                    </div>
                </div>

                {/* 세 번째 항목 */}
                <div className="sec8-check-item">
                    <div className="sec8-flex">
                        <i className="ri-checkbox-circle-line sec8-main-color sec8-fs-30 sec8-pr-10 sec8-lh-1"></i>
                        <b className="sec8-fs-22">각종 잡화</b>
                    </div>
                    <div className="sec8-divider"></div>
                    <div className="sec8-text">
                        가방, 지갑, 모자, 넥타이, 벨트, 스카프, 목도리, 장갑, 담요, 인형 등
                    </div>
                </div>

                {/* 네 번째 항목 */}
                <div className="sec8-check-item">
                    <div className="sec8-flex">
                        <i className="ri-checkbox-circle-line sec8-main-color sec8-fs-30 sec8-pr-10 sec8-lh-1"></i>
                        <b className="sec8-fs-22">이불류</b>
                    </div>
                    <div className="sec8-divider"></div>
                    <div className="sec8-text">
                        이불(극세사,차렵), 침대 커버, 소파 커버, 커튼, 카페트
                    </div>
                </div>

                {/* 하단 안내 문구 */}
                <div className="sec8-ta-r">
                    <div className="sec8-fs-14 sec8-gray">
                        *위 품목 모두 성인, 아동 구분 없이 수거 가능합니다.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section8;