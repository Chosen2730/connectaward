import { useGlobalContext } from "../context";
import nig from "../images/nig.png";
import { Link } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import google from "../images/google.png";

const Signin = () => {
  const navigate = useNavigate();
  const { setAlert, pageHandler } = useGlobalContext();

  const submitNominate = (e) => {
    e.preventDefault();
    navigate("/home");
    pageHandler();
    setAlert(true);
  };

  return (
    <main className='power nominate'>
      <article>
        <div className='future_header'>
          <h2>Time to vote your favourite Techie, let's make this amazing!</h2>
          <h4>Create an Account</h4>
          <p>
            Have an account?{" "}
            <span
              onClick={() => {
                navigate("/");
                pageHandler();
              }}
            >
              Log in
            </span>
          </p>
        </div>
        <div className=''>
          <form action='' onSubmit={submitNominate} className='nominate_form'>
            <div className='google'>
              <img src={google} alt='' />
              <h5>Continue with google</h5>
            </div>

            <div className='alt'>
              <hr />
              <h2>OR</h2>
              <hr />
            </div>
            <label htmlFor='name'>Fullname </label>
            <input type='name' id='name' />
            <label htmlFor='email'>Email Address</label>
            <input type='email' id='email' />
            <label htmlFor='number'>Phone number </label>
            <input type='number' id='number' />
            <label htmlFor='password'>Set Password</label>
            <input type='password' id='password' />
            <label htmlFor='gender'>Gender</label>
            <select name='' id='gender'>
              <option value=''>Male</option>
              <option value=''>Female</option>
            </select>
            <p className='forgot'>
              By registering you agree to Techtrend Africa's{" "}
              <span>Terms of Use</span> and
              <span> Privacy Policy</span>
            </p>
            <input type='submit' value='Signin' className='create_btn btn' />
          </form>
        </div>
      </article>
    </main>
  );
};
export default Signin;
