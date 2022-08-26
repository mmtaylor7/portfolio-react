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

export default function AppCard() {
  return (
    <MDBCard className="app-card">
      {/* <MDBRipple
        rippleColor="light"
        rippleTag="div"
        className="bg-image hover-overlay"
      > */}
      <MDBCardImage
        src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
        fluid
        alt="..."
      />
      <a>
        <div
          className="mask"
          style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
        ></div>
      </a>
      {/* </MDBRipple> */}
      <MDBCardBody>
        <MDBCardTitle className="app-title">App title</MDBCardTitle>
        <MDBCardText className="app-description">
          description of the app
        </MDBCardText>
        <MDBBtn href="#" className="project-buttons">
          Website
        </MDBBtn>
        <MDBBtn href="#" className="project-buttons">
          GitHub
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}
