import React, { useContext, useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import IconList from "./IconList";

function IconController() {
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [size, setSize] = useState(storageValue ? storageValue?.iconSize : 280);
  const [rotate, setRotate] = useState(
    storageValue ? storageValue?.iconRotate : 0
  );
  const [color, setColor] = useState(
    storageValue ? storageValue?.iconColor : "#fff"
  );
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);
  const [selectedIcon, setSelectedIcon] = useState(
    storageValue ? storageValue?.icon : "smile"
  );

  useEffect(() => {
    const upadtedValue = {
      ...storageValue,
      iconSize: size,
      iconRotate: rotate,
      iconColor: color,
      icon: selectedIcon,
    };
    setUpdateStorage(upadtedValue);
    localStorage.setItem("value", JSON.stringify(upadtedValue));
  }, [size, rotate, color]);

  return (
    <div>
      <div>
        <IconList selectedIcon={(icon) => setSelectedIcon(icon)} />
        <div className="py-2">
          <label className="p-2 flex justify-between items-center">
            Size <span>{size} px</span>
          </label>
          <Slider
            defaultValue={[size]}
            max={512}
            step={1}
            onValueChange={(event) => setSize(event[0])}
          />
        </div>

        <div className="py-2">
          <label className="p-2 flex justify-between items-center">
            Rotate <span>{rotate} °</span>
          </label>
          <Slider
            defaultValue={[rotate]}
            max={360}
            step={1}
            onValueChange={(event) => setRotate(event[0])}
          />
        </div>

        <div className="py-2">
          <label className="p-2 flex justify-between items-center">
            Icon Color
          </label>
          <ColorPickerController
            hideController={true}
            selectedColor={(color) => setColor(color)}
          />
        </div>
      </div>
    </div>
  );
}

export default IconController;
