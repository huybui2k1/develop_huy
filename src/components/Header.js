import React from "react";
//images
import Logo from "../assets/logo.png";
const Header = () => {
  return (
    <header className=" py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#">
            {/* <img
              alt="Bui Quang Huy logo"
              srcset="/_next/static/media/dtd-logo.eb6de618.svg 1x, /_next/static/media/dtd-logo.eb6de618.svg 2x"
              src="logo"
              width="48"
              height="48"
              decoding="async"
              data-nimg="1"
              class="w-[48px] md:w-[40px]"
              loading="lazy"
              style="color:transparent"
            /> */}
            <img
              src={Logo}
              width="48"
              height="48"
              decoding="async"
              class="w-[48px] md:w-[40px]"
              alt="Bui Quang Huy logo"
              loading="lazy"
            />
          </a>
          {/* button */}
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
