import img from "./../images/user.png";
import { useGlobalContext } from "./../context";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
const Voter = ({ name, votes }) => {
  const [qty, setQty] = useState(1);
  const { purchase, setAlert, alert, pageHandler } = useGlobalContext();
  const navigate = useNavigate();
  const voteHandler = () => {
    pageHandler();
    if (purchase) {
      setAlert(true);
    } else {
      navigate("/power");
      setAlert(false);
    }
  };
  return (
    <div className='vote_cont'>
      <img src={img} className='vote_img' alt='' />
      <h4>{name}</h4>
      <p>{votes} Votes</p>
      <div className='count'>
        <p
          onClick={() =>
            setQty((n) => {
              const newQty = n - 1;
              if (newQty < 0) {
                return 0;
              } else {
                return newQty;
              }
            })
          }
        >
          -
        </p>
        <p>{qty}</p>
        <p onClick={() => setQty(qty + 1)}>+</p>
        <button onClick={voteHandler} className='btn create_btn'>
          Vote
        </button>
      </div>
      <div className={alert ? "congrats show_congrats" : "congrats"}>
        <div className='congrats_cont'>
          <i onClick={() => setAlert(false)} className='close'>
            <MdOutlineClose />
          </i>
          <i className='icon_awe'>
            <FaThumbsUp />
          </i>
          <h2>Awesome!</h2>
          <p>
            Thank you for taking the time to vote. We are commited to promoting
            technology in Africa
          </p>
          <button onClick={() => setAlert(false)} className='btn create_btn'>
            Return to voting page
          </button>
        </div>
      </div>
    </div>
  );
};
export default Voter;
