import { useGlobalContext } from "./../context";
import { BsSearch } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const { input, handleChange, votes, setData, setInput, pageHandler } =
    useGlobalContext();

  const handleSubmit = (e) => {
    pageHandler();
    e.preventDefault();
    if (input) {
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
      navigate("votes");
      setData(newData);
      setInput("");
    } else return;
  };
  return (
    <main className='hero'>
      <h1 className='main_header'>
        First Ever Tech Personality Award For Africans in Europe
      </h1>
      <form action='' onSubmit={handleSubmit}>
        <div className='main_input'>
          <input
            className='input_place'
            value={input}
            onChange={handleChange}
            type='text'
            placeholder='Nominee’s Name, Nominee’s Category'
          />
          <BsSearch className='search_icon' />
        </div>

        <input type='submit' value='Search' className='btn create_btn' />
      </form>

      <div
        className='view_cat'
        onClick={() => {
          navigate("/categories");
          pageHandler();
        }}
      >
        <h4>View all categories</h4>
        <IoIosArrowRoundForward className='for_icon' />
      </div>
    </main>
  );
};
export default Hero;
