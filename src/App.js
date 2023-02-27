import "./App.css";
import PersonsCard from "./Components/PersonsCard";
import { useState } from "react";
import BirthdayForm from "./Components/BirthdayForm";
import pplInfo from "./Data/pplInfo";

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
      <button
        onClick={() => {
          setPeople([]);
        }}
      >
        Clear ALl
      </button>
    </div>
  );
}

export default App;
