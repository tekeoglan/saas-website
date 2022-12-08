import tw from "twin.macro";
import clientImgUrl from "../../assets/rick_image_small.jpg";

// const clientImgUrl = getUrl(
//   "../../assets/rick_image_small.jpg",
//   import.meta.url
// );

interface HoldingProps {
  coin: string;
  percentage: number;
  performanceType: "gain" | "lose";
  total: number;
}

const holdings: HoldingProps[] = [
  { coin: "Bitcoin", percentage: 8.5, performanceType: "gain", total: 20603 },
  { coin: "Ethereum", percentage: 2.5, performanceType: "gain", total: 5300 },
  { coin: "Litecoin", percentage: 0.5, performanceType: "lose", total: 730 },
];

const Holding = ({
  coin,
  percentage,
  performanceType,
  total,
}: HoldingProps) => (
  <div>
    <div tw="flex items-center gap-4 mb-2">
      <span tw="font-semibold text-line text-black pc:text-h3">{coin}</span>
      <span
        css={[
          tw`px-[2px] font-semibold text-sm tracking-tight border border-solid rounded-sm`,
          performanceType === "gain"
            ? tw`border-green-mid text-green-mid`
            : tw`border-red-mid text-red-mid`,
        ]}
      >
        {`${performanceType === "gain" ? "+" : "-"}${percentage}%`}
      </span>
    </div>
    <a tw="font-normal text-line2 text-grey-mid pc:text-h4">{`$${total.toLocaleString()}`}</a>
  </div>
);

const Performance = () => (
  <section tw="grid py-16 tab:(row-span-1 col-span-2) pc:(row-span-1 col-span-2)">
    <a
      tw="
				pb-5 font-bold text-sm tracking-tight text-black border-b border-solid
				border-white-lighter pc:(text-h5 inline-block)
			"
    >
      Ricks top 3 holdings - Daily performance
    </a>
    <div tw="grid mt-[4.5rem] gap-12 tab:grid-flow-col">
      {holdings.map((holding, index) => {
        return <Holding key={index} {...holding} />;
      })}
    </div>
  </section>
);

const Testimonial = () => (
  <section
    tw="
			grid px-6 pt-11 border-t border-solid border-white-lighter
			tab:(grid-cols-2 grid-rows-1) pc:(grid-flow-col grid-cols-3 grid-rows-1 gap-[4.75rem] h-min px-12 py-[6.375rem])
		"
  >
    <img
      tw="
				justify-self-center object-contain rounded-lg tab:(h-min col-span-1)
				pc:(justify-self-auto h-[70%] object-top row-span-2)"
      src={clientImgUrl}
      alt="client testimonial"
    />
    <div tw="grid tab:(col-span-1 mr-12 mt-12) pc:(mt-0 col-span-2 row-span-1)">
      <a tw="my-8 font-semibold text-line text-black inline-block pc:text-h2">
        How Rick used <span tw="text-blue-lighter">Crypto</span> to manage and
        grow his portofolio by 1200%
      </a>
      <a tw="mb-2 font-normal text-line2 text-black inline-block">
        Ricks Story
      </a>
      <p tw="font-normal text-base tracking-tight text-grey-mid pc:columns-2">
        Rick is a lead developer at startup Shackle. Adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat.
        <br />
        <br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
        <br />
        <br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    <Performance />
  </section>
);

export default Testimonial;
