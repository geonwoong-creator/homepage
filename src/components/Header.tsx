import bg from "../assets/header-bg.png";

function Header() {
  return (
    <div className="flex w-full h-[900px] px-[64px] justify-center items-center relative overflow-hidden">
      <img
        src={bg}
        alt="배경"
        className="absolute left-0 top-0 w-full h-full object-cover -z-20"
      />
      <div className="absolute left-0 top-0 w-full h-full bg-black/50 -z-10" />
      <div className="flex max-w-[1280px] flex-col items-start gap-[80px] flex-1">
        <div className="flex max-w-[560px] flex-col items-start gap-8 self-stretch">
            <div className="flex flex-col items-start gap-6 self-stretch">
                <div className="self-stretch text-white font-['Outfit'] text-[72px] font-medium leading-[120%] tracking-[-0.72px]">
                고객 상담을 혁신하는 SOLVIA 시스템
                </div>
                <div className="self-stretch text-white text-lg font-normal font-['Nunito_Sans'] leading-relaxed">
                SOLVIA는 다양한 플랫폼에서의 고객 문의를 통합 관리하여 효율성을 극대화합니다. 중소기업과 병원, 쇼핑몰 등 다양한 분야의 최적화된 솔루션으로 고객 경험을 향상시킵니다.
                </div>
            </div>
            <div className="inline-flex justify-start items-start gap-4">
                <div className="px-6 py-3 bg-white outline outline-1 outline-white flex justify-center items-center gap-2">
                    <div className="justify-start text-neutral-darkest text-base font-normal font-['Nunito_Sans'] leading-normal">시작하기</div>
                </div>
                <div className="px-6 py-3 outline outline-1 outline-white flex justify-center items-center gap-2">
                    <div className="justify-start text-white text-base font-normal font-['Nunito_Sans'] leading-normal">더 알아보기</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Header;