import img from "./../images/user.png";
import { useState } from "react";
const Voter = ({ name, votes, category }) => {
  const [qty, setQty] = useState(1);
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
        <button className='btn create_btn'>Vote</button>
      </div>
    </div>
  );
};
export default Voter;
