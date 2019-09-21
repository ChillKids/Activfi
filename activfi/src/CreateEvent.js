import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Input,
  Button,
  Form,
  Label,
  FormGroup
} from "reactstrap";
import "./EventCard.css";

class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      created_event: {
        event_name: "",
        event_date: "",
        event_creator: "",
        event_description: "",
        event_location: ""
      }
    };
  }

  onChange = e => {
    this.setState({
      created_event: {
        ...this.state.created_event,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state);
  };

  onSubmit = e => {
    // submit the data to the api

    console.log("calling?");
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://activfi.herokuapp.com/events";
    fetch(proxyurl + url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.created_event)
    });
  };
  render() {
    if (this.state.created_event != 0) {
      return (
        <Card className="container" style={{ width: "500px" }}>
          <CardBody>
            <CardTitle>Create an Event</CardTitle>
            <Form>
              <FormGroup>
                <Label>Event Name</Label>
                <Input
                  name="event_name"
                  placeholder="Frisbee at Noon"
                  onChange={this.onChange}
                  required
                ></Input>
                <Label>Event Date</Label>
                <Input
                  name="event_date"
                  type="date"
                  onChange={this.onChange}
                  required
                ></Input>
                <Label>Event Location</Label>
                <Input
                  name="event_location"
                  type="text"
                  placeholder="Porter Park, Rexburg"
                  onChange={this.onChange}
                  required
                ></Input>
                <Label>Event Description</Label>
                <Input
                  name="event_description"
                  type="textarea"
                  placeholder="Meet me at the playground on the east side of the park"
                  onChange={this.onChange}
                  required
                ></Input>
                <Label>Name of Organizer</Label>
                <Input
                  name="event_creator"
                  type="text"
                  placeholder="Joe"
                  onChange={this.onChange}
                  required
                ></Input>
              </FormGroup>
              <Button onClick={this.onSubmit}>Post Event</Button>
            </Form>
          </CardBody>
        </Card>
      );
    }
  }
}

export default CreateEvent;
