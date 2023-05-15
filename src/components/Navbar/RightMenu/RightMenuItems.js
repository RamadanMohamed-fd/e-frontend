import { useState } from "react";
import {HiPlus} from "react-icons/hi"

const RightMenuItems = ({ menuItemsData }) => {
  console.log(menuItemsData)
  const [open, setOpen] = useState(false);
  return (
    <li className="relative cursor-pointer px-3 py-3">
      <div className="flex justify-between items-center">
        <h3 className="uppercase font-semibold" onClick={() => setOpen(!open)}>{menuItemsData.title}</h3>
        {
          menuItemsData.subMenuItems?.length > 0 && (
            <span><HiPlus/></span>
          )
        }
      </div>
      <ul className={"z-[100] bg-[#fff] list-none font-extralight" + (menuItemsData.depth >= 1 ?  " bg-[pink]" : "bg-[#fff]")}>
        {menuItemsData?.subMenuItems &&
          open &&
          menuItemsData.subMenuItems.map((data, i) => (
            <RightMenuItems menuItemsData={data} />
          ))}
      </ul>
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