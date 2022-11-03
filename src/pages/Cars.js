import React from 'react'
import { Row, Col } from "react-bootstrap";
import FilterCars from '../components/containerContent/filter-cars/FilterCars';



const cars = () => {
    return (
        <div className='container content-cars'>
            <Row>
                <Col>
                    <h1 className='product-caption mx-3'>Booking</h1>
                </Col>
            </Row>
            <FilterCars />
        </div>
    )
}

export default cars
