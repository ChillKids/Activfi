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
<<<<<<< HEAD
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://activfi.herokuapp.com/events"; // site that doesn’t send Access-Control-*
    fetch(proxyurl + url)
=======
    fetch("https://activfi.herokuapp.com/events")
>>>>>>> ae52bd7b090a4f43248ad43ea4269293c2b329f7
      .then(res => res.json())
      .then(result => {
        console.log(result);
        this.setState({
          events: result
        });
      })
      .catch(err => {
        console.log(err);
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
