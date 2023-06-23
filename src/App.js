import "./App.css";
import PersonsCard from "./Components/PersonsCard";
import { useState } from "react";
import BirthdayForm from "./Components/BirthdayForm";
import pplInfo from "./Data/pplInfo";
// import TrialArea from "./Components/TrialArea";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [people, setPeople] = useState(pplInfo);
  const [showForm, setShowForm] = useState(false);

  const addBirthday = (newBirthdayEntry) => {
    setPeople([newBirthdayEntry, ...people]);
    console.log(newBirthdayEntry.id, "new birth");
  };
  const deletePerson = (id) => {
    setPeople(people.filter((people) => people.id !== id));
    console.log(id, "should delete from App");
  };

  return (
    <div className="App">
      <div className="wholeReminderBack">
        <div className="wholeReminder">
          <div className="headerDiv">
            <h1>Birthday Reminder App</h1>
            {/* <h2>There are {people.length} Birthdays!</h2> */}
          </div>
          {showForm ? (
            <BirthdayForm
              className="form"
              addBirthdayProp={addBirthday}
              setShowForm={setShowForm}
            />
          ) : null}
          <div className="buttonDiv">
            <button
              className="addButton"
              onClick={() => {
                console.log("You clicked to ADD/Cancel");
                if (showForm === false) {
                  setShowForm(true);
                } else if (showForm === true) {
                  setShowForm(false);
                }
              }}
            >
              Add A Birthday
            </button>
          </div>
          <div>
            {people.map((pplObj) => {
              const { person, age, birthMonth, image, id } = pplObj;

              return (
                <PersonsCard
                  className="personCard"
                  person={person}
                  age={age}
                  key={id}
                  birthMonth={birthMonth}
                  image={image}
                  id={id}
                  deletePerson={deletePerson}
                />
              );
            })}
          </div>
          <div className="clearButton">
            <div className="clearButtonContainer">
              <button
                className="buttonToClear"
                onClick={() => {
                  setPeople([]);
                }}
              >
                Clear All
              </button>
            </div>
          </div>
          {/*  */}
          {/* <TrialArea /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
