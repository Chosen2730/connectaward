import flag from "./../images/flag.png";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
const Future = () => {
  const { pageHandler } = useGlobalContext();
  return (
    <main className='future'>
      <div className='future_header'>
        <h2>Future Editions</h2>
        <p>Nominate candidates for future editions</p>
      </div>
      <div className='grid_4 '>
        <div className='future_cont'>
          <img src={flag} alt='' />
          <h4>East African Edition</h4>
          <Link to='/nominate'>
            <button onClick={pageHandler} className='btn create_btn'>
              Nominate
            </button>
          </Link>
        </div>
        <div className='future_cont'>
          <img src={flag} alt='' />
          <h4>South African Edition</h4>
          <Link to='/nominate'>
            <button onClick={pageHandler} className='btn create_btn'>
              Nominate
            </button>
          </Link>
        </div>
        <div className='future_cont'>
          <img src={flag} alt='' />
          <h4>North African Edition</h4>
          <Link to='/nominate'>
            <button onClick={pageHandler} className='btn create_btn'>
              Nominate
            </button>
          </Link>
        </div>
        <div className='future_cont'>
          <img src={flag} alt='' />
          <h4>West African Edition</h4>
          <Link to='/nominate'>
            <button onClick={pageHandler} className='btn create_btn'>
              Nominate
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};
export default Future;
