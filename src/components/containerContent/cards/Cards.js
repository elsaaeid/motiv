import React from 'react';
import Items from './card-item/Items';
import cardData from "../../back/card-data/cardData"
import { Row, Col } from "react-bootstrap"
import "./Cards.css"

const cards = () => {


  return (
    <section>
       <Row>
        {cardData.map((item) => (
          <Col key={item.id} item xs={12} sm={12} md={6} lg={6}>
            <Items  item={item} />
          </Col>
        ))}
      </Row>
      </section>
  );
};

export default cards
;

