import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";

const Lists = ({dataItems}) => {
  return (
    <Slide>
        <Row className="my-3">

        {
            dataItems.length >= 1 ? ( dataItems.map((arb)=>{
                return (<Col sm="12">
        <div className="my-2">
          <Card className="shadow-sm ">
            <Row className="g-0">
              {/* الصورة */}
              <Col sm={3}>
                <Card.Img
                  src={arb.imgUrl}
                  style={{
                    height: "150px",
                    objectFit: "cover",
                    width: "250px",
                  }}
                />
              </Col>

              {/* النص */}
              <Col sm={9}>
                <Card.Body>
                  <Card.Title>{arb.title}</Card.Title>
                  <Card.Text>
                    {arb.description}
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
      </Col>)
            }) ) : <h1>لا توجد قائمة </h1>
        }
      
    </Row>
    </Slide>	
  );
};

export default Lists;
