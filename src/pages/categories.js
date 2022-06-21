import { useGlobalContext } from "./../context";
import { BsSearch } from "react-icons/bs";
import cat from "./../images/cat.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
const Categories = () => {
  const {
    categories,
    getCategory,
    input,
    handleChange,
    handleSubmit,
    pageHandler,
  } = useGlobalContext();

  return (
    <main className='future categories'>
      <div className='future_header'>
        <h2>Voting Categories</h2>
      </div>
      <form action='' onSubmit={handleSubmit}>
        <div className='main_input'>
          <input
            value={input}
            onChange={handleChange}
            className='input_place'
            type='text'
            placeholder='Nominee’s Name, Nominee’s Category'
          />
          <BsSearch className='search_icon' />
        </div>
        <Link to='/votes' className='submit_link'>
          <input type='submit' value='Search' className='' />
        </Link>
      </form>
      <div className='grid_4'>
        {categories.map((category, i) => {
          return (
            <div className='vote_cont' key={i}>
              <img src={cat} alt='' />
              <h4>{category}</h4>
              <Link to='/votes'>
                <i
                  onClick={() => {
                    getCategory(category);
                    pageHandler();
                  }}
                >
                  <IoIosArrowRoundForward />{" "}
                </i>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
};
export default Categories;
