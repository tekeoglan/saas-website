import tw from "twin.macro";

// const menuUrl = getUrl("../../assets/menu_small.svg", import.meta.url);

import menuUrl from "../../assets/menu_small.svg";

const Header = () => (
  <header tw="flex justify-between items-center gap-3 px-6 py-8 bg-blue-darker">
    <div tw="flex items-center gap-3">
      <img tw="hover:cursor-pointer pc:hidden" src={menuUrl} alt="menu" />
      <span tw="text-logo text-white-0 hover:cursor-pointer">Crypto.</span>
    </div>
    <nav tw="hidden pc:block">
      <ul
        tw="
					flex justify-between items-center gap-[5.313rem] [li a]:(text-white-0
					font-medium text-base tracking-tight)
				"
      >
        <li>
          <a href="#">Our products</a>
        </li>
        <li>
          <a href="#">Why choose Crypto?</a>
        </li>
        <li>
          <a href="#">Our philosophy</a>
        </li>
      </ul>
    </nav>
    <div>
      <a
        tw="
					hidden mr-3 font-semibold text-base tracking-wide text-white-0 tab:inline
					pc:(mr-7 font-normal)
				"
        href="#"
      >
        Login
      </a>
      <span
        tw="
					p-3 font-semibold text-sm tracking-wide text-white-0
					tab:(border border-solid border-white-0 rounded-lg px-10 py-4
					text-line4)
				"
      >
        Get started
      </span>
    </div>
  </header>
);

export default Header;
