import React from "react";
import EventCard from "./EventCard";

class ListOfEvents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    };
  }

  componentDidMount() {
    fetch("https://activfi.herokuapp.com/events")
      .then(res => res.json())
      .then(result => {
        console.log(result);
        this.setState({
          events: result
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.events.map(event => {
          return (
            <EventCard
              title={event.event_name}
              location={event.event_location}
              description={event.event_description}
              date={event.event_date}
              createdDate={event.created_at}
              creator={event.event_creator}
            ></EventCard>
          );
        })}
      </div>
    );
  }
}

export default ListOfEvents;
