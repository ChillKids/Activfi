import React from "react";
import "./EventCard.css";

import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

class EventCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createdDate: props.createdDate
    };
  }

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
      </Card>
    );
  }
}

export default EventCard;
