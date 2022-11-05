import React from 'react'
import Nav from 'react-bootstrap/Nav';


const Items = (props) => {
    return (
            <Nav className='d-flex flex-row justify-between'>
                <span className='nav-icon'>{props.icon}</span>
                <img src={props.img} alt="img" />
            </Nav>
        )
}

export default Items;