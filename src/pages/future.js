import flag from "./../images/flag.png";
const Future = () => {
  return (
    <main className='future'>
      <h2>Future Editions</h2>
      <p>Nominate candidates for future editions</p>
      <div className='grid_4 '>
        <div className='future_cont'>
          <img src={flag} alt='' />
          <h4>East African Edition</h4>
          <button className='btn create_btn'>Nominate</button>
        </div>
        <div className='future_cont'>
          <img src={flag} alt='' />
          <h4>South African Edition</h4>
          <button className='btn create_btn'>Nominate</button>
        </div>
        <div className='future_cont'>
          <img src={flag} alt='' />
          <h4>North African Edition</h4>
          <button className='btn create_btn'>Nominate</button>
        </div>
        <div className='future_cont'>
          <img src={flag} alt='' />
          <h4>West African Edition</h4>
          <button className='btn create_btn'>Nominate</button>
        </div>
      </div>
    </main>
  );
};
export default Future;
