import { useGlobalContext } from "../context";
import nig from "../images/nig.png";
import { Link } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import google from "../images/google.png";

const Login = () => {
  const navigate = useNavigate();
  const { alert, setAlert, pageHandler } = useGlobalContext();

  const login = (e) => {
    e.preventDefault();
    navigate("/home");
    pageHandler();
  };

  return (
    <main className='power nominate'>
      <article>
        <div className='future_header'>
          <h2>Let’s pick up where we left off yeah?</h2>
          <h4>Log in to your account</h4>
          <p>
            Don’t have an account?{" "}
            <span
              onClick={() => {
                navigate("/signin");
                pageHandler();
              }}
            >
              Sign Up
            </span>
          </p>
        </div>
        <div className=''>
          <form action='' onSubmit={login} className='nominate_form'>
            <div className='google'>
              <img src={google} alt='' />
              <h5>Continue with google</h5>
            </div>

            <div className='alt'>
              <hr />
              <h2>OR</h2>
              <hr />
            </div>
            <label htmlFor='email'>Email Address</label>
            <input type='email' id='email' />
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />

            <input type='submit' value='Login' className='create_btn btn' />
            <h5 className='forgot'>Forgotten password?</h5>
          </form>
        </div>
      </article>
    </main>
  );
};
export default Login;
