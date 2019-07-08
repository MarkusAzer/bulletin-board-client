import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { getBulletin, getBulletinImageUrl } from '../actions/bulletins';

class Bulletin extends Component {
    state = {
        bulletin :{}
    }

    componentDidMount = () => {
        getBulletin(this.props.match.params.id).then((result) => this.setState({bulletin: result.data })).catch((err)=>console.log(err));
    }

    render() {
        const { id, content, title, imageName } = this.state.bulletin;
        return (
            <Jumbotron>
                <Row>
                {(imageName)?<Col xs={12} md={3}> <Image src={getBulletinImageUrl(id)} rounded fluid /> </Col>:``}
                <Col xs={12} md={9}>
                    <h1>{title}</h1>
                    <p>
                        {content}
                    </p>
                </Col>
                </Row>
            </Jumbotron>
        );
    }
}

export default Bulletin;