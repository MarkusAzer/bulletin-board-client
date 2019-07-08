import React, { Component } from 'react';

import Bulletin from './components/Bulletin';
import {getAllBulletins} from '../actions/bulletins';

class Home extends Component {

    state = { 
        bulletins : []
    }

    componentDidMount() {
        getAllBulletins().then((result) => this.setState({bulletins: result.data }));
    }

    render() {
        return (
            <Bulletin {...this.state}/>
        );
    }
}

export default Home;