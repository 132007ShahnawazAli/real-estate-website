import React from "react";

export default function Navbar() {
  return (
    <div className="relative w-full h-fit flex justify-between items-center px-6 sm:px-12 md:px-16 lg:px-20 py-5 z-20">
      <span className="text-white font-medium font-neue text-base">FLUIDGLASS</span>
      <div className="flex items-center gap-48 bg-black/77 px-5 py-2.5 ">
        <p className="font-spline">MENU</p>
        <svg width="19" height="7" viewBox="0 0 19 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="0.5" x2="19" y2="0.5" stroke="white" />
          <line y1="6.5" x2="19" y2="6.5" stroke="white" />
        </svg>
      </div>
      <button className="flex gap-4 items-center cursor-pointer">
        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.17969 0V5.52832H11.9766L9.18457 2.8623L9.12012 2.80176L9.18066 2.73633L9.83301 2.0293L9.89453 1.96191L9.96094 2.02441L14.1523 6.02539L14.2197 6.08984L14.1523 6.15527L9.96094 10.1553L9.89453 10.2178L9.83301 10.1504L9.18066 9.44336L9.12012 9.37793L9.18457 9.31738L11.9766 6.65234H0V0H1.17969Z" fill="white" />
        </svg>
        <span className="text-sm font-spline font-regular">GET A QUOTE</span>
      </button>
    </div>
  );
}
