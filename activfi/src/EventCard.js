import React from "react";
import "./EventCard.css";

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class EventCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createdDate: props.createdDate,
      id: props.id
    };
  }

  handleDelete = e => {
    console.log(this.state);
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://activfi.herokuapp.com/events";
    fetch(proxyurl + url + "/" + this.props.id, {
      method: "DELETE"
    });
  };

  render() {
    // Handle the date conversion
    let date = new Date(this.props.date);

    // Date options
    let dateOptions = {
      weekday: "short",
      month: "numeric",
      day: "numeric",
      year: "numeric"
    };
    return (
      <Card className="container">
        <CardBody>
          <CardTitle className="title">{this.props.title}</CardTitle>
          <CardSubtitle>{this.props.location}</CardSubtitle>
          <CardSubtitle>
            {date.toLocaleDateString("en-US", dateOptions)}
          </CardSubtitle>
          <CardText>{this.props.description}</CardText>
          <CardText>Contact {this.props.creator}</CardText>
        </CardBody>
        <Button onClick={this.handleDelete}>
          Delete
        </Button>
      </Card>
    );
  }
}

export default EventCard;
