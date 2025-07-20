import myImg1 from "../assets/3-1.png";
import myImg2 from "../assets/3-2.png";
import myImg3 from "../assets/3-3.png";

function Layout3() {
  return (
    <div className="flex w-[1440px] py-[112px] px-[64px] flex-col items-center gap-[80px]">
      <div className="flex max-w-[1280px] flex-col items-center gap-[80px] self-stretch">
        <div
          className="w-[768px] max-w-[768px] text-center text-Color-Scheme-1-Text font-['Outfit'] text-[44px] font-medium leading-[120%] tracking-[-0.44px]"
          style={{ color: "var(--Color-Scheme-1-Text, #000)" }} // tailwind.config.js에 등록 안 했을 때
        >
          고객 문의를 통합하여 효율적으로 관리하는 방법을 소개합니다.
        </div>
        <div className="flex flex-col items-start gap-[64px] self-stretch">
          <div className="flex justify-center items-start gap-[48px] self-stretch">
            <div className="flex flex-col items-start gap-8 flex-1">
              <div
                className="h-[240px] self-stretch aspect-[394.67/240] rounded-none bg-cover bg-center"
                style={{ backgroundImage: `url(${myImg1})` }}
              ></div>
              <div className="flex flex-col items-center gap-8 self-stretch">
                <div className="flex flex-col items-start gap-4 self-stretch">
                  <div
                    className="self-stretch text-center text-Color-Scheme-1-Text font-['Outfit'] text-[28px] font-medium leading-[140%] tracking-[-0.28px]"
                    style={{ color: "var(--Color-Scheme-1-Text, #000)" }} // tailwind.config.js에 등록 안 했을 때
                  >
                    모든 채널의 고객 문의를 한 곳에서 관리하세요.
                  </div>
                  <div
                    className="self-stretch text-center text-Color-Scheme-1-Text font-['Nunito_Sans'] text-base font-normal leading-[150%]"
                    style={{ color: "var(--Color-Scheme-1-Text, #000)" }} // tailwind.config.js에 등록 안 했을 때
                  >
                    SOLVIA는 다양한 플랫폼에서 들어오는 고객 문의를 통합하여
                    관리할 수 있도록 도와줍니다.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-8 flex-1">
              <div
                className="h-[240px] self-stretch aspect-[394.67/240] rounded-none bg-cover bg-center"
                style={{ backgroundImage: `url(${myImg2})` }}
              ></div>
              <div className="flex flex-col items-center gap-8 self-stretch">
                <div className="flex flex-col items-start gap-4 self-stretch">
                  <div
                    className="self-stretch text-center text-Color-Scheme-1-Text font-['Outfit'] text-[28px] font-medium leading-[140%] tracking-[-0.28px]"
                    style={{ color: "var(--Color-Scheme-1-Text, #000)" }} // tailwind.config.js에 등록 안 했을 때
                  >
                    상담 내용을 태그로 분류하여 쉽게 찾을 수 있습니다.
                  </div>
                  <div
                    className="self-stretch text-center text-Color-Scheme-1-Text font-['Nunito_Sans'] text-base font-normal leading-[150%]"
                    style={{ color: "var(--Color-Scheme-1-Text, #000)" }} // tailwind.config.js에 등록 안 했을 때
                  >
                    효율적인 고객 대응을 위해 상담 내용을 태그로 분류할 수
                    있습니다.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-8 flex-1">
              <div
                className="h-[240px] self-stretch aspect-[394.67/240] rounded-none bg-cover bg-center"
                style={{ backgroundImage: `url(${myImg3})` }}
              ></div>
              <div className="flex flex-col items-center gap-8 self-stretch">
                <div className="flex flex-col items-start gap-4 self-stretch">
                  <div
                    className="self-stretch text-center text-Color-Scheme-1-Text font-['Outfit'] text-[28px] font-medium leading-[140%] tracking-[-0.28px]"
                    style={{ color: "var(--Color-Scheme-1-Text, #000)" }}
                  >
                    시간대별, 채널별 통계로 마케팅 전략을 수립하세요.
                  </div>
                  <div
                    className="self-stretch text-center text-Color-Scheme-1-Text font-['Nunito_Sans'] text-base font-normal leading-[150%]"
                    style={{ color: "var(--Color-Scheme-1-Text, #000)" }}
                  >
                    고객 문의 통계를 통해 효과적인 마케팅 전략을 수립할 수 있습니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Layout3;
