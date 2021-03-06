import logo2 from "./../images/logo2.png";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./../context";
const Footer = () => {
  const { pageHandler } = useGlobalContext();
  return (
    <footer>
      <article className='first_item' onClick={pageHandler}>
        <div className='footer_div'>
          <h2>About</h2>
          <Link to='about'>The Connected magazines</Link>
          <Link to='techies'>Celebrated Techies</Link>
          <Link to='past'>Past editions</Link>
        </div>
        <div className='footer_div'>
          <h2>Legal</h2>
          <Link to='/'>Terms of Service</Link>
          <Link to='/'>Privacy policy</Link>
        </div>
        <div className='footer_div'>
          <h2>Social</h2>
          <a href='/'>LinkedIn</a>
        </div>
        <div className='footer_div'>
          <h2>Contact</h2>
          <a href='tel:2347057219951'>+2347057219951</a>
          <a href='/'>Chat on Whatsapp</a>
          <a href='mailto:connectedawards@gmail.com'>
            connectedawards@gmail.com
          </a>
        </div>
      </article>

      <img src={logo2} alt='' />
      <article className='second_item'>
        <h5>Celebrating Techies Globally</h5>
        <h5>
          © {new Date().getFullYear()} The Connected Awards - All rights
          reserved
        </h5>
      </article>
    </footer>
  );
};
export default Footer;
