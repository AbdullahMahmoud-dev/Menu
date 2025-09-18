import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Roll from "react-awesome-reveal";

const Catigory = ({ filterByCategory, allcategory }) => {
  const onfilter = (categ) => {
    filterByCategory(categ);
  };

  return (
    <Row>
      <Col sm="12" className="d-flex justify-content-center flex-wrap gap-2">
        <Roll>
          {allcategory.length >= 1 ? (
            allcategory.map((categ) => {
              return (
                <Button
                  onClick={() => onfilter(categ)}
                  variant="outline-primary mx-2"
                >
                  {categ}
                </Button>
              );
            })
          ) : (
            <h1>لا توجد تصنيفات </h1>
          )}
        </Roll>
      </Col>
    </Row>
  );
};

export default Catigory;
