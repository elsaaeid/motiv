import React from 'react'
import Nav from 'react-bootstrap/Nav';


const Items = (props) => {
    return (
            <Nav className='nav-item'>
                <Nav.Item className='d-flex justify-end align-middle'>
                <span className=' mx-20 nav-icon'>{props.icon}</span>
                </Nav.Item >
                <Nav.Item className='d-flex justify-end align-middle'>
                <span className='nav-img'><img src={props.img} alt="img" /></span>
                </Nav.Item>
            </Nav>
        )
}

export default Items;