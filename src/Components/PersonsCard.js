import React from "react";
import pplInfo from "../Data/pplInfo";
import { useState } from "react";

// come back - pplInfo already declared so causes an error
// const [pplInfo, setPplInfo] = useState("");
function PersonsCard(props) {
  //   const deleteBirthday = (id) => {
  //     setPplInfo(pplInfo.filter((item) => item.id !== id));
  //  };
  const [people, setPeople] = useState(pplInfo);
  const { person, age, birthMonth, image, id } = props;
  const onRemove = (id) => {
    const updatedPeople = people.filter((item) => item.id !== id);
    setPeople(updatedPeople);
  };
  return (
    <div>
      <img className="images" src={image} alt={"altText"} />
      <button
        onClick={() => {
          onRemove(id);
          console.log("You Clicked Delete B-Day:" + id);
          // (id) => {
          //   deleteBirthday(id);
          // };
        }}
      >
        delete
      </button>
      <h4>{person}</h4>
      <h5>{age}</h5>
      <h5>{birthMonth}</h5>

      {/* <h5>{image}</h5> */}
    </div>
  );
}

export default PersonsCard;
//src/Images/jonnyHall.jpeg
