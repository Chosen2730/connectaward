import { useGlobalContext } from "./../context";
import { BsSearch } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";
const Hero = () => {
  const { handleSubmit } = useGlobalContext();
  return (
    <main className='hero'>
      <h1 className='main_header'>
        First Ever Tech Personality Award For Africans in Europe
      </h1>
      <form action='' onSubmit={handleSubmit}>
        <div className='main_input'>
          <input
            className='input_place'
            type='text'
            placeholder='Nominee’s Name, Nominee’s Category'
          />
          <BsSearch className='search_icon' />
        </div>
        <input type='submit' value='Search' className='create_btn btn' />
      </form>
      <div className='view_cat'>
        <h4>View all categories</h4>
        <IoIosArrowRoundForward className='for_icon' />
      </div>
    </main>
  );
};
export default Hero;
