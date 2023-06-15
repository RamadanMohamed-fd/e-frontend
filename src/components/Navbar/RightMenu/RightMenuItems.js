import { useState } from "react";
import {
  menu_data,
  Home,
  Arts,
  Handicrafts,
  Handlooms,
  Trending,
  Resource,
} from "../MiddleMenu/MenuData";
import ListItem from "../LeftMenu/ListItem";
const sub = [Home, Arts, Handicrafts, Handlooms, Trending, Resource];
const RightMenuItems = ({ data, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="relative cursor-pointer  px-5 py-3">
      <div
        className=" text-md -ml-6 -mt-1 tracking-wider text-gray-700 font-semibold  "
        onClick={() => setOpen(!open)}
      >
        <ListItem title={data} show={open} />
      </div>

      {open && (
        <ul className={"z-[100] bg-[#fff] list-none "}>
          {sub[index].map((item, i) => (
            <li
              key={i}
              className={` ml-6 text-gray-700 pt-1.5 duration-200 hover:text-[var(--color-default)]
             font-normal `}
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default RightMenuItems;

// import React, { useState } from 'react'

// const RightMenuItems = ({menuItemsData}) => {
//   const [activeItem, setActiveItem] = useState(null);

//   const handleItemClick = (item) => {
//     if (activeItem === item) {
//       setActiveItem(null);
//     } else {
//       setActiveItem(item);
//     }
//   };

//   return (
//     <div>
//       <ul>
//         {menuItemsData.map((item, index) => (
//           <li key={index}>
//             {/* <a href={item.href} > */}
//               <h3 onClick={() => handleItemClick(item)}>{item.title}</h3>
//             {/* </a> */}
//             {activeItem === item && item.subMenuItems && (
//               <RightMenuItems menuItemsData={item.subMenuItems} />
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default RightMenuItems
