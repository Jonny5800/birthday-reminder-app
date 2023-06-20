import React from "react";

function PersonsCard(props) {
  const { person, age, birthMonth, image, id, deletePerson } = props;

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
        </div>
      </div>
      <div className="deleteDiv">
        <button
          className="deleteButton"
          onClick={() => {
            deletePerson(id);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default PersonsCard;
