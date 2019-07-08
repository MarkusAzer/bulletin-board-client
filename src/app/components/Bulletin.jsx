import React from 'react';
import {Link} from "react-router-dom";
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { getBulletinImageUrl } from '../../actions/bulletins';


const Bulletin =(props)=>(
            <CardColumns>
                {props.bulletins.map((el) =><Card key={el.id}>
                    {(el.imageName)?<Card.Img variant="top" src={getBulletinImageUrl(el.id)} fluid="true"/>:``}
                    <Card.Body>
                        <Card.Title>{el.title}</Card.Title>
                        {(el.content)?<Card.Text>{el.content}</Card.Text>:``}
                        <Link to={`/bulletin/${el.id}`}>
                            <Button variant="primary">View Bulletin</Button>
                        </Link>
                    </Card.Body>
                    </Card> )}
            </CardColumns>
        );

export default Bulletin;