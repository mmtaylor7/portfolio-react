import "./AppCard.css";
import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";

// {
//   project: {
//     id: 1,
//     image: doomsday,
//     projectTitle: "Doomsday Tracker",
//     description:
//       "An end-of-the-world themed tracker that follows natural disaster data, COVID-19 data and global warming data",
//     github: "https://github.com/mmtaylor7/Doomsday_Tracker",
//     website: "https://mmtaylor7.github.io/Doomsday_Tracker/",
//   };
// }

export default function AppCard(props) {
  return (
    <MDBCard className="app-card">
      {/* <MDBRipple
        rippleColor="light"
        rippleTag="div"
        className="bg-image hover-overlay"
      > */}
      <MDBCardImage src={props.project.image} fluid alt="..." />
      <a>
        <div
          className="mask"
          style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
        ></div>
      </a>
      {/* </MDBRipple> */}
      <MDBCardBody>
        <MDBCardTitle className="app-title">
          {props.project.projectTitle}
        </MDBCardTitle>
        <MDBCardText className="app-description">
          {props.project.description}
        </MDBCardText>
        <Button href={props.project.website} className="project-buttons">
          Website
        </Button>
        <Button href={props.project.github} className="project-buttons">
          GitHub
        </Button>
      </MDBCardBody>
    </MDBCard>
  );
}
