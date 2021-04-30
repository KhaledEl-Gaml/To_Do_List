import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Col from 'react-bootstrap/Col';


class UserView extends React.Component{
    constructor(props){
        super();
        const user = props.user;
    }

    render(){
        return ( 
        <Col sm={3} md={3} lg={3}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.user.avatar} />
            <Card.Body>
                <Card.Title> {this.props.user.first_name} {this.props.user.last_name} </Card.Title>
                
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Email: {this.props.user.email}</ListGroupItem>
            </ListGroup>
            
            </Card>
        </Col>
        );

    }
}

export default UserView;
