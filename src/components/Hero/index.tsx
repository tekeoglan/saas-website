import tw from "twin.macro";
import { getUrl } from "../../utils";
const paymentUrl = getUrl(
  "../../assets/clip_payment_small.svg",
  import.meta.url
);

const Hero = () => (
  <section
    tw="
			grid bg-blue-darker px-6 pb-16 tab:(flex flex-row-reverse pt-14)
			pc:(h-full pb-0)
		"
  >
    <div
      tw="
				justify-self-center tab:(w-3/5)
				pc:(relative justify-self-auto pt-[42.75%])
			"
    >
      <img
        tw="w-full pc:(absolute top-0 right-0 z-50)"
        src={paymentUrl}
        alt="payment clip"
      />
    </div>
    <div tw="grid gap-6 tab:(w-2/5 h-min self-center) pc:(self-auto h-full mt-[7.75rem])">
      <a tw="text-white-0 font-semibold text-5xl tracking-tight pc:text-h1">
        Trusted by over 1 million users
      </a>
      <p tw="font-normal text-base text-blue-light tracking-tight tab:mr-14 pc:text-fp">
        Manage your cryptocurrency with ease — our rates are the lowest in the
        industry to buy, sell and manage all in 1 place. The easiest platform to
        convert crypto holdings to cash.
      </p>
    </div>
  </section>
);

export default Hero;
