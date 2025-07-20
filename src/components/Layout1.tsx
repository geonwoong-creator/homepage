import myImg from "../assets/Placeholder Image.png";
function Layout1() {
    return (
        <div className="flex w-full py-[112px] px-[64px] flex-col items-center gap-[80px]">
            <div style={{ background: "var(--Color-Scheme-1-Background, #FFF)" }}>
                <div className="flex max-w-[1280px] flex-col items-start gap-[80px] self-stretch">
                    <div className="flex h-[640px] items-center gap-[80px] self-stretch">
                        <div className="flex flex-col items-start gap-8 flex-1">
                            <div className="flex flex-col items-start gap-8 flex-1">
                                <div className="flex flex-col items-start gap-4 self-stretch">
                                    <div className="flex items-center">
                                        <div className="text-base font-semibold leading-[150%] font-['Nunito_Sans']" style={{ color: "var(--Color-Scheme-1-Text, #000)" }}>
                                             효율성
                                        </div>  
                                    </div>
                                    <div className="flex flex-col items-start gap-6 self-stretch">
                                        <div className="self-stretch text-Color-Scheme-1-Text font-['Outfit'] text-[52px] font-medium leading-[120%] tracking-[-0.52px]" style={{ color: "var(--Color-Scheme-1-Text, #000)" }}>
                                            고객 상담의 새로운 패러다임, SOLVIA
                                        </div>
                                        <div className="self-stretch text-Color-Scheme-1-Text font-['Nunito_Sans'] text-[18px] font-normal leading-[150%]" style={{ color: "var(--Color-Scheme-1-Text, #000)" }}>
                                            SOLVIA는 고객 문의를 통합 관리하여 중소사업자, 병원, 쇼핑몰 등 다양한 분야의 고객에게 최적화된 솔루션을 제공합니다. 태그 분류와 통계 제공을 통해 효율적인 고객 대응과 마케팅 전략 수립을 지원합니다.
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="flex py-3 px-6 justify-center items-center gap-2 border border-Color-Neutral-Darkest" style={{ borderColor: "var(--Color-Neutral-Darkest, #000)" }} >
                                        <div className="justify-start text-Color-Neutral-Darkest text-base font-normal font-['Nunito_Sans'] leading-normal">
                                            더 알아보기
                                        </div>
                                    </div>
                                    <div className="flex py-3 px-6 justify-center items-center gap-2 border border-Color-Neutral-Darkest" style={{ borderColor: "var(--Color-Neutral-Darkest, #000)" }} >
                                        <div className="justify-start text-Color-Neutral-Darkest text-base font-normal font-['Nunito_Sans'] leading-normal">
                                            시작하기
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[640px] flex-1 aspect-[15/16] rounded-none bg-cover bg-center" style={{ backgroundImage: `url(${myImg})` }} >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Layout1;