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
        <MDBCardTitle>App title</MDBCardTitle>
        <MDBCardText>description of the app</MDBCardText>
        <MDBBtn href="#">Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}
