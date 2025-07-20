import logo from "../assets/logo.png";
function Navbar() {
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
                    <div className="flex justify-center items-center gap-1">
                    <div className="text-base font-normal leading-[150%] font-['Nunito_Sans']"style={{ color: "var(--Color-Scheme-1-Text, #000)" }}>고객 상담</div>
                    </div>
                    <div className="flex justify-center items-center gap-1">
                    <div className="text-base font-normal leading-[150%] font-['Nunito_Sans']"style={{ color: "var(--Color-Scheme-1-Text, #000)" }}>서비스 소개</div>
                    </div>
                    <div className="flex justify-center items-center gap-1">
                    <div className="text-base font-normal leading-[150%] font-['Nunito_Sans']"style={{ color: "var(--Color-Scheme-1-Text, #000)" }}>고객 지원</div>
                    </div>
                </div>
                <div className="flex justify-end items-center gap-4 flex-1">
                    <div className="flex px-[20px] py-2 justify-center items-center gap-2" style={{ background: "var(--Color-Neutral-Darkest, #000)" }}>
                        <div className="text-base font-normal leading-[150%] font-['Nunito_Sans']" style={{ color: "var(--Color-White, #FFF)" }}>가입</div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Navbar;