import { useContext, useState, createContext, useEffect } from "react";
import { gallery, votes } from "./data";

const categories = [...new Set(votes.map((item) => item.category))];

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [image, showImage] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [newImg, setNewImg] = useState("");
  const [num, setNum] = useState(0);
  const [data, setData] = useState(votes);
  const [input, setInput] = useState("");
  const [page, setPage] = useState(true);
  const [purchase, setPurchase] = useState(false);
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    const scroll = window.scrollY;
    if (scroll > 0) {
      window.scrollTo({
        top: 0,
      });
    }
  }, [page]);

  const pageHandler = () => {
    setPage(!page);
  };
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

  const getCategory = (category) => {
    const newData = votes.filter((vote) => vote.category === category);
    setData(newData);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = votes.filter((vote) => {
      const { name, category } = vote;
      const newInput = input.toLowerCase();
      const newName = name.toLowerCase();
      const newCat = category.toLowerCase();
      if (newName.includes(newInput)) {
        return newName;
      } else if (newCat.includes(newInput)) {
        return newCat;
      } else return;
    });
    setData(newData);
    setInput("");
    setPage(!page);
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
        categories,
        data,
        getCategory,
        input,
        setInput,
        handleSubmit,
        setData,
        votes,
        handleChange,
        pageHandler,
        purchase,
        setPurchase,
        alert,
        setAlert,
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
