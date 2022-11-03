import React from 'react'
import { Row, Col } from "react-bootstrap";
import ItemsRecommend from "./ItemsRecommend";
import recommendData from "./recommendData";
import "./RecommendGroups.css"

const RecommendGroups = () => {
  return (
    <section>
      <Row>
        {recommendData.map((item) => (
          <Col key={item.id} item xs={12} sm={6} md={6} lg={4}>
            <ItemsRecommend  item={item} />
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default RecommendGroups
