import { Container, Row, Col, Input, Button, InputGroupAddon, InputGroup } from 'reactstrap';
import React from 'react';
import './style.css';

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            place: '',
            organization: '',
            start: '',
            end: ''
        };
    }

    // onChange = (e) => {
    //     let name = e.target.name;
    //     this.setState({
    //         name: e.target.value
    //     });
    // }
    
    render() {
        return (
            <Container>
                <Row>
                    <Col md='6' className='center'>
                        {/* <div className='child'> */}
                            <InputGroup>
                                <InputGroupAddon addonType='prepend'>Title</InputGroupAddon>
                                <Input type='text' />
                            </InputGroup>

                            <InputGroup>
                                <InputGroupAddon addonType='prepend'>Description</InputGroupAddon>
                                <Input type='text' />
                            </InputGroup>
                        {/* </div> */}
                    </Col>
                </Row>
            </Container>
        );
    }
}
