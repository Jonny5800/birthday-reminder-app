import React from "react";

function LiveBirthdayList(props) {
  const { liveList } = props;
  const { person, age, birthMonth, isItBirthday, image } = liveList;
  return (
    <div>
      <h2>The ones below are from livelist</h2>

      <h2>{person}</h2>
      <h2>{age}</h2>
      <h2>{birthMonth}</h2>
      <h2>{image}</h2>
    </div>
  );
}

export default LiveBirthdayList;
