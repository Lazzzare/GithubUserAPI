import React from "react";

const Input = () => {
  return (
    <div>
      <form className="w-full flex items-center bg-white pr-4 p-[7px] mt-9">
        <input
          type="text"
          name="Name"
          placeholder="Search GitHub username..."
        />
      </form>
    </div>
  );
};

export default Input;
