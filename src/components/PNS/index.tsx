import tw from "twin.macro";
import { getUrl } from "../../utils";
const PNSUrl = getUrl("../../assets/clip_sign_up_small.svg", import.meta.url);

const PNS = () => (
  <section
    tw="
			grid px-6 gap-3 bg-white-light tab:(grid-flow-col grid-cols-2 items-center)
			pc:(px-12 gap-0 grid-cols-3)
		"
  >
    <div tw="justify-self-center pc:(relative justify-self-auto w-full h-full pt-[100%])">
      <img
        tw="object-cover my-6 pc:(absolute my-0 w-full h-full top-[-19.5%] left-0 z-50)"
        src={PNSUrl}
        alt="privacy and security"
      />
    </div>
    <div tw="grid gap-1 tab:pr-11 pc:gap-5">
      <a tw="font-semibold text-line3 text-black pc:text-h3">
        Privacy and security prioritised in from the beginning.
      </a>
      <p tw="font-normal text-base tracking-tight text-grey-mid pc:text-p">
        Our technology is built on top of Cloud7 propriertary - the most trusted
        platform when it comes to cyber security. NASA, the FBI and Amazon use
        this very platform so you are in safe hands.
      </p>
      <a tw="mb-16 font-bold text-sm tracking-tight text-black tab:mb-0 pc:text-h5">
        Trusted by 1,000,000+ users
      </a>
    </div>
  </section>
);

export default PNS;
