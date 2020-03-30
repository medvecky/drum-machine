import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";


function DrumPad(props) {
    const keyNames = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
    const clips = [
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    ];
    const keys = keyNames.map((key, index) =>
        <div className='drum-pad'
             id={index + key}
             onClick={() => props.keyHandler(key)}
        >
            <Button

                variant="outline-info"
                size="lg"
            >{key}</Button>
            <audio
                id={key}
                className="clip"
                src={clips[index]}
            >
            </audio>
        </div>);

    return (
        <Container>
            <Row>
                {keys.slice(0, 3)}
            </Row>
            <Row>
                {keys.slice(3, 6)}
            </Row>
            <Row>
                {keys.slice(6, 9)}
            </Row>
        </Container>
    );
}

export default DrumPad;