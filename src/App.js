import "./App.css";
import PersonsCard from "./Components/PersonsCard";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import BirthdayForm from "./Components/BirthdayForm";
import pplInfo from "./Data/pplInfo";

function App() {
  // function addPerson() {
  //   const [addOne, setAddOne] = useState("");
  // }
  const [addPerson] = useState();
  return (
    <div className="App">
      <h1>Birthday Reminder App</h1>
      <h2>There are {pplInfo.length} Birthdays!</h2>
      <div className="buttonDiv">
        <button
          onClick={() => {
            console.log("You clicked to REMOVE");
          }}
        >
          Click to Remove
        </button>
        <button
          onClick={() => {
            console.log("You clicked to ADD");
          }}
        >
          Click to Add
        </button>
      </div>
      <div>
        {pplInfo.map((pplObj) => {
          const { person, age, birthMonth, isItBirthday, image } = pplObj;
          return (
            <PersonsCard
              className="personCard"
              person={person}
              age={age}
              birthMonth={birthMonth}
              isItBirthday={isItBirthday}
              image={image}
              key={uuid()}
            />
          );
        })}
      </div>
      <BirthdayForm />
      {/* <div>
        {pplInfo.map((pics) => {
          return <img src={pics.image} />;
        })}
      </div> */}
    </div>
  );
}

export default App;
