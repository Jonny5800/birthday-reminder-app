import React from "react";
import pplInfo from "../Data/pplInfo";
import { useState } from "react";

function PersonsCard(props) {
  const {
    person,
    age,
    birthMonth,
    image,
    id,
    isItBirthday,
    deletePerson,
    handleDelete, // from second delete button
    pplObj,
    updatedPeopleList,
  } = props;

  return (
    <div className="personCard">
      <div className="picNDetailsDiv">
        <div className="imageDiv">
          <img className="images" src={image} alt={"altText"} />
        </div>

        <div className="details">
          <h4 className="labelName">{person}</h4>
          <h5 className="labelAge">{age}</h5>
          <h5 className="labelMonth">{birthMonth}</h5>
          {/* <h5>{isItBirthday}</h5> This needs adding elsewe. Conditional */}
        </div>
      </div>
      <div className="deleteDiv">
        {/* <button
          onClick={() => {
            deletePerson(pplObj.id);
          }}
        >
          delete
        </button> */}
        <button onClick={handleDelete}>DELETER</button>
      </div>
    </div>
  );
}

export default PersonsCard;
