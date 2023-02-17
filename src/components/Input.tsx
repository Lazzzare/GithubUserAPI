import React from "react";

const Input = () => {
  return (
    <div>
      <form className="w-full flex flex-row justify-around max-w-[500px] m-auto items-center bg-white pr-4 p-[7px] mt-9 rounded-2xl">
        <svg height="24" width="25" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
            fill="#0079ff"
          />
        </svg>
        <input
          type="text"
          name="user"
          id="user"
          placeholder="Search GitHub username..."
          className="w-[184px] border-none outline-none leading-6 ml-2 text-[13px]"
        />
        <button className="py-[12px] px-[16px] uppercase bg-[#0079FF] font-bold text-white text-base rounded-[10px]">
          Search
        </button>
      </form>
    </div>
  );
};

export default Input;
