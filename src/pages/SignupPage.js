import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/signupPage.css';

const SignupPage = () => {
  // 배너 스타일 정의
  const bannerStyle = {
    textAlign: "center",
    background: "url('/files/attach/images/106/d20c469d4696da9a3b4396930d911f6c.png') no-repeat center center",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px',
    width: '95%',
    maxWidth: '1800px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    position: 'relative',
    borderRadius: '20px',
    overflow: 'hidden'
  };


  // 배너 콘텐츠 스타일
  const bannerContentStyle = {
    position: "relative",
    zIndex: 2,
    maxWidth: "1200px",
    padding: "0 20px",
    boxSizing: "border-box"
  };

  // 배너 제목 스타일
  const bannerTitleStyle = {
    fontSize: "36px",
    fontWeight: 600,
    marginBottom: "20px",
    letterSpacing: "-0.5px",
    textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
    color: "#fff"
  };

  // 폼 상태 관리
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    phone: '',
    nickname: '',
    address: {
      postcode: '',
      roadAddress: '',
      jibunAddress: '',
      extraAddress: '',
      detailAddress: ''
    },
    agreements: {
      privacy: false,
      terms: false
    },
    mailing: false,
    message: 'none'  // 'all', 'friends', 'none' 중 하나
  });

  // 에러 상태 관리
  const [errors, setErrors] = useState({});

  // 입력 필드 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // 주소 필드 변경 핸들러
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        [name]: value
      }
    });
  };

  // 약관 동의 핸들러
  const handleAgreementChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      agreements: {
        ...formData.agreements,
        [name]: checked
      }
    });
  };

  // 폼 유효성 검사
  const validateForm = () => {
    const newErrors = {};
    
    // 이메일 검사
    if (!formData.email) {
      newErrors.email = '이메일을 입력해주세요.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '올바른 이메일 형식이 아닙니다.';
    }
    
    // 비밀번호 검사
    if (!formData.password) {
      newErrors.password = '비밀번호를 입력해주세요.';
    } else if (formData.password.length < 8) {
      newErrors.password = '비밀번호는 8자 이상이어야 합니다.';
    }
    
    // 비밀번호 확인 검사
    if (formData.password !== formData.passwordConfirm) {
      newErrors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
    }
    
    // 휴대폰 번호 검사
    if (!formData.phone) {
      newErrors.phone = '휴대폰 번호를 입력해주세요.';
    } else if (!/^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/.test(formData.phone.replace(/-/g, ''))) {
      newErrors.phone = '올바른 휴대폰 번호 형식이 아닙니다.';
    }
    
    // 닉네임 검사
    if (!formData.nickname) {
      newErrors.nickname = '닉네임을 입력해주세요.';
    }
    
    // 약관 동의 검사
    if (!formData.agreements.privacy) {
      newErrors.privacy = '개인정보처리방침에 동의해주세요.';
    }
    
    if (!formData.agreements.terms) {
      newErrors.terms = '이용약관에 동의해주세요.';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // 폼 제출 로직
      console.log('Form submitted:', formData);
      // API 호출 등 추가 로직
    }
  };

  // 주소 검색 핸들러
  const handleAddressSearch = () => {
    new window.daum.Postcode({
      oncomplete: function(data) {
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
        setFormData(prev => ({
          ...prev,
          address: {
            ...prev.address,
            postcode: data.zonecode,
            roadAddress: data.roadAddress,
            jibunAddress: data.jibunAddress,
            extraAddress: data.buildingName ? `(${data.buildingName})` : ''
          }
        }));
      }
    }).open();
  };

  return (
    <div className="body">
      {/* 상단 배너 */}
      <div className="sub-top-banner" style={{
        background: "url('/files/attach/images/106/d20c469d4696da9a3b4396930d911f6c.png') no-repeat center center",
        backgroundSize: 'cover'
      }}>
        <h1 style={{
          color: '#fff',
          fontSize: '36px',
          fontWeight: 'bold',
          margin: 0,
          position: 'relative',
          zIndex: 2
        }}>회원가입</h1>
      </div>

      {/* 컨텐츠 영역 */}
      <div className="content_wrap">
        <div className="content">
          <div className="signup_wrap">
            <h2 className="module_title">회원 정보 입력</h2>
            
            {/* 약관 동의 */}
            <div className="control-group">
              <div className="agreement">
                <div className="title">
                  개인정보처리방침 <span style={{ color: 'red' }}>(필수)</span>
                </div>
                <div className="text">
                  <p><strong>개인정보처리방침</strong></p>

                  <h4>1. 수집하는 개인정보의 항목 및 수집방법</h4>
                  <p>회사는 회원가입, 원활한 고객 상담, 각종 서비스의 제공을 위해 최초 회원가입시 아래와 같은 개인정보를 수집하고 있습니다.</p>
                  <p>수집항목: 이름, 생년월일, 성별, 로그인ID, 비밀번호, 자택 전화번호, 휴대전화번호, 이메일, 14세미만 가입자의 경우 법정대리인의 정보</p>
                  <p>수집방법: 홈페이지(회원가입)</p>

                  <h4>2. 개인정보의 수집 및 이용목적</h4>
                  <p>회사는 수집한 개인정보를 다음의 목적을 위해 이용합니다.</p>
                  <p>회원 관리: 회원제 서비스 이용에 따른 본인확인, 개인식별, 불량회원의 부정이용 방지와 비인가 사용방지, 가입의사 확인, 연령확인, 만14세 미만 아동 개인정보 수집 시 법정 대리인의 동의여부 확인, 불만처리 등 민원처리</p>
                  <p>마케팅 및 광고에의 활용: 신규 서비스(신상품이나 이벤트 정보) 개발 및 특화, 이벤트 등 광고성 정보 전달, 인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계</p>

                  <h4>3. 개인정보의 보유 및 이용기간</h4>
                  <p>회원의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.</p>

                  <h4>4. 개인정보의 파기절차 및 방법</h4>
                  <p>회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.</p>
                  <p>파기절차: 회원이 서비스 가입 등을 위해 입력한 정보는 목적이 달성된 후 별도의 DB로 옮겨져 내부 방침 및 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기되어집니다.</p>
                  <p>파기방법: 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.</p>

                  <h4>5. 개인정보 제공</h4>
                  <p>회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.</p>
                  <p>이용자가 사전에 동의한 경우</p>
                  <p>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</p>

                  <h4>6. 수집한 개인정보의 위탁</h4>
                  <p>회사는 서비스 이행을 위해 아래와 같이 외부 전문업체에 위탁하여 운영하고 있습니다.</p>
                  <p>위탁 대상자: [위임사]</p>
                  <p>위탁업무 내용: [위임된 업무 내용]</p>

                  <h4>7. 이용자 및 법정대리인의 권리와 행사방법</h4>
                  <p>이용자는 언제든지 회사에 대해 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
                  <p>개인정보 열람요구</p>
                  <p>오류 등이 있을 경우 정정 요구</p>
                  <p>삭제요구</p>
                  <p>처리정지 요구</p>

                  <h4>8. 개인정보 보호를 위한 안전성 확보 조치</h4>
                  <p>회사는 개인정보보호법 제29조에 따라 다음과 같은 안전성 확보 조치를 취하고 있습니다.</p>
                  <p>관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육</p>
                  <p>기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화</p>
                  <p>물리적 조치: 전산실, 자료보관실 등의 접근통제</p>

                  <h4>9. 개인정보 보호책임자</h4>
                  <p>회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제를 처리하기 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
                  <p>개인정보 보호책임자</p>
                  <p>직책: [직책]</p>
                  <p>연락처: [전화번호], [이메일]</p>
                  <p>※ 개인정보 보호책임자 변경 시 지체없이 공개하도록 하겠습니다.</p>

                  <h4>10. 개인정보 처리방침 변경</h4>
                  <p>이 개인정보 처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공개사항을 통하여 고지할 것입니다.</p>
                </div>
                <div className="confirm">
                  <label className="custom_radio">
                    <input
                      type="checkbox"
                      name="privacy"
                      checked={formData.agreements.privacy}
                      onChange={handleAgreementChange}
                    />
                    <span className="custom_radio_btn"></span>
                    동의합니다
                  </label>
                  {errors.privacy && <div className="error-message">{errors.privacy}</div>}
                </div>
              </div>
              
              <div className="agreement">
                <div className="title">
                  이용약관 <span style={{ color: 'red' }}>(필수)</span>
                </div>
                <div className="text">
                  <p><strong>이용약관안내</strong></p>

                  <h4>제1조 (목적)</h4>
                  <p>이 약관은 무해 (이하 '회사'라 합니다)가 운영하는 인터넷사이트(http://주소 이하 '사이트명'이라 합니다)를 통하여 판매되는 템플릿 제품을 이용자가 이용하는 경우, 회사와 이용자간 전자금융거래의 법률관계를 정함에 그 목적이 있습니다.</p>

                  <h4>제2조 (정의)</h4>
                  <p>① 본 약관에서 정하는 용어의 정의는 다음과 같습니다.</p>
                  <ul>
                    <li>'전자금융거래'라 함은 회사가 전자적 장치를 통하여 전자금융업무를 제공하고, 이용자가 회사의 종사자와 직접 대면하거나 의사소통을 하지 아니하고 자동화된 방식으로 이를 이용하는 거래를 말합니다.</li>
                    <li>'접근매체'라 함은 전자금융거래에 있어서 거래지시를 하거나 이용자 및 거래내용의 진실성과 정확성을 확보하기 위하여 사용되는 수단 또는 정보로서 전자식 카드 및 이에 준하는 전자적 정보(신용카드번호를 포함한다), '전자서명법' 상의 인증서, 금융기관 또는 전자금융업자에 등록된 이용자번호, 이용자의 생체정보, 이상의 수단이나 정보를 사용하는데 필요한 비밀번호 등 전자금융거래법 제2조 제10호에서 정하고 있는 것을 말합니다.</li>
                    <li>'이용자'라 함은 회사와 본 약관에 동의하고 본 약관에 따라 사이트 전자금융거래 서비스를 이용하는 사이트 회원을 말합니다.</li>
                    <li>'비밀번호'란 이용자의 동일성 식별과 회원정보의 보호를 위하여 이용자가 설정하고 회사가 승인한 숫자와 문자의 조합을 말합니다.</li>
                    <li>'오류'라 함은 이용자의 고의 또는 과실 없이 전자금융거래가 본 약관 또는 이용자의 거래지시에 따라 이행되지 아니한 경우를 말합니다.</li>
                  </ul>
                  <p>② 본 조 및 본 약관의 다른 조항에서 정의한 것을 제외하고는 전자금융거래법 등 관련법령에 정한 바에 따른다.</p>

                  <h4>제3조 (약관의 명시 및 변경)</h4>
                  <p>① 회사는 이용자가 전자금융거래를 하기 전에 본 약관을 사이트에 게시하고 이용자가 본 약관의 중요한 내용을 확인할 수 있도록 합니다.</p>
                  <p>② 회사는 이용자의 요청이 있는 경우 전자문서의 전송(전자우편을 이용한 전송을 포함합니다)의 방식에 의하여 본 약관의 사본을 이용자에게 교부합니다.</p>
                  <p>③ 회사가 본 약관을 변경하는 때에는 그 시행일 1개월 전에 변경되는 약관을 금융거래정보 입력화면 및 회사의 홈페이지('0000'를 말합니다. 이하에서 같습니다)에 게시함으로써 이용자에게 공지합니다.</p>

                  <h4>제4조 (거래내용의 확인)</h4>
                  <p>① 회사는 '0000'의 '구매내역' 조회 화면을 통하여 이용자의 거래내용을 확인할 수 있도록 하며, 이용자의 요청이 있는 경우에는 요청을 받은 날로부터 2주 이내에 모사전송, 우편 또는 직접 교부의 방법으로 거래내용에 관한 서면을 교부합니다.</p>
                  <p>② 제1항의 대상이 되는 거래내용 중 대상기간이 5년인 것은 다음 각호와 같습니다.</p>
                  <ul>
                    <li>거래의 종류 및 금액</li>
                    <li>거래상대방을 나타내는 정보</li>
                    <li>거래일자</li>
                    <li>전자적 장치의 종류 및 전자적 장치를 식별할 수 있는 정보</li>
                    <li>해당 전자금융거래와 관련한 전자적 장치의 접속기록</li>
                  </ul>
                  <p>③ 제1항의 대상이 되는 거래내용 중 대상기간이 1년인 것은 다음 각호와 같습니다.</p>
                  <ul>
                    <li>건당 거래금액이 1만원 이하인 소액 전자금융거래에 관한 기록</li>
                    <li>전자지급수단 이용시 거래승인에 관한 기록</li>
                    <li>이용자의 오류정정 요구사실 및 처리결과에 관한 사항</li>
                  </ul>
                  <p>④ 이용자가 제1항에서 정한 서면교부를 요청하고자 할 경우 다음의 주소 및 전화번호로 요청할 수 있습니다.</p>
                  <ul>
                    <li>주소: 주소를 작성해주세요.</li>
                    <li>이메일 주소: 000000000@gmail.com</li>
                    <li>전화번호: 070-0000-0000</li>
                  </ul>

                  <h4>제5조 (오류의 정정 등)</h4>
                  <p>① 이용자는 전자금융거래서비스를 이용함에 있어 오류가 있음을 안 때에는 회사에 대하여 그 정정을 요구할 수 있습니다.</p>
                  <p>② 회사는 제1항의 규정에 따른 오류의 정정요구를 받은 때에는 이를 즉시 조사하여 처리한 후 정정요구를 받은 날부터 2주 이내에 그 결과를 이용자에게 알려 드립니다.</p>

                  <h4>제6조 (전자금융거래 기록의 생성 및 보존)</h4>
                  <p>① 회사는 이용자가 이용한 전자금융거래의 내용을 추적, 검색하거나 그 내용에 오류가 발생한 경우에 이를 확인하거나 정정할 수 있는 기록을 생성하여 보존합니다.</p>
                  <p>② 제1항의 규정에 따라 회사가 보존하여야 하는 기록의 종류 및 보존방법은 제4조 제2항, 제3항에서 정한 바에 따릅니다.</p>

                  <h4>제7조 (거래지시의 철회 등)</h4>
                  <p>이용자가 전자지급거래를 한 경우, 이용자는 지급의 효력이 발생하기 전까지 본 약관에서 정한 바에 따라 제4조 제4항 기재 담당자에게 전자문서의 전송(전자우편을 이용한 전송을 포함합니다)에 의한 방법으로 거래지시를 철회할 수 있습니다. 각 서비스별 거래지시 철회의 효력 발생시기는 본 약관 제15조에서 정하는 바와 같습니다.</p>

                  <h4>제8조 (전자금융거래정보의 제공금지)</h4>
                  <p>회사는 전자금융거래서비스를 제공함에 있어서 취득한 이용자의 인적사항, 이용자의 계좌, 접근매체 및 전자금융거래의 내용과 실적에 관한 정보 또는 자료를 법령에 의하거나 이용자의 동의를 얻지 아니하고 제3자에게 제공, 누설하거나 업무상 목적 외에 사용하지 아니합니다.</p>

                  <h4>제9조 (회사의 책임)</h4>
                  <p>① 회사는 접근매체의 위조나 변조로 발생한 사고(단, 회사가 접근매체의 발급 주체이거나 사용, 관리 주체인 경우), 계약체결 또는 거래지시의 전자적 전송이나 처리과정에서 발생한 사고로 인하여 이용자에게 손해가 발생한 경우에는 그 손해를 배상할 책임을 집니다.</p>
                  <p>② 회사는 제1항에도 불구하고 다음 각호의 경우에는 이용자에 대하여 손해배상책임을 지지 않습니다.</p>
                  <ul>
                    <li>이용자가 접근매체를 제3자에게 대여하거나 사용을 위임하거나 양도 또는 담보 목적으로 제공하거나, 제3자가 권한없이 이용자의 접근매체를 이용하여 전자금융거래를 할 수 있음을 알았거나 알 수 있었음에도 불구하고 이용자가 자신의 접근매체를 누설 또는 노출하거나 방치한 경우</li>
                    <li>법인('중소기업기본법' 제2조 제2항에 의한 소기업을 제외한다)인 이용자에게 손해가 발생한 경우로서 회사가 사고를 방지하기 위하여 보안절차를 수립하고 이를 철저히 준수하는 등 합리적으로 요구되는 충분한 주의의무를 다한 경우</li>
                  </ul>
                  <p>③ 회사는 이용자로부터의 거래지시가 있음에도 불구하고 천재지변, 회사의 귀책사유가 없는 정전, 화재, 통신장애 기타의 불가항력적인 사유로 처리 불가능하거나 지연된 경우로서 이용자에게 처리 불가능 또는 지연 사유를 통지한 경우(금융기관 또는 결제수단 발행업체나 통신판매업자가 통지한 경우를 포함합니다)에는 이용자에 대하여 이로 인한 책임을 지지 아니합니다.</p>
                  <p>④ 회사는 컴퓨터 등 정보통신설비의 보수점검, 교체의 사유가 발생하여 전자금융서비스의 제공을 일시적으로 중단할 경우에는 회사의 홈페이지를 통하여 이용자에게 중단 일정 및 중단 사유를 사전에 공지합니다.</p>

                  <p>본 약관은 2024년 10월 2일부터 시행합니다.</p>
                </div>
                <div className="confirm">
                  <label className="custom_radio">
                    <input
                      type="checkbox"
                      name="terms"
                      checked={formData.agreements.terms}
                      onChange={handleAgreementChange}
                    />
                    <span className="custom_radio_btn"></span>
                    동의합니다
                  </label>
                  {errors.terms && <div className="error-message">{errors.terms}</div>}
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit}>
              {/* 이메일 입력 */}
              <div className="control-group">
                <label className="label_text">
                  이메일 <span className="required">*</span>
                </label>
                <div className="controls">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="이메일을 입력해주세요"
                  />
                  {errors.email && <div className="error-message">{errors.email}</div>}
                </div>
              </div>
              
              {/* 비밀번호 입력 */}
              <div className="control-group">
                <label className="label_text">
                  비밀번호 <span className="required">*</span>
                </label>
                <div className="controls">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="비밀번호를 입력해주세요"
                  />
                  <div className="help-inline">8자 이상의 영문, 숫자, 특수문자 조합</div>
                  {errors.password && <div className="error-message">{errors.password}</div>}
                </div>
              </div>
              
              {/* 비밀번호 확인 */}
              <div className="control-group">
                <label className="label_text">
                  비밀번호 확인 <span className="required">*</span>
                </label>
                <div className="controls">
                  <input
                    type="password"
                    name="passwordConfirm"
                    value={formData.passwordConfirm}
                    onChange={handleChange}
                    placeholder="비밀번호를 다시 입력해주세요"
                  />
                  {errors.passwordConfirm && <div className="error-message">{errors.passwordConfirm}</div>}
                </div>
              </div>
              
              {/* 휴대폰 번호 */}
              <div className="control-group">
                <label className="label_text">
                  휴대폰 번호 <span className="required">*</span>
                </label>
                <div className="controls">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="휴대폰 번호를 입력해주세요"
                  />
                  {errors.phone && <div className="error-message">{errors.phone}</div>}
                </div>
              </div>
              
              {/* 닉네임 */}
              <div className="control-group">
                <label className="label_text">
                  닉네임 <span className="required">*</span>
                </label>
                <div className="controls">
                  <input
                    type="text"
                    name="nickname"
                    value={formData.nickname}
                    onChange={handleChange}
                    placeholder="닉네임을 입력해주세요"
                  />
                  {errors.nickname && <div className="error-message">{errors.nickname}</div>}
                </div>
              </div>
              
              {/* 주소 검색 */}
              <div className="control-group">
                <label className="label_text">주소</label>
                <div className="controls krZip">
                  <div className="krzip-postcode-wrap">
                    <label>우편번호</label>
                    <input
                      type="text"
                      name="postcode"
                      value={formData.address.postcode}
                      onChange={handleAddressChange}
                      placeholder="우편번호"
                      readOnly
                    />
                  </div>
                  
                  <div className="krzip-address-wrap">
                    <label>주소</label>
                    <input
                      type="text"
                      name="roadAddress"
                      value={formData.address.roadAddress}
                      onChange={handleAddressChange}
                      placeholder="도로명주소"
                      readOnly
                    />
                    <input
                      type="text"
                      name="jibunAddress"
                      value={formData.address.jibunAddress}
                      onChange={handleAddressChange}
                      placeholder="지번주소"
                      readOnly
                    />
                    <input
                      type="text"
                      name="extraAddress"
                      value={formData.address.extraAddress}
                      onChange={handleAddressChange}
                      placeholder="참고항목"
                      readOnly
                    />
                  </div>
                  
                  <div className="krzip-detailAddress-wrap">
                    <label>상세주소</label>
                    <input
                      type="text"
                      name="detailAddress"
                      value={formData.address.detailAddress}
                      onChange={handleAddressChange}
                      placeholder="상세주소를 입력해주세요"
                    />
                  </div>
                  
                  <button
                    type="button"
                    className="krzip-search"
                    onClick={handleAddressSearch}
                  >
                    주소 검색
                  </button>
                </div>
              </div>
              
              {/* 메일링 가입 및 쪽지 허용 */}
              <div className="control-group">
                <label className="label_text">메일링 가입</label>
                <div className="controls">
                  <label className="custom_radio">
                    <input
                      type="radio"
                      name="mailing"
                      value="yes"
                      checked={formData.mailing === true}
                      onChange={(e) => setFormData({
                        ...formData,
                        mailing: e.target.value === "yes"
                      })}
                    />
                    <span className="custom_radio_btn"></span>
                    예
                  </label>
                  <label className="custom_radio">
                    <input
                      type="radio"
                      name="mailing"
                      value="no"
                      checked={formData.mailing === false}
                      onChange={(e) => setFormData({
                        ...formData,
                        mailing: e.target.value === "yes"
                      })}
                    />
                    <span className="custom_radio_btn"></span>
                    아니요
                  </label>
                </div>
              </div>
              
              <div className="control-group">
                <label className="label_text">쪽지 허용</label>
                <div className="controls">
                  <label className="custom_radio">
                    <input
                      type="radio"
                      name="message"
                      value="all"
                      checked={formData.message === "all"}
                      onChange={(e) => setFormData({
                        ...formData,
                        message: e.target.value
                      })}
                    />
                    <span className="custom_radio_btn"></span>
                    모두 허용
                  </label>
                  <label className="custom_radio">
                    <input
                      type="radio"
                      name="message"
                      value="friends"
                      checked={formData.message === "friends"}
                      onChange={(e) => setFormData({
                        ...formData,
                        message: e.target.value
                      })}
                    />
                    <span className="custom_radio_btn"></span>
                    등록된 친구만
                  </label>
                  <label className="custom_radio">
                    <input
                      type="radio"
                      name="message"
                      value="none"
                      checked={formData.message === "none"}
                      onChange={(e) => setFormData({
                        ...formData,
                        message: e.target.value
                      })}
                    />
                    <span className="custom_radio_btn"></span>
                    모두 금지
                  </label>
                </div>
              </div>
              
              {/* 제출 버튼 */}
              <div className="btnArea">
                <button type="submit" className="btn btn_mobile_max">
                  가입하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage; 