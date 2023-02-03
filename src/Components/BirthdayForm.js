import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const BirthdayForm = (props) => {
  const { addBirthdayProp } = props;

  const [person, setText] = useState("");
  const changeText = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };
  const [age, setAge] = useState("");
  const changeAge = (e) => {
    setAge(e.target.value);
    console.log(e.target.value);
  };
  const [birthMonth, setbirthMonth] = useState("");
  const changeMonth = (e) => {
    setbirthMonth(e.target.value);
    console.log(e.target.value);
  };
  const [image, setImage] = useState("");
  const changePicUrl = (e) => {
    setImage(e.target.value);
    console.log(e.target.value);
  };

  const [birthThisMonth, setBirthThisMonth] = useState("");
  const birthMonthTrue = (e) => {
    setBirthThisMonth(e.target.value);
    console.log(e.target.value);
  };

  const birthdayFormSubmit = (e) => {
    e.preventDefault();

    const newBirthdayObj = {
      person, //: person,
      age, //: age,
      birthMonth, //: birthMonth,
      image, //: image,
      id: uuid(),
    };

    addBirthdayProp(newBirthdayObj);

    //clear the name, age, month & URL after
    // setText("");
    //setage("");
    //setbirthMonth("");
    // setimage("");
  };

  return (
    <form onSubmit={birthdayFormSubmit}>
      <label>Submit a New Birthday</label>

      {/* Form container */}
      <div className="container">
        <div className="left">
          {/* <label>Birth Month</label> */}
          {/* <label>Url of picture</label> */}
        </div>

        <div className="right">
          <label>Name</label>
          <div>
            <input
              type="text"
              placeholder={"Enter name"}
              name={"personName"}
              onChange={changeText}
              value={person}
            />
          </div>
          <label>Age</label>
          <div>
            <input
              type="text"
              name={"age"}
              placeholder={"Enter Age"}
              value={age}
              onChange={changeAge}
            />
          </div>{" "}
          <label>Birth Month</label>
          <div>
            <input
              type="text"
              name={"birthMonth"}
              value={birthMonth}
              placeholder={"Enter Birth Month"}
              onChange={changeMonth}
            />
          </div>
          <label>Url of picture</label>
          <div>
            <input
              type="text"
              name={"imageUrl"}
              placeholder={"paste full URL"}
              value={image}
              onChange={changePicUrl}
            />
          </div>
        </div>

        {/* form container */}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default BirthdayForm;

//  <form onSubmit={birthdayFormSubmit}>
//    <label>Submit a New Birthday</label>
//    <div>
//      <label>Name</label>
//      <input
//        type="text"
//        placeholder={"Enter name"}
//        name={"personName"}
//        onChange={changeText}
//        value={person}
//      />
//    </div>
//    <div>
//      <label>Age</label>
//      <input
//        type="text"
//        name={"age"}
//        placeholder={"Enter Age"}
//        value={age}
//        onChange={changeAge}
//      />
//    </div>
//    <div>
//      <label>Birth Month</label>
//      <input
//        type="text"
//        name={"birthMonth"}
//        value={birthMonth}
//        placeholder={"Enter Birth Month"}
//        onChange={changeMonth}
//      />
//    </div>
//    <div>
//      <label>Url of picture</label>
//      <input
//        type="text"
//        name={"imageUrl"}
//        placeholder={"paste full URL"}
//        value={image}
//        onChange={changePicUrl}
//      />
//    </div>
//    <button type="submit">Submit</button>
//  </form>;
