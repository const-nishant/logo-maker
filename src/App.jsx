import { useState } from "react";
import BackgroundController from "./components/BackgroundController";
import Header from "./components/Header";
import IconController from "./components/IconController";
import SideNav from "./components/SideNav";
import LogoPreview from "./components/LogoPreview";
import { UpdateStorageContext } from "./context/UpdateStorageContext";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [updateStorage, setUpdateStorage] = useState({});
  const [DownloadIcon, setDownloadIcon] = useState();

  return (
    <>
      <UpdateStorageContext.Provider
        value={{ updateStorage, setUpdateStorage }}
      >
        <Header DownloadIcon={setDownloadIcon} />
        <div className="w-64 fixed">
          <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
        </div>
        <div className="mx-64 grid grid-cols-1 md:grid-cols-7 fixed">
          <div className="md:col-span-3 border h-screen shadow-sm p-5 overflow-auto">
            {selectedIndex === 0 ? (
              <IconController />
            ) : (
              <BackgroundController />
            )}
          </div>
          <div className="md:col-span-3">
            <LogoPreview DownloadIcon={DownloadIcon} />
          </div>
          <div className="md:col-span-1">Ads</div>
        </div>
      </UpdateStorageContext.Provider>
    </>
  );
}

export default App;
