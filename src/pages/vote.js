import { useGlobalContext } from "./../context";
import { BsSearch } from "react-icons/bs";
import Voter from "./../components/voter";

const Votes = () => {
  const { handleSubmit, categories, data } = useGlobalContext();

  return (
    <main className='future voters'>
      <div className='future_header'>
        <h2>Exceptional Data Analyst</h2>
      </div>
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
      <div className='votes_header'>
        <p>
          You have <span>70</span> votes left
        </p>
        <h4>Increase your voting power Here</h4>
      </div>
      <div className='grid_4'>
        {data.map((vote, i) => {
          return <Voter key={i} {...vote} />;
        })}
      </div>
    </main>
  );
};
export default Votes;
