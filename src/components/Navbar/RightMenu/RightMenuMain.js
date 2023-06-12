import { GiHamburgerMenu } from "react-icons/gi";
import RightMenuItems from "./RightMenuItems";
import { useState } from "react";
import { menu_data } from "../MiddleMenu/MenuData";
import { AiOutlineRight } from "react-icons/ai";

const RightMenuMain = (props) => {
  const hideenRightMenuHandler = () => {
    props.hideen();
  };
  const showRightMenuHandler = () => {
    props.show();
  };
  return (
    <>
      <div className="flex relative justify-center items-center xl:hidden">
        <span
          className="text-[1.6rem] mr-2 text-[var(--color-default)] cursor-pointer"
          onClick={showRightMenuHandler}
        >
          <GiHamburgerMenu />
        </span>
      </div>
      <nav
        className={`bg-white block xl:hidden  font-sans top-0 h-full 
        xl:overflow-visible overflow-y-scroll text-black  z-10 right-0 
        fixed transition duration-700 sm:w-[19rem] max-sm:w-[16rem] 
      ${props.menu && "translate-x-0"} ${!props.menu && "translate-x-[100%]"}
     `}
      >
        <div
          onClick={hideenRightMenuHandler}
          className=" flex justify-end items-center   uppercase p-4 cursor-pointer border-b w-full"
        >
          <h2 className=" text-[20px] ml-1 font-medium text-gray-700">Back</h2>
          <AiOutlineRight className="text-[12px] ml-2 font-bold" />
        </div>
        <ul className=" font-light">
          {menu_data.map((items, i) => (
            <RightMenuItems key={i} data={items} index={i} />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default RightMenuMain;

// import React from 'react'
// import menuItemsData from '../MiddleMenu/menuItemsData'
// import RightMenuItems from "./RightMenuItems"

// const RightMenuMain = () => {
//   return (
//     <div>
//       <RightMenuItems menuItemsData={menuItemsData} />
//     </div>
//   )
// }

// export default RightMenuMain
