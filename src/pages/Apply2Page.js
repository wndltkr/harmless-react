import React, { useState } from "react";
import "../styles/apply2Page.css";

const Apply2Page = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        bankAccount: "",
        pickupDate: "",
        address: "",
        details: "",
        agree: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.agree) {
            alert("개인정보처리방침에 동의해야 합니다.");
            return;
        }
        alert("비대면 수거 신청이 완료되었습니다.");
    };

    return (
        <div className="apply2-container">
            <div className="apply2-header">
                <h2>비대면 수거 신청</h2>
                <p className="sub-text">* 표시는 필수 입력 항목입니다.</p>
            </div>

            <form onSubmit={handleSubmit} className="apply2-form">
                <div className="form-group">
                    <label>성함 <span className="required">*</span></label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="성함을 입력해주세요." />
                </div>

                <div className="form-group">
                    <label>연락처 <span className="required">*</span></label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="연락처를 입력해주세요." />
                </div>

                <div className="form-group">
                    <label>정산 받을 은행 및 계좌번호 <span className="required">*</span></label>
                    <input type="text" name="bankAccount" value={formData.bankAccount} onChange={handleChange} required placeholder="ex) 신한은행 000000-00-000000" />
                </div>

                <div className="form-group">
                    <label>수거 희망 날짜 <span className="required">*</span></label>
                    <input type="date" name="pickupDate" value={formData.pickupDate} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>주소 <span className="required">*</span></label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} required placeholder="주소를 입력해주세요." />
                </div>

                <div className="form-group">
                    <label>요청사항</label>
                    <textarea name="details" value={formData.details} onChange={handleChange} placeholder="예시) 공동현관 비밀번호 / 아이가 있으니 벨은 누르지 마세요." />
                </div>

                <div className="form-group checkbox">
                    <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
                    <label>개인정보처리방침에 동의합니다.</label>
                    <a href="/privacy" target="_blank">[자세히보기]</a>
                </div>

                <button type="submit" className="submit-btn">신청하기</button>
            </form>
        </div>
    );
};

export default Apply2Page;