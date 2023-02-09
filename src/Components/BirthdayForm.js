import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const BirthdayForm = (props) => {
  const { addBirthdayProp, showForm, setShowForm } = props;

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

  /***************/ 
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
    // () => {
    // return setShowForm(false);
    // };
    setShowForm(false);
  };
  /*************************/
  return (
    <form onSubmit={birthdayFormSubmit}>
      {/*  TO GO INSIDE FORM OPENER*/}
      <label>Submit a New Birthday</label>
      {/* Form container */}
      <div className="container">
        <div className="left">
          {/* <label>Birth Month</label> */}
          {/* <label>Url of picture</label> */}
          <div>
            <label>Name</label>
          </div>
          <div>
            <label>Age</label>
          </div>
          <div>
            <label>Birth Month</label>
          </div>
          <div>
            <label>Url of picture</label>
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
              placeholder={"paste full URL"}
              value={image}
              onChange={changePicUrl}
            />
          </div>
        </div>

        {/* form container */}
      </div>
      <div className="buttonDiv">
        <button
          type="submit"
          // onClick={() => {
          //   console.log("submit");
          //   if (showForm === false) {
          //     setShowForm(true);
          //   } else if (showForm === true) {
          //     setShowForm(false);
          //   }
          // }
          // }
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default BirthdayForm;
