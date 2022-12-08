import tw from "twin.macro";

const footerNavStyles = {
  container: tw`grid text-base leading-9 tracking-tight tab:h-min`,
  heading: tw`font-semibold text-black`,
  innerContainer: tw`font-normal text-grey-mid`,
};

const Footer = () => (
  // crypto form
  <section
    tw="
			px-6 grid gap-11 border-t border-solid border-white-lighter pc:(px-12
			py-[5.75rem] grid-flow-col grid-rows-1 grid-cols-3)
		"
  >
    <div tw="flex flex-col mt-12 w-min pc:(row-start-1 mt-0)">
      <a tw="mb-3 w-full font-bold text-line text-black">Crypto</a>
      <p tw="mb-7 font-normal text-base tracking-tight text-grey-mid">
        Get insider investing and crypto resources straight to your inbox every
        week.
      </p>
      <form tw="flex items-center w-max relative">
        <input
          tw="
						px-7 py-4 z-0 border border-solid border-black border-opacity-70
						focus:(outline-none border-blue-darker)
						placeholder:(font-normal text-base tracking-tight text-black)
						tab:pr-12
					"
          placeholder="Your email here"
          type="text"
          name="email"
        ></input>
        <button
          tw="
						absolute inset-y-0 my-auto -right-[.65rem] z-50 bg-blue-darker
						rounded-[10px] px-8 py-[1.1rem] font-bold text-base tracking-tight
						text-white-0 tab:(-right-[4.375rem])
					"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Join
        </button>
      </form>
    </div>
    <div tw="grid tab:(grid-flow-col gap-x-1) pc:(flex justify-start gap-x-14 col-start-2 col-span-2)">
      <div css={footerNavStyles.container}>
        <a css={footerNavStyles.heading}>Our Products</a>
        <ul css={footerNavStyles.innerContainer}>
          <li>
            <a href="#">Wallet</a>
          </li>
          <li>
            <a href="#">Investor Booster</a>
          </li>
          <li>
            <a href="#">Referral Earn</a>
          </li>
          <li>
            <a href="#">Venture Fund</a>
          </li>
          <li>
            <a href="#">ETF Merger</a>
          </li>
        </ul>
      </div>
      <div css={footerNavStyles.container}>
        <a css={footerNavStyles.heading}>Why choose Crypto?</a>
        <ul css={footerNavStyles.innerContainer}>
          <li>
            <a href="#">Crypto vs. Coinbase</a>
          </li>
          <li>
            <a href="#">How we're different</a>
          </li>
          <li>
            <a href="#">Our Philosophy</a>
          </li>
          <li>
            <a href="#">Critical financial reviews</a>
          </li>
          <li>
            <a href="#">What our custormers say</a>
          </li>
        </ul>
      </div>
      <div css={footerNavStyles.container}>
        <a css={footerNavStyles.heading}>Social</a>
        <ul css={footerNavStyles.innerContainer}>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
        </ul>
      </div>
    </div>
    <a tw="mb-7 pc:(mb-0 row-start-2 col-span-2 inline-block)">
      Crypto @ All rights reserved 2020.
    </a>
  </section>
);

export default Footer;
