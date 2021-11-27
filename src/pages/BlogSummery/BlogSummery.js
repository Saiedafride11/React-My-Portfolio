import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import About from '../Home/About/About';

const BlogSummery = (props) => {
    const {img, title, description, course, date} = props.blog;
    return (
        <CardGroup>
            <Card className="m-3">
                <Card.Img variant="top" src={img} style={{width: '100%', height: '12rem'}}/>
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description} </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <small className="text-muted">{course}</small>
                    <small className="text-muted">{date}</small>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
};

export default BlogSummery;