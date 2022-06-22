import { useGlobalContext } from "../context";
import nig from "../images/nig.png";
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
          <h2>Nominate a candidate for The Connected Award</h2>
          <p>Enter The Nominee’s Information below</p>
        </div>
        <div className=''>
          <form action='' onSubmit={submitNominate} className='nominate_form'>
            <label htmlFor='category'>Award Category</label>
            <select name='' id='category'>
              <option>Best in One</option>
              <option>Best in two</option>
              <option>Best in three</option>
              <option>Best in four</option>
            </select>
            <label htmlFor='name'>Fullname</label>
            <input type='name' id='name' />
            <label htmlFor='email'>Email Address</label>
            <input type='email' id='email' />
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
            <p id='end_p' className='end_p'>
              The First-Ever Tech Personality Awards Recognizing Promising and
              Exceptional African Talents in all Technological Fields. The West
              African Countries include 16 countries of Benin, Burkina Faso,
              Gambia, Ghana, Guinea, Guinea-Bissau, Ivory Coast, Liberia, Mali,
              Mauritania, Niger, Nigeria, Senegal, Sierra Leone, and Togo.
              <br />
              <br />
              For questions, partnerships & enquiries, send us a mail via{" "}
              <a href='mailto:connectedawards@gmail.com'>
                connectedawards@gmail.com.
              </a>
            </p>
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
              navigate("/");
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
