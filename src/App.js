import "./App.css";
import PersonsCard from "./Components/PersonsCard";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import BirthdayForm from "./Components/BirthdayForm";
import pplInfo from "./Data/pplInfo";
import LiveBirthdayList from "./Components/LiveBirthdayList";

function App() {
  const [people, setPeople] = useState(pplInfo);
  const [showForm, setShowForm] = useState(false);
  const [dunno, setDeletePerson] = useState(people);

  const addBirthday = (newBirthdayEntry) => {
    setPeople([newBirthdayEntry, ...people]);

    //console.log(pplInfo);
    // console.log(people);
    //console.log(newBirthdayEntry);
  };
  /************** */
  const deletePerson = (id) => {
    setPeople(people.filter((item) => item.id !== id));
  };
  // fix between these lines
  /**************** */
  useEffect(() => {
    console.log(people);
  }, [people]);

  {
    let wholeDate = new Date();
    let currentMonth = wholeDate.getMonth();

    // console.log(wholeDate);******
    //console.log(currentMonth);*****

    const monthList = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const dayList = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    function MyComponent() {
      let wholeDate = new Date();
      let currentDay = wholeDate.getDay();

      let currentMonth = wholeDate.getMonth();
      let currentYear = wholeDate.getFullYear();

      useEffect(() => {
        console.log(currentDay);
        console.log("current day");
      }, [currentDay]);
    }
    // useEffect(() => {
    //   console.log(currentYear);
    //   console.log("current year");
    // }, [currentYear]);

    useEffect(() => {
      //This works to log the actual current month
      console.log(monthList[currentMonth]);
      console.log("use effect");
    }, [currentMonth]);
  }

  return (
    <div className="App">
      <div className="headerDiv">
        <h1>Birthday Reminder App</h1>
        <h2>There are {people.length} Birthdays!</h2>
      </div>
      {
        showForm ? (
          <BirthdayForm
            className="form"
            addBirthdayProp={addBirthday}
            setShowForm={setShowForm}
          />
        ) : null //was an empty string ("")
      }
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
              updatedPeopleList={people}
              setDeletePerson={setDeletePerson}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
