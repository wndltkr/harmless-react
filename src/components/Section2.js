import React from 'react';
import '../styles/section2.css';

const inconveniences = [
    { id: 1, imgSrc: '/files/attach/images/main/inconvenience_img1.jpg?2', number: '01', text: '20kg 이하는 방문수거신청이\n안되거나 무상 수거일때' },
    { id: 2, imgSrc: '/files/attach/images/main/inconvenience_img2.jpg', number: '02', text: '헌옷 수거함에\n직접 버리러 가야 할 때' },
    { id: 3, imgSrc: '/files/attach/images/main/inconvenience_img3.jpg', number: '03', text: '주변 헌옷 수거함\n위치를 모를때' },
    { id: 4, imgSrc: '/files/attach/images/main/inconvenience_img4.jpg', number: '04', text: '물건 버릴 양이 많아\n도움이 필요할때' },
    { id: 5, imgSrc: '/files/attach/images/main/inconvenience_img5.jpg', number: '05', text: '재활용 가능한지\n불가능한지 헷갈릴때' },
];

const Section2 = () => {
    return (
        <section id="section2" className="section section2 clearfix">
            <div className="bh_wrap">
                <div className="common_inconvenience">
                    {/* 질문 타이틀 */}
                    <div className="common_title fade-in-up" data-anim-delay="0">
                        <div className="icon">
                            <img src="/files/attach/images/main/question.png" alt="question" />
                        </div>
                        <p className="big-title">
                            이런 <span className="highlighted-text"><b>불편</b></span>을 겪으신 적 있나요?
                        </p>
                    </div>

                    {/* 카드 레이아웃 (grid) */}
                    <div className="inconvenience_container">
                        {/* 첫 번째 칸 (큰 칸) */}
                        <div className="inconvenience_wrap large-card" style={{ position: 'relative' }}>
                            <img src={inconveniences[0].imgSrc} alt="불편01" className="inconvenience_img" />
                            <div className="overlay_text">
                                <div className="number">{inconveniences[0].number}</div>
                                <p>{inconveniences[0].text}</p>
                            </div>
                        </div>

                        {/* 2번 & 3번 줄 */}
                        <div className="inconvenience_wrap small-card" style={{ position: 'relative' }}>
                            <img src={inconveniences[1].imgSrc} alt="불편02" className="inconvenience_img" />
                            <div className="overlay_text">
                                <div className="number">{inconveniences[1].number}</div>
                                <p>{inconveniences[1].text}</p>
                            </div>
                        </div>
                        <div className="inconvenience_wrap small-card" style={{ position: 'relative' }}>
                            <img src={inconveniences[2].imgSrc} alt="불편03" className="inconvenience_img" />
                            <div className="overlay_text">
                                <div className="number">{inconveniences[2].number}</div>
                                <p>{inconveniences[2].text}</p>
                            </div>
                        </div>

                        {/* 4번 & 5번 줄 */}
                        <div className="inconvenience_wrap small-card" style={{ position: 'relative' }}>
                            <img src={inconveniences[3].imgSrc} alt="불편04" className="inconvenience_img" />
                            <div className="overlay_text">
                                <div className="number">{inconveniences[3].number}</div>
                                <p>{inconveniences[3].text}</p>
                            </div>
                        </div>
                        <div className="inconvenience_wrap small-card" style={{ position: 'relative' }}>
                            <img src={inconveniences[4].imgSrc} alt="불편05" className="inconvenience_img" />
                            <div className="overlay_text">
                                <div className="number">{inconveniences[4].number}</div>
                                <p>{inconveniences[4].text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section2;