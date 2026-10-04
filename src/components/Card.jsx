const Card = ({ number, description }) => {
  return (
    <>
    <div className="stat-box">
      <h2>{number}</h2>
      <p>{description}</p>
    </div>
    </>

  );
}

export default Card;