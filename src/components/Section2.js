import React from 'react';
import '../styles/section2.css';

const inconveniences = [
    {
        id: 1,
        imgSrc: '/files/attach/images/main/inconvenience_img1.jpg?2',
        number: '01',
        text: '20kg 이하는 방문수거신청이 \n안되거나 무상 수거일때',
    },
    {
        id: 2,
        imgSrc: '/files/attach/images/main/inconvenience_img2.jpg',
        number: '02',
        text: '헌옷 수거함에 \n직접 버리러 가야 할 때',
    },
    {
        id: 3,
        imgSrc: '/files/attach/images/main/inconvenience_img3.jpg',
        number: '03',
        text: '주변 헌옷 수거함 \n위치를 모를때',
    },
    {
        id: 4,
        imgSrc: '/files/attach/images/main/inconvenience_img4.jpg',
        number: '04',
        text: '물건 버릴 양이 많아 \n도움이 필요할때',
    },
    {
        id: 5,
        imgSrc: '/files/attach/images/main/inconvenience_img5.jpg',
        number: '05',
        text: '재활용 가능한지 \n불가능한지 헷갈릴때',
    },
];

const Section2 = () => {
    return (
        <section id="section2" className="section section2 clearfix">
            <div className="bh_wrap">
                <div className="common_inconvenience">
                    <div className="common_title fade-in-up" data-anim-delay="0">
                        <div className="icon">
                            <img src="/files/attach/images/main/question.png" alt="question" />
                        </div>
                        <p>
                            이런 <span className="line_effect bh_color_main on"><b>불편</b></span>을 겪으신 적 있나요?
                        </p>
                    </div>
                    <div className="bh_row">
                        {inconveniences.map((item) => (
                            <div
                                key={item.id}
                                className="lg:col-6 col-12 mt-30 fade-in-up"
                                data-anim-delay="0"
                            >
                                <div className="inconvenience_wrap">
                                    <img src={item.imgSrc} alt={`불편${item.number}`} />
                                    <div className="text_wrap">
                                        <div className="number">{item.number}</div>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section2;