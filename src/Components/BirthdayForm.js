import React from "react";
import { useState } from "react";

const BirthdayForm = () => {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");
  const [newMonth, setNewMonth] = useState("");
  const [newPic, setNewPic] = useState("");
  // Each input needs to "onChange" set the useState functions above

  //below is just copied - so fix it
  // https://epicreact.dev/how-to-type-a-react-form-on-submit-handler/
  function handleSubmit(event) {
    event.preventDefault();
    // onSubmitUsername(event.currentTarget.elements.personName);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Submit a New Birthday</label>
      <div>
        <label>Name</label>
        <input
          type="text"
          name={"personName"}
          onChange={(target) => {
            setNewName();
            console.log(target.input);
          }}
        />
      </div>
      <div>
        <label>Age</label>
        <input
          type="text"
          name={"age"}
          onChange={() => {
            setNewAge();
          }}
        />
      </div>
      <div>
        <label>Birth Month</label>
        <input
          type="text"
          name={"birthMonth"}
          onChange={() => {
            setNewMonth();
          }}
        />
      </div>
      <div>
        <label>Url of picture</label>
        <input
          type="text"
          name={"imageUrl"}
          onChange={() => {
            setNewPic();
          }}
        />
      </div>
      <button type={"submit"}>Submit</button>
    </form>
  );
};

export default BirthdayForm;
