import "./App.css";
import PersonsCard from "./Components/PersonsCard";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import BirthdayForm from "./Components/BirthdayForm";
import pplInfo from "./Data/pplInfo";

function App() {
  const [people, setPeople] = useState(pplInfo);
  const [showForm, setShowForm] = useState(false);

  const addBirthday = (newBirthdayEntry) => {
    setPeople([newBirthdayEntry, ...people]);
  };
  // const deletePerson = (id) => {
  //   setPeople(people.filter((people) => people.id !== id));
  //   console.log(id, "should delete from App");
  // };

  const handleDelete = (id) => {
    // setPeople((prevVal)=> )
    const newPeople = people.filter((ident) => ident !== id);
    setPeople(newPeople);
    console.log(id, "handle delete clicked");
    // console.log(pplObj, "object from JS");
  };

  useEffect(() => {
    console.log(people);
  }, [people]);

  return (
    <div className="App">
      <div className="headerDiv">
        <h1>Birthday Reminder App</h1>
        <h2>There are {people.length} Birthdays!</h2>
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
          const {
            person,
            age,
            birthMonth,
            isItBirthday,
            image,
            id,
            deletePerson,
            //handleDelete,
          } = pplObj;

          return people.length > 1 ? (
            <PersonsCard
              className="personCard"
              person={person}
              age={age}
              key={uuid()}
              pplObj={pplObj}
              birthMonth={birthMonth}
              isItBirthday={isItBirthday}
              image={image}
              id={id}
              handleDelete={handleDelete}
              setPeople={setPeople}
              deletePerson={deletePerson}
              updatedPeopleList={people} //the list of people
            />
          ) : (
            []
          );
        })}
      </div>

      <button
        onClick={() => {
          setPeople([""]);
        }}
      >
        Clear ALl
      </button>
    </div>
  );
}

export default App;
