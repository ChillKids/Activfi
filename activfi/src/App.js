import React, { Component }  from 'react';
import Frame from './Frame';
import EventCards from './EventCard'
import CreateEvent from './CreateEvent'
import ListOfEvents from './ListOfEvents'

export default function App() {

  return (
    <div>
      <Frame></Frame>
      <EventCards></EventCards>
      <CreateEvent></CreateEvent>
      <ListOfEvents></ListOfEvents>
    </div>
  );
}