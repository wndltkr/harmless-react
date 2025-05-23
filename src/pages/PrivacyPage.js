import React from "react";
import { motion } from "framer-motion";
import "../styles/privacyPage.css";

const PrivacyPage = () => {
  // 상단 배너 인라인 스타일
  const bannerStyle = {
    background: "url('/files/attach/images/106/0e1b3587a1741f541b78bbd83d40e0c5.jpg') no-repeat center center",
    backgroundSize: "cover",
    height: "400px",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    width: "94vw",
    marginLeft: "calc(50% - 47vw)",
  };

  return (
    <div className="privacy-container">
      <div className="privacy-banner" style={bannerStyle}>
        <div className="privacy-banner-content">
          <h1 className="privacy-banner-title">개인정보처리방침</h1>
          <div className="privacy-underline"></div>
        </div>
      </div>

      <div className="content-wrap">
        <div className="content">
          <div className="content-inner">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="privacy-content"
            >
              <p>
                무해(이하 "회사")는 통신비밀보호법, 전기통신사업법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 정보통신서비스제공자가 준수하여야 할 관련 법령상의 개인정보보호 규정을 준수하며, 관련 법령에 의거한 개인정보취급방침을 정하여 이용자 권익 보호에 최선을 다하고 있습니다.
              </p>

              <h2>1. 수집하는 개인정보의 항목 및 수집방법</h2>
              <p>
                가. 수집하는 개인정보의 항목<br />
                회사는 회원가입, 상담, 콘텐츠구매, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.
              </p>

              <p>
                필수사항 : 아이디, 비밀번호, 비밀번호 찾기 질문과 답변, 이메일 주소, 닉네임<br />
                선택사항 : 이름, 전화번호<br />
                또한 서비스 이용과정이나 사업처리 과정에서 아래와 같은 정보들이 자동으로 생성되어 수집될 수 있습니다.
              </p>

              <p>
                IP Address, 쿠키, 접속로그, 서비스 이용 기록, 불량 이용 기록, 결제기록<br />
                나. 개인정보 수집방법<br />
                회사는 다음과 같은 방법으로 개인정보를 수집합니다.
              </p>

              <p>
                홈페이지 회원가입, 상담게시판, 이메일, 이벤트 응모, 배송요청<br />
                협력회사로부터의 제공<br />
                생성정보 수집 툴을 통한 수집
              </p>

              <h2>2. 개인정보의 수집 및 이용목적</h2>
              <p>
                가. 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산<br />
                콘텐츠 제공, 구매 및 요금 결제, 요금추심
              </p>

              <p>
                나. 회원 관리<br />
                회원제 서비스 이용 및 제한적 본인 확인제에 따른 본인확인, 개인식별, 불량회원의 부정 이용방지와 비인가 사용방지, 가입의사 확인, 가입 및 가입횟수 제한, 만14세 미만 아동 개인정보 수집 시 법정 대리인 동의여부 확인, 추후 법정 대리인 본인확인, 분쟁 조정을 위한 기록보존, 불만처리 등 민원처리, 고지사항 전달
              </p>

              <p>
                다. 신규서비스 개발 및 마케팅 및 광고에 활용<br />
                신규 서비스(제품) 개발 및 특화 , 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계, 이벤트 등 광고성 정보 전달
              </p>

              <h2>3. 개인정보의 공유 및 제공</h2>
              <p>
                회사는 이용자의 개인정보를 "2. 개인정보의 수집목적 및 이용목적"에서 고지한 범위내에서 사용하며, 이용자의 사전 동의 없이는 동 범위를 초과하여 이용하거나 원칙적으로 이용자의 개인정보를 외부에 공개하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
              </p>

              <p>
                이용자가 사전에 공개에 동의한 경우<br />
                법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우
              </p>

              <h2>4. 개인정보의 취급위탁</h2>
              <p>
                회사는 이용자의 동의없이 개인정보 취급을 외부 업체에 위탁하지 않습니다. 향후 그러한 필요가 생길 경우, 위탁 대상자와 위탁 업무 내용에 대해 고객님에게 통지하고 필요한 경우 사전 동의를 받도록 하겠습니다.
              </p>

              <h2>5. 개인정보의 보유 및 이용기간</h2>
              <p>
                이용자 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래와 같이 이유로 명시한 기간 동안 보존합니다.
              </p>

              <p>
                가. 회사 내부 방침에 의한 정보보유 사유<br />
                부정이용기록
              </p>

              <p>
                보존 이유 : 부정 이용 방지<br />
                보존 기간 : 1년
              </p>

              <p>
                나. 관련법령에 의한 정보보유 사유<br />
                상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다. 이 경우 회사는 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다.
              </p>

              <p>
                상거래 관련 기록
              </p>

              <p>
                보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률<br />
                보존 기간 : 계약 또는 청약철회 등에 관한 기록 : 5년<br />
                대금결제 및 재화 등의 공급에 관한 기록 : 5년<br />
                소비자의 불만 또는 분쟁처리에 관한 기록 : 3년
              </p>

              <p>
                본인확인에 관한 기록
              </p>

              <p>
                보존 이유 : 정보통신망 이용촉진 및 정보보호 등에 관한 법률<br />
                보존 기간 : 6개월
              </p>

              <p>
                방문에 관한 기록
              </p>

              <p>
                보존 이유 : 통신비밀보호법<br />
                보존 기간 : 3개월
              </p>

              <h2>6. 개인정보 파기절차 및 방법</h2>
              <p>
                이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다.
              </p>

              <p>
                회사의 개인정보 파기절차 및 방법은 다음과 같습니다.
              </p>

              <p>
                가. 파기절차<br />
                이용자가 회원가입 등을 위해 입력한 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조)일정 기간 저장된 후 파기됩니다.<br />
                동 개인정보는 법률에 의한 경우가 아니고서는 보유되는 이외의 다른 목적으로 이용되지 않습니다.
              </p>

              <p>
                나. 파기방법<br />
                종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.<br />
                전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
              </p>

              <h2>7. 이용자 및 법정대리인의 권리와 그 행사방법</h2>
              <p>
                이용자 및 법정 대리인은 언제든지 등록되어 있는 자신 혹은 당해 만 14세 미만 아동의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다.<br />
                이용자 혹은 만 14세 미만 아동의 개인정보 조회, 수정을 위해서는 '회원정보 보기'(또는 '회원정보수정' 등)을, 가입해지(동의철회)를 위해서는 "탈퇴"를 클릭하여 직접 열람, 정정 또는 탈퇴가 가능합니다.<br />
                이용자가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정이 이루어지도록 하겠습니다.<br />
                회사는 이용자 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된 개인정보는 "5. 개인정보의 보유 및 이용기간"에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.
              </p>

              <h2>8. 개인정보 자동 수집 장치의 설치/운영 및 거부에 관한 사항</h2>
              <p>
                회사는 개인화되고 맞춤화된 서비스를 제공하기 위해서 이용자의 정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다. 쿠키는 웹사이트를 운영하는데 이용되는 서버가 이용자의 브라우저에게 보내는 아주 작은 텍스트 파일로 이용자 컴퓨터의 하드디스크에 저장됩니다.
              </p>

              <p>
                가. 쿠키의 사용 목적<br />
                이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 뉴스편집, 이용자 규모 등을 파악하여 이용자에게 최적화된 정보 제공을 위하여 사용합니다.
              </p>

              <p>
                나. 쿠키의 설치/운영 및 거부<br />
                이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서 이용자는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.<br />
                다만, 쿠키의 저장을 거부할 경우에는 로그인이 필요한 일부 서비스는 이용에 어려움이 있을 수 있습니다.
              </p>

              <h2>9. 개인정보의 기술적/관리적 보호 대책</h2>
              <p>
                회사는 이용자의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적/관리적 대책을 강구하고 있습니다.
              </p>

              <p>
                가. 기술적인 대책<br />
                회원님의 개인정보는 비밀번호에 의해 보호되며, 파일 및 전송 데이터를 암호화하거나 파일 잠금기능(Lock)을 사용하여 중요한 데이터는 별도의 보안기능을 통해 보호되고 있습니다.<br />
                당사는 백신프로그램을 이용하여 컴퓨터바이러스에 의한 피해를 방지하기 위한 조치를 취하고 있습니다. 백신프로그램은 주기적으로 업데이트되며 갑작스런 바이러스가 출현될 경우 백신이 나오는 즉시 이를 적용함으로써 개인정보가 침해되는 것을 방지하고 있습니다.<br />
                당사는 암호알고리즘을 이용하여 네트워크 상의 개인정보를 안전하게 전송할 수 있는 보안장치(SSL 또는 SET)를 채택하고 있습니다.<br />
                해킹 등에 의해 귀하의 개인정보가 유출되는 것을 방지하기 위하여, 외부로부터의 침입을 차단하는 장치를 이용하고 있으며 주요 서버마다 침입탐지시스템을 설치하여 24시간 침입을 감시하고 있습니다.
              </p>

              <p>
                나. 관리적인 대책<br />
                위와 같은 노력 이외에 회원님 스스로도 제3자에게 비밀번호 등이 노출되지 않도록 주의하셔야 합니다. 특히 비밀번호 등이 공공장소에 설치한 PC를 통해 유출되지 않도록 항상 유의하시기 바랍니다. 회원님의 ID와 비밀번호는 반드시 본인만 사용하시고 비밀번호를 자주 바꿔주시는 것이 좋습니다.<br />
                당사는 개인정보 취급직원을 개인정보 관리업무를 수행하는 자 및 업무상 개인정보의 취급이 불가피한 자로 엄격히 제한하고 담당직원에 대한 수시 교육을 통하여 본 정책의 준수를 강조하고 있으며, 보안부서의 이행점검을 통하여 본 정책의 이행사항 및 담당직원의 준수여부를 확인하여 문제가 발견될 경우 바로 시정조치하고 있습니다.
              </p>

              <h2>10. 개인정보관리책임자 연락처</h2>
              <p>
                귀하께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자에게 신고하실 수 있습니다.
              </p>

              <p>
                회사는 이용자의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.
              </p>

              <p>
                개인정보관리책임자<br />
                성명 : 권순표<br />
                전화번호 : 010-5407-2892<br />
                이메일 : tnsvy2@anver.com
              </p>

              <p>
                기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.
              </p>

              <p>
                개인정보침해신고센터 (www.cyberprivacy.or.kr / 1336)<br />
                대검찰청 인터넷범죄수사센터 (http://sppo.go.kr / 02-3480-3600)<br />
                경찰청 사이버테러대응센터 (www.ctrc.go.kr / 02-392-0330)
              </p>

              <h2>11. 고지의 의무</h2>
              <p>
                현 개인정보취급방침 내용 추가, 삭제 및 수정이 있을 시에는 개정 최소 7일전부터 홈페이지의 "공지사항"을 통해 고지할 것입니다.
              </p>

              <p>
                공고일자 : 2024년 9월 6일<br />
                시행일자 : 2024년 9월 6일<br />
                수정일자 : 2024년 9월 6일
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage; 