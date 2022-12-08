import tw from "twin.macro";
import { getUrl } from "../../utils";
const CTAUrl = getUrl("../../assets/clip_uploading_small.svg", import.meta.url);

const CTA = () => (
  <section tw="grid justify-items-center items-center tab:(flex justify-center items-center)">
    <img src={CTAUrl} alt="start building your crypto holdings" />
    <div tw="flex flex-col gap-10 my-16 w-min pc:(w-1/3 py-[6rem])">
      <a tw="font-semibold text-line text-black pc:text-h2">
        Start building your crypto holdings today!
      </a>
      <button
        tw="
					px-11 py-4 w-max bg-blue-darker font-bold text-line4 text-white-0
					rounded-[10px] pc:(px-16)
				"
      >
        I’m ready to get started
      </button>
    </div>
  </section>
);

export default CTA;
