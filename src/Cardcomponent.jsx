import React from 'react'
import './Cardcomponent.css'
import Card from 'react-bootstrap/Card'

function Cardcomponent(props) {
    return (
        <div>
            <Card style={{ width: '19rem', marginLeft: '20px' }}>
                <Card.Img variant="top" src={props.image} style={{ height: '17rem' }} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.about}
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    )
}

export default Cardcomponent;
