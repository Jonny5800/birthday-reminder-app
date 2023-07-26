import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const BirthdayForm = (props) => {
  const { addBirthdayProp, setShowForm } = props;
  const [person, setText] = useState("");
  const [age, setAge] = useState("");
  const [birthMonth, setbirthMonth] = useState("");
  // const [image, setImage] = useState("");

  const changeText = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  const changeAge = (e) => {
    setAge(e.target.value);
    console.log(e.target.value);
  };

  const changeMonth = (e) => {
    setbirthMonth(e.target.value);
    console.log(e.target.value);
  };
  const [image, setImage] = useState("");
  const changeImageUrl = (e) => {
    setImage(e.target.value);
    console.log(e.target.value);
  };

  const birthdayFormSubmit = (e) => {
    e.preventDefault();

    const newBirthdayObj = {
      person,
      age,
      birthMonth,
      image,
      id: uuid(),
    };
    addBirthdayProp(newBirthdayObj);
    setShowForm(false);
  };

  const changeImageDrop = (e) => {
    e.preventDefault();

    if (e.dataTransfer.items) {
      for (let i = 0; i < e.dataTransfer.items.length; i++) {
        const item = e.dataTransfer.items[i];
        if (item.kind === "file" && item.type.startsWith("image/")) {
          const file = item.getAsFile();
          const imageUrl = URL.createObjectURL(file);
          setImage(imageUrl);
          break;
        }
      }
    }
  };

  return (
    <form className="wholeForm" onSubmit={birthdayFormSubmit}>
      <label>
        {" "}
        <h2 className="formTitle">Submit a New Birthday</h2>
      </label>

      <div className="container">
        <div className="left">
          <div>
            <label className="nameTag">Name</label>
          </div>
          <div>
            <label className="ageTag">Age</label>
          </div>
          <div>
            <label className="monthTag">Birth Month</label>
          </div>
          <div>
            <label className="urlTag">Add picture</label>
          </div>
        </div>
        <div className="right">
          <div>
            <input
              type="text"
              placeholder={"Enter name"}
              name={"personName"}
              onChange={changeText}
              value={person}
            />
          </div>
          <div>
            <input
              type="text"
              name={"age"}
              placeholder={"Enter Age"}
              value={age}
              onChange={changeAge}
            />
          </div>
          <div>
            <input
              type="text"
              name={"birthMonth"}
              value={birthMonth}
              placeholder={"Enter Birth Month"}
              onChange={changeMonth}
            />
          </div>
          <div>
            <input
              type="text"
              name={"imageUrl"}
              placeholder={"Drag img or past URL"}
              value={image}
              onChange={changeImageUrl}
              onDrop={changeImageDrop}
              onDragOver={(e) => e.preventDefault()}
            />
          </div>
        </div>
      </div>
      <div className="buttonDiv">
        <button className="submitButton" type="submit">
          {""}
          Submit{""}
        </button>
      </div>
    </form>
  );
};

export default BirthdayForm;
