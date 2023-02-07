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
  /************** */
  const deletePerson = (id) => {
    setPeople(people.filter((people) => people.id !== id));
    console.log(id, "should delete from App");
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
    /*****const dayList = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];****/

    /*****function MyComponent() {
      let wholeDate = new Date();
      let currentDay = wholeDate.getDay();

      let currentMonth = wholeDate.getMonth();
      let currentYear = wholeDate.getFullYear();

      useEffect(() => {
        console.log(currentDay);
        console.log("current day");
      }, [currentDay]);
    }****/

    // useEffect(() => {
    //   console.log(currentYear);
    //   console.log("current year");
    // }, [currentYear]);

    useEffect(() => {
      //This works to log the actual current month
      //console.log(monthList[currentMonth]); //*******ADD BACK
      //console.log("use effect"); //*******ADD BACK
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
            deletePerson={deletePerson} //************ADD BACK */
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
          const {
            person,
            age,
            birthMonth,
            isItBirthday,
            image,
            id,
            deletePerson,
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
              updatedPeopleList={people} //the list of people
              // deletePerson={deletePerson} //passing the delete funtion

              // setDeletePerson={setDeletePerson}
              //**************

              //deletePerson={deletePerson}
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
