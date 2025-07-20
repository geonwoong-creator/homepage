import logo from "../assets/logo.png";
function Footer() {
  return (
    <div
      className="flex w-[1440px] py-[80px] px-[64px] flex-col items-center gap-[80px]"
      style={{ background: "var(--Color-Scheme-1-Background, #FFF)" }}
    >
      <div className="flex max-w-[1280px] flex-col items-start gap-[80px] self-stretch">
        <div className="flex items-center gap-8 self-stretch">
          <div className="flex flex-col items-start gap-6 flex-1">
            <div
              className="w-[115px] h-[36px] bg-cover bg-center"
              style={{ backgroundImage: `url(${logo})` }}
            ></div>
          </div>
          <div className="flex justify-end items-center gap-3 flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="w-6 h-6"
            >
              <path
                d="M22 12.3038C22 6.74719 17.5229 2.24268 12 2.24268C6.47715 2.24268 2 6.74719 2 12.3038C2 17.3255 5.65684 21.4879 10.4375 22.2427V15.2121H7.89844V12.3038H10.4375V10.0872C10.4375 7.56564 11.9305 6.1728 14.2146 6.1728C15.3088 6.1728 16.4531 6.36931 16.4531 6.36931V8.84529H15.1922C13.95 8.84529 13.5625 9.6209 13.5625 10.4166V12.3038H16.3359L15.8926 15.2121H13.5625V22.2427C18.3432 21.4879 22 17.3257 22 12.3038Z"
                fill="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 3.24268H8C5.23858 3.24268 3 5.48126 3 8.24268V16.2427C3 19.0041 5.23858 21.2427 8 21.2427H16C18.7614 21.2427 21 19.0041 21 16.2427V8.24268C21 5.48126 18.7614 3.24268 16 3.24268ZM19.25 16.2427C19.2445 18.0353 17.7926 19.4872 16 19.4927H8C6.20735 19.4872 4.75549 18.0353 4.75 16.2427V8.24268C4.75549 6.45003 6.20735 4.99817 8 4.99268H16C17.7926 4.99817 19.2445 6.45003 19.25 8.24268V16.2427ZM16.75 8.49268C17.3023 8.49268 17.75 8.04496 17.75 7.49268C17.75 6.9404 17.3023 6.49268 16.75 6.49268C16.1977 6.49268 15.75 6.9404 15.75 7.49268C15.75 8.04496 16.1977 8.49268 16.75 8.49268ZM12 7.74268C9.51472 7.74268 7.5 9.7574 7.5 12.2427C7.5 14.728 9.51472 16.7427 12 16.7427C14.4853 16.7427 16.5 14.728 16.5 12.2427C16.5027 11.0484 16.0294 9.90225 15.1849 9.05776C14.3404 8.21327 13.1943 7.74002 12 7.74268ZM9.25 12.2427C9.25 13.7615 10.4812 14.9927 12 14.9927C13.5188 14.9927 14.75 13.7615 14.75 12.2427C14.75 10.7239 13.5188 9.49268 12 9.49268C10.4812 9.49268 9.25 10.7239 9.25 12.2427Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-center gap-8 self-stretch">
          <div
            className="w-[1280px] h-px bg-Color-Scheme-1-Border"
            style={{ background: "var(--Color-Scheme-1-Border, #000)" }}
          />
          <div className="flex items-start gap-6">
            <div
              className="text-Color-Scheme-1-Text font-['Nunito_Sans'] text-sm font-normal leading-[150%]"
              style={{ color: "var(--Color-Scheme-1-Text, #000)" }}
            >
              © 2025 SOLVIA 모든 권리 보유
            </div>
            <div
              className="text-Color-Scheme-1-Text font-['Nunito_Sans'] text-sm font-normal leading-[150%] underline decoration-solid"
              style={{ color: "var(--Color-Scheme-1-Text, #000)" }}
            >
              개인정보 처리방침
            </div>
            <div
              className="text-Color-Scheme-1-Text font-['Nunito_Sans'] text-sm font-normal leading-[150%] underline decoration-solid"
              style={{ color: "var(--Color-Scheme-1-Text, #000)" }} // tailwind.config.js에 등록 안 했을 때
            >
              쿠키 설정
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
