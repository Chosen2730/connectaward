import { useGlobalContext } from "../context";
import { MdAssistantNavigation, MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
const Power = () => {
  const { setPurchase, alert, setAlert } = useGlobalContext();
  return (
    <main className='power'>
      <article>
        <div className='future_header'>
          <h2>Increase your voting power</h2>
          <p>Cheer Your Favourite Nominee to Success</p>
        </div>
        <div className='grid_4 power_count'>
          <div className='one'>
            <div>
              <h1>20</h1>
              <p>votes</p>
            </div>
            <h2>$2.50</h2>
            <button
              onClick={() => {
                setPurchase(true);
                setAlert(true);
              }}
              className='btn'
            >
              Buy
            </button>
          </div>
          <div className='two'>
            <div>
              <h1>45</h1>
              <p>votes</p>
            </div>
            <h2>$5</h2>
            <button
              onClick={() => {
                setPurchase(true);
                setAlert(true);
              }}
              className='btn'
            >
              Buy
            </button>
          </div>
          <div className='three'>
            <div>
              <h1>70</h1>
              <p>votes</p>
            </div>
            <h2>$7.50</h2>
            <button
              onClick={() => {
                setPurchase(true);
                setAlert(true);
              }}
              className='btn'
            >
              Buy
            </button>
          </div>
          <div className='four'>
            <div>
              <h1>100</h1>
              <p>votes</p>
            </div>
            <h2>$10</h2>
            <button
              onClick={() => {
                setPurchase(true);
                setAlert(true);
              }}
              className='btn'
            >
              Buy
            </button>
          </div>
        </div>
      </article>
      <div className={alert ? "congrats show_congrats" : "congrats"}>
        <div className='congrats_cont'>
          <i onClick={() => setAlert(false)} className='close'>
            <MdOutlineClose />
          </i>
          <i className='icon_awe'>
            <MdAssistantNavigation />
          </i>
          <h2>Awesome!</h2>
          <p>
            You have successfully Increased your voting power. Go and make your
            favorite candidate win!
          </p>
          <Link to='/votes'>
            <button onClick={() => setAlert(false)} className='btn create_btn'>
              Go to voting page
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};
export default Power;
