import React from "react";
import Frame from "./Frame";
import EventCards from "./EventCard";
import CreateEvent from "./CreateEvent";
import ListOfEvents from "./ListOfEvents";
import BackImg from "./BackImg";
//import Map from "./Map";

export default function App() {
  return (
    <div>
      <Frame></Frame>
      <CreateEvent></CreateEvent>
      <ListOfEvents></ListOfEvents>
    </div>
  );
}
