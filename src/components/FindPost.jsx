import React, { useState } from "react";
import { FaPersonBurst } from "react-icons/fa6";
// import FindJob from "./SearchJob";
import SearchJob from "./SearchJob";
import PostJob from "./PostJob";
import SearchButton from "../library/SearchButton";
import PostButton from "../library/PostButton";

function FindPost() {
  const [activeComponent, setActiveComponent] = useState(null);

  if (activeComponent === "find") {
    return <SearchJob />;
  }
  if (activeComponent === "post") {
    return <PostJob />;
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[#2F4454]">
      <div className="w-[80%] h-auto flex justify-evenly items-center gap-y-6 border flex-col border border-white">
       
        <div className="w-[70%] h-auto flex justify-evenly items-center ">
          <h1 className="text-5xl text-white">𝙁𝙞𝙣𝙙 𝙮𝙤𝙪𝙧 𝙟𝙤𝙗 𝙖𝙣𝙙 𝙂𝙚𝙩</h1>
          <h1 className="flex justify-evenly items-center text-5xl text-white">
            <FaPersonBurst className="w-[30%] h-[20%] text-5xl text-white" />
            𝙃𝙞𝙧𝙚𝙙
          </h1>
        </div>

        {/* Buttons */}
        <div className="w-[80%] h-[40%] flex justify-center items-center border border-amber-400 gap-x-6">
          <div
            onClick={() => setActiveComponent("find")}
            className="w-[60%] h-[30%] text-white bg-[#2F4454] text-3xl"
          >
            <SearchButton />
          </div>
          <div onClick={() => setActiveComponent("post")}>
            <PostButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindPost;
