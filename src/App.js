import "./App.css";
import PersonsCard from "./Components/PersonsCard";
import { useState } from "react";
import BirthdayForm from "./Components/BirthdayForm";
import pplInfo from "./Data/pplInfo";
import TrialArea from "./Components/TrialArea";
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

  const confirmClearBirthdays = () => {
    if (people.length === 0) {
      alert("Nothing left to clear");
    } else {
      const userDecision = window.confirm("Do you really want to clear all?");
      if (userDecision) {
        setPeople([]);
        alert("Birthdays Cleared (but you can refresh)");
      } else {
        alert("Good decision");
      }
    }
  };

  return (
    <div className="App">
      <div className="wholeReminderBack">
        <div className="wholeReminder">
          <div className="headerDiv">
            <h1>Birthday Reminder App</h1>
            {people.length > 0 ? (
              <h2 className="birthdayCount">
                There are {people.length} Birthdays! &#x1F973;
              </h2>
            ) : (
              <h2>No Birthdays! &#x2639; (add one)</h2>
            )}
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
              {showForm ? "Close Form" : "Add A Birthday"}
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
              <button className="buttonToClear" onClick={confirmClearBirthdays}>
                Clear All
              </button>
            </div>
          </div>
          {/*  */}
          <div className="bootCardDiv">
            <TrialArea />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
