import "./App.css";
import PersonsCard from "./Components/PersonsCard";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import BirthdayForm from "./Components/BirthdayForm";
import pplInfo from "./Data/pplInfo";

function App() {
  const [showForm, setShowForm] = useState(false);
  //const [addRemoveBtn, SetAddRemoveBtn] = useState("Add Birthday");
  //const [addBirthdayButton, setAddBirthdayButton] = useState("Add A Birthday");

  return (
    <div className="App">
      <h1>Birthday Reminder App</h1>
      <h2>There are {pplInfo.length} Birthdays!</h2>
      {showForm ? <BirthdayForm /> : console.log("")}
      {/* {showForm && <BirthdayForm />} */}
      <div className="buttonDiv">
        <button
          onClick={() => {
            console.log("You clicked to ADD/Cancel");
            if (showForm === false) {
              setShowForm(true);
            } else if (showForm === true) {
              setShowForm(false);
            }
            //setShowForm(!showForm);
          }}
          //  <button
          // onClick={() => {
          //   console.log("You clicked to ADD");
          //   setShowForm(!showForm);
          // }}
        >
          Add A Birthday
        </button>
      </div>
      <div>
        {pplInfo.map((pplObj) => {
          const { person, age, birthMonth, isItBirthday, image, id } = pplObj;
          return (
            <PersonsCard
              className="personCard"
              person={person}
              age={age}
              key={uuid()}
              birthMonth={birthMonth}
              isItBirthday={isItBirthday}
              image={image}
              id={id}
            />
          );
        })}
      </div>

      {/* <div>
        {pplInfo.map((pics) => {
          return <img src={pics.image} />;
        })}
      </div> */}
    </div>
  );
}

export default App;
