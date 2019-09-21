import React from 'react';
import Frame from './Frame';
import EventCards from './EventCard'
import CreateEvent from './CreateEvent'
import ListOfEvents from './ListOfEvents'
import BackImg from './BackImg'

export default function App() {

  return (
    <div>
      <Frame></Frame>
      <EventCards></EventCards>
      <CreateEvent></CreateEvent>
      <ListOfEvents></ListOfEvents>
      <BackImg></BackImg>
    </div>
  );
}