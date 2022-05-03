import React from "react";

var today = new Date();
var customiseStyle = { color: "" };
const greetings = ["Good Morning", "Good Afternoon", "Good Evening"];

if (today.getHours() < 12) {
  var greets = greetings[0];
  customiseStyle.color = "red";
} else if (today.getHours() < 18) {
  var greets = greetings[1];
  customiseStyle.color = "violet";
} else {
  var greets = greetings[2];
  customiseStyle.color = "blue";
}

function Body() {
  return <h1 style={customiseStyle}>{greets}</h1>;
}
export default Body;
