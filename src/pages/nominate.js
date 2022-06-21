import { useGlobalContext } from "../context";
import nig from "../images/nig.png";
import { Link } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillFacebook,
} from "react-icons/ai";

const Nominate = () => {
  const navigate = useNavigate();
  const { alert, setAlert, pageHandler } = useGlobalContext();

  const submitNominate = (e) => {
    e.preventDefault();
    setAlert(true);
  };

  return (
    <main className='power nominate'>
      <article>
        <div className='future_header'>
          <h2>Accept your nomination for The Connected Awards</h2>
          <p>Enter The Nominee’s Information below</p>
        </div>
        <div className=''>
          <form action='' onSubmit={submitNominate} className='nominate_form'>
            <h4 className='nominee_pic'>Upload Nominees Photo</h4>
            <div className='img_upload'>
              <input id='input_pic' type='file' />
            </div>
            <label htmlFor='name'>Fullname</label>
            <input type='name' id='name' />
            <label htmlFor='email'>Email Address</label>
            <input type='email' id='email' />
            <label htmlFor='category'>Award Category</label>
            <select name='' id='category'>
              <option>Best in One</option>
              <option>Best in two</option>
              <option>Best in three</option>
              <option>Best in four</option>
            </select>
            <label htmlFor='years'>Years of Exeperience</label>
            <input type='number' />
            <label htmlFor='country'>Country of Origin</label>
            <div className='flag'>
              <select name='' id='country'>
                <option>Nigeria</option>
              </select>
              <img className='count_flag' src={nig} alt='' />
            </div>
            <label htmlFor='country'>Country of Residence</label>
            <div className='flag'>
              <select name='' id='country'>
                <option>Nigeria</option>
              </select>
              <img className='count_flag' src={nig} alt='' />
            </div>
            <br />
            <h2>Social Media Links</h2>
            <br />
            <br />

            <div className='social_cont'>
              <div className='icon_social'>
                <i>
                  <AiFillLinkedin />{" "}
                </i>
                <p>LinkedIn</p>
              </div>
              <input type='text' />
            </div>
            <div className='social_cont'>
              <div className='icon_social'>
                <i>
                  <AiFillInstagram />{" "}
                </i>
                <p>Instagram</p>
              </div>
              <input type='text' />
            </div>
            <div className='social_cont'>
              <div className='icon_social'>
                <i>
                  <AiFillTwitterSquare />{" "}
                </i>
                <p>Twitter</p>
              </div>
              <input type='text' />
            </div>
            <div className='social_cont'>
              <div className='icon_social'>
                <i>
                  <AiFillFacebook />{" "}
                </i>
                <p>Facebook</p>
              </div>
              <input type='text' />
            </div>
            <input type='submit' value='Submit' className='create_btn btn' />
          </form>
        </div>
      </article>
      <div className={alert ? "congrats show_congrats" : "congrats"}>
        <div className='congrats_cont'>
          <i onClick={() => setAlert(false)} className='close'>
            <MdOutlineClose />
          </i>
          <i className='icon_awe'>
            <FaThumbsUp />
          </i>
          <h2>Awesome!</h2>
          <p>Your Nomination has been submitted</p>
          <button
            onClick={() => {
              setAlert(false);
              navigate("/home");
              pageHandler();
            }}
            className='btn create_btn'
          >
            Return to Homepage
          </button>
        </div>
      </div>
    </main>
  );
};
export default Nominate;
