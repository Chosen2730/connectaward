import { gallery } from "../data";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useGlobalContext } from "./../context";
import img from "./../images/dav.jpg";
const Past = () => {
  const { image, getImage, newImg, imageHandler, setNum, num } =
    useGlobalContext();

  const nextPrev = (action) => {
    if (action === "next") {
      setNum((oldNum) => {
        const newNum = oldNum + 1;
        if (newNum > gallery.length - 1) {
          return 0;
        } else {
          return newNum;
        }
      });
    } else if (action === "prev") {
      setNum((oldNum) => {
        const newNum = oldNum - 1;
        if (newNum < 0) {
          return gallery.length - 1;
        } else {
          return newNum;
        }
      });
    }
  };
  return (
    <main className='future'>
      <h2>Photo Gallery</h2>
      <p>Our collage of photos and memories from notable events</p>
      <div className='grid_3 techies'>
        {gallery.map((img, index) => {
          return (
            <div className='img_cont' key={index}>
              <img onClick={() => getImage(img, index)} src={img} alt={index} />
            </div>
          );
        })}
      </div>
      {image && (
        <div className='disp_img' onClick={imageHandler}>
          <div className='disp_gallery'>
            <i onClick={() => nextPrev("prev")} className='nextPrev prev_btn'>
              <GrPrevious className='action_btn' />
            </i>
            <img src={gallery[num]} alt='' className='newImg' />
            <i onClick={() => nextPrev("next")} className='nextPrev next_btn'>
              <GrNext className='action_btn' />
            </i>
          </div>
        </div>
      )}
    </main>
  );
};
export default Past;
