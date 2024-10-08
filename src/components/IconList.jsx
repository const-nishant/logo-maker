import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { icons, Smile } from "lucide-react";

import { iconList } from "@/constants/icon";

function IconList({ selectedIcon }) {
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [openDialog, setOpenDialog] = useState(false);
  const [Icons, setIcons] = useState(
    storageValue ? storageValue?.icon : "smile"
  );
  const Icon = ({ name, color, size }) => {
    const LucidIcon = icons[name];

    if (!LucidIcon) {
      return;
    }
    return <LucidIcon color={color} size={size} />;
  };
  return (
    <div>
      <label>Icon</label>
      <div
        onClick={() => setOpenDialog(true)}
        className="p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] my-2 flex items-center justify-center"
      >
        <Icon name={iconList.name} color={"#000"} size={20} />
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Pick Your Favorite Icon</DialogTitle>
            <DialogDescription>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6">
                {iconList.map((icon, index) => (
                  <div
                    key={index}
                    className="border p-3 flex rounded-sm items-center justify-center cursor-pointer"
                    onClick={() => {
                      selectedIcon(icon);
                      setOpenDialog(false);
                      setIcons(icon.name);
                    }}
                  >
                    <Icon name={icon.name} color={"#000"} size={20} />
                  </div>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default IconList;
