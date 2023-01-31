import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
//import pplInfo from "../Data/pplInfo";
//const [people, setPeople] = useState(pplInfo);
const BirthdayForm = (props) => {
  const { addBirthdayProp } = props; //--Uncokmment once the newBirthdayObj issue is fixed

  const [newName, setText] = useState("");
  const changeText = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };
  const [newAge, setNewAge] = useState("");
  const changeAge = (e) => {
    setNewAge(e.target.value);
    console.log(e.target.value);
  };
  const [newMonth, setNewMonth] = useState("");
  const changeMonth = (e) => {
    setNewMonth(e.target.value);
    console.log(e.target.value);
  };
  const [newPicUrl, setNewPicUrl] = useState("");
  const changePicUrl = (e) => {
    setNewPicUrl(e.target.value);
    console.log(e.target.value);
  };

  const birthdayFormSubmit = (e) => {
    e.preventDefault();

    const newBirthdayObj = {
      newName, //: newName,
      newAge, //: newAge,
      newMonth, //: newMonth,
      newPicUrl, //: newPicUrl,
      id: uuid(),
    };

    // console.log(newBirthdayObj);
    addBirthdayProp(newBirthdayObj);
    //console.log(JSON.stringify(newBirthdayObj));

    //clear the name, age, month & URL after
    // setText("");
    //setNewAge("");
    //setNewMonth("");
    // setNewPicUrl("");
  };

  return (
    <form onSubmit={birthdayFormSubmit}>
      {" "}
      {/*onSubmit={handleSubmit}*/}
      <label>Submit a New Birthday</label>
      <div>
        <label>Name</label>
        <input
          type="text"
          placeholder={"Enter name"}
          name={"personName"}
          onChange={changeText}
          value={newName}

          ////value={personName}

          //Commented because onf the ONCHANGE above
          // onChange={(target) => {
          //   setNewName();
          //   console.log(target.input);
          // }}
        />
      </div>
      <div>
        <label>Age</label>
        <input
          type="text"
          name={"age"}
          placeholder={"Enter Age"}
          value={newAge}
          onChange={changeAge}
        />
      </div>
      <div>
        <label>Birth Month</label>
        <input
          type="text"
          name={"birthMonth"}
          value={newMonth}
          placeholder={"Enter Birth Month"}
          onChange={changeMonth}
        />
      </div>
      <div>
        <label>Url of picture</label>
        <input
          type="text"
          name={"imageUrl"}
          placeholder={"paste full URL"}
          value={newPicUrl}
          onChange={changePicUrl}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BirthdayForm;
