import sound from "./../images/speaker.svg";
import trophy from "./../images/trophy.svg";
import dice from "./../images/dice.svg";
import target from "./../images/target.svg";
import group from "./../images/1.png";
import one from "./../images/2.png";
import two from "./../images/3.png";
import three from "./../images/4.png";
import four from "./../images/5.png";
import stripe from "./../images/stripes.png";
import stars from "./../images/stars.svg";
import star from "./../images/star.svg";
import ribbon from "./../images/ribbon.svg";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Center = () => {
  const { pageHandler } = useGlobalContext();
  return (
    <main className='center'>
      <div className='target_div'>
        <h1>our target</h1>
        <div className='grid_4'>
          <div className='target_cont'>
            <img src={sound} alt='' />
            <h3>Awareness</h3>
          </div>
          <div className='target_cont'>
            <img src={target} alt='' />
            <h3>Competition</h3>
          </div>
          <div className='target_cont'>
            <img src={dice} alt='' />
            <h3>Entertainment</h3>
          </div>
          <div className='target_cont'>
            <img src={trophy} alt='' />
            <h3>Recognition</h3>
          </div>
        </div>
      </div>
      <div className='award'>
        <div>
          <img src={group} alt='' />
        </div>
        <div>
          <h2>The Connected Awards</h2>
          <hr className='line' />
          <p className='award_p'>
            The connected is.....It is a long established fact that a reader
            will be distracted by the readable content of a page when looking at
            its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable English.
          </p>
          <Link to='/about' onClick={() => pageHandler()}>
            <button className='btn create_btn'>Learn More</button>
          </Link>
        </div>
      </div>
      <div className='absolute1'>
        <img className='stripe' src={stripe} alt='' />
      </div>
      <div className='award award2' id='award'>
        <div className='techies_img'>
          <img src={one} alt='' />
          <img src={two} alt='' />
          <img src={three} alt='' />
          <img src={four} alt='' />
        </div>
        <div>
          <h2>Celebrated Techies</h2>
          <hr className='line' />
          <p className='award_p'>
            The connected is.....It is a long established fact that a reader
            will be distracted by the readable content of a page when looking at
            its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable English.
          </p>
          <Link to='/techies' onClick={() => pageHandler()}>
            <button className='btn create_btn'>Learn More</button>
          </Link>
        </div>
      </div>
      <div className='absolute1'>
        <img className='stripe stripe2' src={stripe} alt='' />
      </div>
      <div className='talent_div'>
        <div className='talent'>
          <img src={ribbon} alt='' />
          <h2>Promising Talent</h2>
          <p>
            Promising Talent is an individual with less than 5 years experience
            in Nigeria technology ecosystem. Such individual are well recognized
            in their field for impacting with their skills.
          </p>
        </div>
        <div className='talent'>
          <img src={star} alt='' />
          <h2>Intermediate Talent</h2>
          <p>
            Intermediate Talent is an individual with less than 5 years
            experience in Nigeria technology ecosystem. Such individual are well
            recognized in their field for impacting with their skills.
          </p>
        </div>
        <div className='talent'>
          <img src={stars} alt='' />
          <h2>Exceptional Talent</h2>
          <p>
            Exceptional Talent is an individual with more than 5 years
            experience in Nigeria technology ecosystem. Such individual are well
            recognized in their field for impacting with their skills.
          </p>
        </div>
      </div>
    </main>
  );
};
export default Center;
