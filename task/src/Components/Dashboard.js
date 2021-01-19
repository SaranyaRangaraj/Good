import React, { Component } from "react";
import "../App.css";
import bg_image from '../Components/Images/bgimage.jpg'
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <img
          src={bg_image}
          style={{ width: "100%", position: "absolute", height: "85%" }}
        />
        <div class="row" className="mb-2 pageheading">
          <div
            style={{
              position: "relative",
              color: "bisque",
              justifyContent: "center",
              textAlign: "center",
              top: "250px",
              fontSize: "30px",
            }}
            class="col-sm-12 btn btn-primary"
          >
          Welcome to  Dashboard
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
