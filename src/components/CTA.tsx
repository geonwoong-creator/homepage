function CTA() {
  return (
    <div
      className="flex w-[1440px] py-[112px] px-[64px] flex-col items-center gap-[80px]"
      style={{ background: "var(--Color-Scheme-1-Background, #FFF)" }}
    >
      <div className="flex max-w-[1280px] flex-col items-start gap-[80px] self-stretch">
        <div className="flex items-center gap-8 self-stretch">
          <div className="flex flex-col items-start gap-6 flex-1">
            <div
              className="self-stretch text-Color-Scheme-1-Text font-['Outfit'] text-[44px] font-medium leading-[120%] tracking-[-0.44px]"
              style={{ color: "var(--Color-Scheme-1-Text, #000)" }}
            >
              고객 상담의 새로운 기준
            </div>
            <div
              className="self-stretch text-Color-Scheme-1-Text font-['Nunito_Sans'] text-[18px] font-normal leading-[150%]"
              style={{ color: "var(--Color-Scheme-1-Text, #000)" }}
            >
              효율적인 고객 관리를 시작해 보세요!
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div
              className="flex py-3 px-6 justify-center items-center gap-2 border bg-Color-Neutral-Darkest border-Color-Neutral-Darkest"
              style={{
                borderColor: "var(--Color-Neutral-Darkest, #000)",
                background: "var(--Color-Neutral-Darkest, #000)",
              }}
            >
              <div className="text-white font-['Nunito_Sans'] text-base font-normal leading-[150%]">
                가입하기
              </div>
            </div>
            <div
              className="flex py-3 px-6 justify-center items-center gap-2 border"
              style={{ borderColor: "var(--Color-Neutral-Darkest, #000)" }}
            >
              <div
                className="text-Color-Neutral-Darkest font-['Nunito_Sans'] text-base font-normal leading-[150%]"
                style={{ color: "var(--Color-Neutral-Darkest, #000)" }}
              >
                더 알아보기
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CTA;
