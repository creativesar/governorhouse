import React from "react";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="sticky top-0 z-30 w-full bg-[#044E83] backdrop-blur-3xl print:hidden">
      {/* NavBar Content */}
      <div className="m-auto flex h-16 w-[95%] items-center justify-around md:h-20 lg:w-[90%] xl:w-[1300px]">
        <a href="/">
          <Image
            alt="logo"
            width={90}
            height={113}
            className="mt-14 w-[70px] sm:mt-20 sm:w-[80px] md:w-[90px]"
            src="/images/logo.png"
          />
        </a>
        <h1 className="text_shadow hidden text-[15px] font-extrabold text-[#b9d8f3] lg:block xl:text-xl">
          Tuition Free Education Program on Latest Technologies
        </h1>
        <div className="hidden items-center gap-5 text-[#FAF9F6] sm:flex lg:gap-8">
          <a href="/">
            <div className="menu_btns capitalize">Home</div>
          </a>
          <a href="apply">
            <div className="menu_btns capitalize">Apply</div>
          </a>
          <a href="jobs">
            <div className="menu_btns capitalize">Jobs</div>
          </a>
          <a href="results">
            <div className="menu_btns capitalize">Results</div>
          </a>
          <div className="relative">
            <button
              type="button"
              className="chakra-button chakra-menu__menu-button css-4xx2wk flex items-center justify-between" // Added flex for alignment
              id="menu-button-:R2ibaH1:"
              aria-expanded="false"
              aria-haspopup="menu"
              aria-controls="menu-list-:R2ibaH1:"
            >
              <span className="css-xl71ch">Courses</span>
              <span className="chakra-button__icon ml-1">
                {/* Down Arrow Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"  // Adjust size for smaller icon
                  height="16" // Adjust size for smaller icon
                  fill="currentColor"
                >
                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path> {/* Simple down arrow */}
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
