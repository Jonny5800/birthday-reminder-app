import React from "react";

function PersonsCard(props) {
  const { person, age, birthMonth, image } = props;
  return (
    <div>
      <img className="images" src={image} alt={"altText"} />
      <h4>{person}</h4>
      <h5>{age}</h5>
      <h5>{birthMonth}</h5>

      {/* <h5>{image}</h5> */}
    </div>
  );
}

export default PersonsCard;
//src/Images/jonnyHall.jpeg
