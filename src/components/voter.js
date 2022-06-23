import img from "./../images/user.png";
import { useGlobalContext } from "./../context";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { BiError } from "react-icons/bi";
const Voter = ({ name, votes, setVoteRem, voteRem }) => {
  const [qty, setQty] = useState(1);
  const [voteCount, setVoteCount] = useState(votes);
  const [error, setError] = useState(false);
  const { purchase, setAlert, alert, pageHandler, setPurchase } =
    useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (voteRem < 1) {
      console.log("first");
      setPurchase(true);
      setError(true);
    }
  }, [voteRem]);

  const voteHandler = () => {
    if (purchase) {
      setAlert(true);
      pageHandler();
    } else {
      navigate("/power");
      setAlert(false);
      pageHandler();
    }
  };
  return (
    <div className='vote_cont'>
      <img src={img} className='vote_img' alt='' />
      <h4>{name}</h4>
      <p>{voteCount} Votes</p>
      <div className='count'>
        <p
          onClick={() => {
            setQty((n) => {
              const newQty = n - 1;
              if (newQty < 0) {
                return 0;
              } else {
                return newQty;
              }
            });
            setVoteRem(voteRem + 1);
          }}
        >
          -
        </p>
        <p>{qty}</p>
        <p
          onClick={() => {
            setQty(qty + 1);
            setVoteCount(voteCount + 1);
            setVoteRem((n) => {
              const newN = n - 1;
              if (newN < 0) {
                return 0;
              } else {
                return newN;
              }
            });
          }}
        >
          +
        </p>
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
      <div className={error ? "congrats show_congrats" : "congrats"}>
        <div className='congrats_cont'>
          <i onClick={() => setAlert(false)} className='close'>
            <MdOutlineClose />
          </i>
          <i className='icon_awe'>
            <BiError />
          </i>
          <h2>Oops!</h2>
          <p>
            You don't have enough purchasing power, Increase your voting power
            befroe you continue.
          </p>
          <button
            onClick={() => {
              setAlert(false);
              navigate("/power");
            }}
            className='btn create_btn'
          >
            Increase Voting power
          </button>
        </div>
      </div>
    </div>
  );
};
export default Voter;
