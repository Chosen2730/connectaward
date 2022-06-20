import { useGlobalContext } from "./../context";
import { BsSearch } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
const Hero = () => {
  const { handleSubmit, input, setInput } = useGlobalContext();
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
            onChange={(e) => setInput(e.target.value)}
            type='text'
            placeholder='Nominee’s Name, Nominee’s Category'
          />
          <BsSearch className='search_icon' />
        </div>
        <Link to='/votes' className='submit_link'>
          <input type='submit' value='Search' />
        </Link>
      </form>
      <Link to='/categories'>
        <div className='view_cat'>
          <h4>View all categories</h4>
          <IoIosArrowRoundForward className='for_icon' />
        </div>
      </Link>
    </main>
  );
};
export default Hero;
