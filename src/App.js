import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactFCCtest from 'react-fcctest';
import {Col, Container, Row} from "react-bootstrap";
import DrumPad from "./DrumPad";
import Display from "./Display";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.drumPadKeyHandler = this.drumPadKeyHandler.bind(this);
    }

    playSound(elementId) {
        let element = document.getElementById(elementId);
        element.play();
    }

    drumPadKeyHandler(keyId) {
        this.playSound(keyId);
    }

    render() {

        return (
            <div className="App">
                <ReactFCCtest/>
                <Container id="drum-machine">
                    <Row>
                        <Col>
                            <DrumPad keyHandler={this.drumPadKeyHandler} />
                        </Col>
                        <Col>
                            <Display/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
