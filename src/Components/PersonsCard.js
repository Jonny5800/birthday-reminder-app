import React from "react";

function PersonsCard(props) {
  const { person, age, birthMonth, image, id, deletePerson } = props;

  return (
    <div className="container">
      <div className="personCard">
        <div className="picNDetailsDiv">
          <div className="imageDiv">
            <img className="images" src={image} alt={"altText"} />
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
        </div>{" "}
        <div className="details">
          <h4 className="labelName">{person}</h4>
          <h4 className="labelAge">{age}</h4>
          <h4 className="labelMonth">{birthMonth}</h4>
        </div>
      </div>
    </div>
  );
}

export default PersonsCard;
