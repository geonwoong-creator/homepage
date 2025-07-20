import logo from "../assets/logo.png";

function Navbar() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            className="flex h-[72px] px-[64px] flex-col justify-center items-center self-stretch"
            style={{ background: "var(--Color-Scheme-1-Background, #FFF)" }}
        >
            <div className="flex justify-center items-center gap-8 self-stretch">
                <div className="flex-1 flex justify-start items-start">
                    <img className="w-28 h-9" src={logo} />
                </div>
                <div className="flex items-center gap-8">
                    <button 
                        onClick={() => scrollToSection('layout2')}
                        className="flex justify-center items-center gap-1 hover:opacity-70 transition-opacity"
                    >
                        <div className="text-base font-normal leading-[150%] font-['Nunito_Sans']" style={{ color: "var(--Color-Scheme-1-Text, #000)" }}>고객 상담</div>
                    </button>
                    <button 
                        onClick={() => scrollToSection('layout3')}
                        className="flex justify-center items-center gap-1 hover:opacity-70 transition-opacity"
                    >
                        <div className="text-base font-normal leading-[150%] font-['Nunito_Sans']" style={{ color: "var(--Color-Scheme-1-Text, #000)" }}>서비스 소개</div>
                    </button>
                    <button 
                        onClick={() => scrollToSection('cta')}
                        className="flex justify-center items-center gap-1 hover:opacity-70 transition-opacity"
                    >
                        <div className="text-base font-normal leading-[150%] font-['Nunito_Sans']" style={{ color: "var(--Color-Scheme-1-Text, #000)" }}>고객 지원</div>
                    </button>
                </div>
                <div className="flex justify-end items-center gap-4 flex-1">
                    <a 
                        href="mailto:geonwoongpark@example.com?subject=가입 문의&body=안녕하세요, 가입에 대해 문의드립니다."
                        className="flex px-[20px] py-2 justify-center items-center gap-2 hover:opacity-80 transition-opacity"
                        style={{ background: "var(--Color-Neutral-Darkest, #000)" }}
                    >
                        <div className="text-base font-normal leading-[150%] font-['Nunito_Sans']" style={{ color: "var(--Color-White, #FFF)" }}>가입</div>
                    </a>
                </div>
            </div>

        </div>
    );
}
export default Navbar;