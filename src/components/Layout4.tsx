import myImg from "../assets/4-1.png";

function Layout4() {
  return (
    <div
      id="layout4"
      className="flex w-[1440px] py-[112px] px-[64px] flex-col items-center gap-[80px]"
      style={{ background: "var(--Color-Scheme-1-Background, #FFF)" }}
    >
      <div className="flex max-w-[1280px] flex-col items-start gap-[80px] self-stretch">
        <div className="flex items-center gap-[80px] self-stretch">
          <div className="flex flex-col items-start gap-8 flex-1">
            <div className="flex flex-col items-start gap-8 self-stretch">
              <div className="flex flex-col items-start gap-4 self-stretch">
                <div className="flex items-center">
                  <div
                    className="text-Color-Scheme-1-Text font-['Nunito_Sans'] text-base font-semibold leading-[150%]"
                    style={{ color: "var(--Color-Scheme-1-Text, #000)" }}
                  >
                    효율성
                  </div>
                </div>
                <div className="flex flex-col items-start gap-6 self-stretch">
                  <div
                    className="self-stretch text-Color-Scheme-1-Text font-['Outfit'] text-[54px] font-medium leading-[120%] tracking-[-0.52px]"
                    style={{ color: "var(--Color-Scheme-1-Text, #000)" }}
                  >
                    고객 대응과 마케팅 전략의 혁신
                  </div>
                  <div
                    className="self-stretch text-Color-Scheme-1-Text font-['Nunito_Sans'] text-[18px] font-normal leading-[150%]"
                    style={{ color: "var(--Color-Scheme-1-Text, #000)" }}
                  >
                    SOLVIA는 고객 상담을 통합 관리하여 효율적인 대응을 가능하게
                    합니다. 이를 통해 마케팅 전략을 더욱 효과적으로 수립할 수
                    있습니다.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4 self-stretch">
                <div className="flex py-2 items-start gap-6 self-stretch">
                  <div className="flex flex-col items-start gap-4 flex-1">
                    <div
                      className="self-stretch text-Color-Scheme-1-Text font-['Outfit'] text-[22px] font-medium leading-[140%] tracking-[-0.22px]"
                      style={{ color: "var(--Color-Scheme-1-Text, #000)" }}
                    >
                      고객 대응
                    </div>
                    <div
                      className="self-stretch text-Color-Scheme-1-Text font-['Nunito_Sans'] text-base font-normal leading-[150%]"
                      style={{ color: "var(--Color-Scheme-1-Text, #000)" }}
                    >
                      모든 고객 문의를 한 곳에서 관리하여 신속한 대응이
                      가능합니다.
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-4 flex-1">
                    <div
                      className="self-stretch text-Color-Scheme-1-Text font-['Outfit'] text-[22px] font-medium leading-[140%] tracking-[-0.22px]"
                      style={{ color: "var(--Color-Scheme-1-Text, #000)" }}
                    >
                      마케팅 전략
                    </div>
                    <div
                      className="self-stretch text-Color-Scheme-1-Text font-['Nunito_Sans'] text-base font-normal leading-[150%]"
                      style={{ color: "var(--Color-Scheme-1-Text, #000)" }}
                    >
                      통계 분석을 통해 효과적인 마케팅 전략을 수립할 수
                      있습니다.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <button
                className="flex py-3 px-6 justify-center items-center gap-2 hover:bg-gray-50 transition-colors"
                style={{ border: "1px solid var(--Color-Neutral-Darkest, #000)" }}
                onClick={() => {
                  const element = document.getElementById('layout3');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <div
                  className="text-Color-Neutral-Darkest font-['Nunito_Sans'] text-base font-normal leading-[150%]"
                  style={{ color: "var(--Color-Neutral-Darkest, #000)" }}
                >
                  자세히
                </div>
              </button>
              <button 
                className="flex justify-center items-center gap-2 hover:opacity-70 transition-opacity"
                onClick={() => {
                  const element = document.getElementById('cta');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <div
                  className="text-Color-Neutral-Darkest font-['Nunito_Sans'] text-base font-normal leading-[150%]"
                  style={{ color: "var(--Color-Neutral-Darkest, #000)" }}
                >
                  가입
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 25"
                  fill="none"
                  className="w-6 h-6"
                >
                  <path
                    d="M9.38708 7.17285C9.48791 7.17285 9.56488 7.20326 9.64294 7.28125L14.5873 12.2256C14.6412 12.2795 14.6663 12.3215 14.6781 12.3496V12.3506C14.6929 12.3861 14.7015 12.4259 14.7015 12.4746C14.7015 12.5233 14.6929 12.5631 14.6781 12.5986V12.5996C14.6663 12.6277 14.6412 12.6697 14.5873 12.7236L9.61853 17.6924C9.54076 17.7702 9.47362 17.792 9.39294 17.7891C9.29892 17.7856 9.21805 17.7537 9.1322 17.668C9.05408 17.5898 9.02283 17.513 9.02283 17.4121C9.02283 17.3112 9.05408 17.2344 9.1322 17.1562L13.8138 12.4746L9.10681 7.76758C9.02915 7.68988 9.0072 7.62357 9.01013 7.54297C9.01358 7.4487 9.04615 7.36731 9.1322 7.28125C9.21013 7.20344 9.28649 7.17293 9.38708 7.17285Z"
                    fill="black"
                    stroke="black"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            className="h-[640px] flex-1 aspect-[15/16] rounded-none bg-cover bg-center"
            style={{ backgroundImage: `url(${myImg})` }}
            role="img"
            aria-label="SOLVIA 마케팅 및 고객 대응 솔루션을 보여주는 이미지"
          ></div>
        </div>
      </div>
    </div>
  );
}
export default Layout4;
