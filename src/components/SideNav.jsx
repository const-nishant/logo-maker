import { Image, PencilRuler, Shield } from "lucide-react";
import React, { useState } from "react";

function SideNav({ selectedIndex }) {
  const menuList = [
    {
      id: 1,
      name: "Icon",
      icon: PencilRuler,
    },
    {
      id: 2,
      name: "Background",
      icon: Image,
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="border shadow-sm h-screen">
      <div>
        {menuList.map((menu, index) => {
          return (
            <h2
              className={`p-3 text-lg px-7 text-gray-500 flex items-center gap-2 my-2 cursor-pointer hover:bg-primary hover:text-white ${
                activeIndex === index && "bg-primary text-white"
              }`}
              key={index}
              onClick={() => {
                setActiveIndex(index);
                selectedIndex(index);
              }}
            >
              <menu.icon />
              {menu.name}
            </h2>
          );
        })}
      </div>
    </div>
  );
}

export default SideNav;
