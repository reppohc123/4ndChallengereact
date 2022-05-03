import React from "react";
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();

function Heading() {
  return (
    <div>
      <h1>hello world</h1> <p>{time}</p>
    </div>
  );
}

export default Heading;
