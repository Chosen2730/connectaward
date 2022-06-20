import { useContext, useState, createContext } from "react";
import { gallery } from "./data";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [image, showImage] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [newImg, setNewImg] = useState("");
  const [num, setNum] = useState(0);

  const getImage = (img, i) => {
    setNewImg(img);
    setNum(i);
    showImage(true);
  };
  const imageHandler = (e) => {
    const target = e.target;
    if (
      !(
        target.classList.contains("nextPrev") ||
        target.classList.contains("action_btn") ||
        target.classList.contains("newImg")
      )
    ) {
      showImage(false);
    } else {
      return;
    }
  };

  return (
    <AppContext.Provider
      value={{
        isNavOpen,
        image,
        setIsNavOpen,
        getImage,
        newImg,
        imageHandler,
        num,
        setNum,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
