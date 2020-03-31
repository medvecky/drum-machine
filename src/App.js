import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactFCCtest from 'react-fcctest';
import {Col, Container, Row} from "react-bootstrap";
import DrumPad from "./DrumPad";
import Display from "./Display";

let keySampleMap = new Map();
keySampleMap['Q'] = "Heater-1";
keySampleMap['W'] = "Heater-2";
keySampleMap['E'] = "Heater-3";
keySampleMap['A'] = "Heater-4";
keySampleMap['S'] = "Clap";
keySampleMap['D'] = "Open-HH";
keySampleMap['Z'] = "Kick-n'-Hat";
keySampleMap['X'] = "Kick";
keySampleMap['C'] = "Closed-HH";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sample: ""
        };

        this.drumPadKeyHandler = this.drumPadKeyHandler.bind(this);
        this.keyboardHandler = this.keyboardHandler.bind(this);
    }

    keyboardHandler(e) {
        let keyPressed = e.key.toString().toUpperCase();
        switch (keyPressed) {
            case "Q":
            case "W":
            case "E":
            case "A":
            case "S":
            case "D":
            case "Z":
            case "X":
            case "C":
                this.handleAction(keyPressed)
        }
    }

    handleAction(elementId) {
        this.playSound(elementId)
        this.setState(
            {
                sample: keySampleMap[elementId]
            }
        );
    }

    playSound(elementId) {
        let element = document.getElementById(elementId);
        element.play();
    }

    drumPadKeyHandler(keyId) {
        this.handleAction(keyId);
    }

    render() {

        return (
            <div className="App"
            >
                <ReactFCCtest/>
                <Container
                    id="drum-machine"
                    onKeyPress={this.keyboardHandler}>
                    <Row>
                        <Col>
                            <DrumPad
                                drumPadHandler={this.drumPadKeyHandler}
                            />
                        </Col>
                        <Col>
                            <Display sample={this.state.sample}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
