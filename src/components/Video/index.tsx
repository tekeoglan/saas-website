import tw from "twin.macro";
import { getUrl } from "../../utils";
const videoUrl = getUrl("../../assets/screen_demo_small.svg", import.meta.url);

const Video = () => (
  <section tw="grid px-6 py-[4.5rem] pc:(flex items-center gap-[9.75rem] px-12 pt-[8.125rem])">
    <div
      tw="
				grid tab:(flex flex-col justify-self-center text-center w-min)
			pc:(w-[55%] h-min justify-self-auto text-left gap-5 [p]:pr-16)"
    >
      <a tw="mb-5 font-semibold text-line text-black tab:w-max pc:(w-fit text-h2 m-auto)">
        As powerful or as simple as you need it be
      </a>
      <p
        tw="
					mb-14 font-normal text-base tracking-tight text-grey-mid tab:mx-7
					pc:(text-p m-auto)
				"
      >
        Customise your mobile and desktop apps to show as much data as you need
        to make the best fininacial investments. Ease of use has been baked in
        from day 1.
      </p>
      <p tw="hidden text-p text-grey-mid pc:block">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button
        tw="
					hidden w-max bg-blue-darker rounded-[10px] font-bold text-line4
					text-white-0 px-11 py-5 pc:inline-block
				"
      >
        Watch the demo
      </button>
    </div>
    <img tw="justify-self-center w-full object-cover" src={videoUrl} />
  </section>
);

export default Video;
