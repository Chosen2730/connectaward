import group2 from "./../images/1.png";
import group from "./../images/6.png";
const About = () => {
  return (
    <main className='future'>
      <h2>The Connected Awards</h2>
      <p>Learn about us</p>
      <img className='group_img' src={group} alt='group' />
      <div className='award'>
        <div>
          <h2>Connecting Techies Globally</h2>
          <hr className='line' />
          <p className='award_p'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div>
          <img src={group2} alt='' />
        </div>
      </div>
    </main>
  );
};
export default About;
