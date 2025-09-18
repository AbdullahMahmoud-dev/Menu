import React from "react";
import { Row, Col } from "react-bootstrap";
const Hero = () => {
  return (
    <Row>
      <Col sm="12">
        <div>
          <h1
            style={{
              justifyContent: "center",
              textAlign: "center",
              paddingTop: "10px",
              fontWeight: "bold",
            }}
          >
            قائمة الطعام
          </h1>
          <div
            style={{
              width: "200px",
              height: "4px",
              backgroundColor: "#00BFFF",
              margin: "10px auto",
              borderRadius: "2px",
            }}
          ></div>{" "}
        </div>
      </Col>
    </Row>
  );
};

export default Hero;
