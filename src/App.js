import "./App.css";
import PersonsCard from "./Components/PersonsCard";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import BirthdayForm from "./Components/BirthdayForm";
import pplInfo from "./Data/pplInfo";

function App() {
  const [people, setPeople] = useState(pplInfo);
  const [showForm, setShowForm] = useState(false);

  // --Uncomment this once the object issue is fixed in birthday form
  const addBirthday = (newBirthdayEntry) => {
    console.log(newBirthdayEntry);
    setPeople([newBirthdayEntry, ...people]);
    console.log(pplInfo);
  };
  return (
    <div className="App">
      <h1>Birthday Reminder App</h1>
      <h2>There are {pplInfo.length} Birthdays!</h2>
      {showForm ? (
        <BirthdayForm addBirthdayProp={addBirthday} />
      ) : (
        console.log("")
      )}
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
