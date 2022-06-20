import { techies } from "../data";
const Techies = () => {
  return (
    <main className='future'>
      <h2>Celebrated Techies</h2>
      <p>A look into some of our past winners</p>
      <div className='grid_4 techies'>
        {techies.map((tech, i) => {
          const { img, username, title } = tech;
          return (
            <div className='tech_cont' key={i}>
              <img src={img} alt={title} />
              <h4>{username}</h4>
              <p>{title}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};
export default Techies;
