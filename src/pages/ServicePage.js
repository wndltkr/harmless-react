import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DaeguMap from '../components/DaeguMap';
import "../styles/servicePage.css";

const ServicePage = () => {
    const [selectedArea, setSelectedArea] = useState('main');

    const areaInfo = {
        main: {
            title: '서비스 지역 안내',
            description: '아래 지도에서 서비스 지역을 선택해주세요.'
        },
        daegu: {
            title: '대구광역시',
            description: '대구광역시 전 지역 서비스 제공'
        }
    };

    const handleAreaClick = (area) => {
        setSelectedArea(area);
    };

    return (
        <div className="service-page">
            <div className="service-content">
                <div className="map-container">
                    <DaeguMap onAreaClick={handleAreaClick} />
                </div>
                <motion.div 
                    className="area-info"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2>{areaInfo[selectedArea]?.title || '지역 정보'}</h2>
                    <p>{areaInfo[selectedArea]?.description || '지역을 선택해주세요.'}</p>
                </motion.div>
            </div>
        </div>
    );
};

export default ServicePage;