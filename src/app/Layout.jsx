import React from "react";
import Helmet from "react-helmet";
import Container from 'react-bootstrap/Container';

import Router from "./layout/Router";
import Header from './layout/Header';

const Layout = () => (
    <React.Fragment>
        <Helmet
            title="Bulletin Board"
            meta={[
                {
                    name: "description",
                    content:
                        "Bulletin Board"
                },
                {
                    name: "keywords",
                    content: "bulletin, board"
                }
            ]}
        />
        <Container>
            <Header/>
            <br/>
            <br/>    
            <Router />
        </Container>
    </React.Fragment>
);

export default Layout;
