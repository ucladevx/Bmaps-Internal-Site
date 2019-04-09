import { Container, Row, Col, Input, Button, InputGroupAddon, InputGroup } from 'reactstrap';
import React from 'react';
import DatePicker from 'react-datepicker';
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
            end: '',
            cover: '',
            category: '',
            startDate: new Date(),
            endDate: new Date(),
        };
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    updateDate = (name) => (date) => {
        if (name === 'start') {
            this.setState({
                startDate: date,
            });
        } else {
            this.setState({
                endDate: date,
            });
        }
    }

    submit = () => {
        console.log(this.state);
    }
    
    render() {
        const { startDate, endDate } = this.state;
        return (
            <Container>
                <Row>
                    <Col md='6' className='center'>
                        <InputGroup className='padding'>
                            <InputGroupAddon addonType='prepend'>Title</InputGroupAddon>
                            <Input type='text' name='title' onChange={this.onInputChange} />
                        </InputGroup>

                        <InputGroup className='padding'>
                            <InputGroupAddon addonType='prepend'>Description</InputGroupAddon>
                            <Input type='text' name='description' onChange={this.onInputChange} />
                        </InputGroup>

                        <InputGroup className='padding'>
                            <InputGroupAddon addonType='prepend'>Organization</InputGroupAddon>
                            <Input type='organization' name='organization' onChange={this.onInputChange} />
                        </InputGroup>
                    </Col>

                    <Col md='6' className='center'>
                        <InputGroup className='padding'>
                            <InputGroupAddon addonType='prepend'>Cover Image</InputGroupAddon>
                            <Input type='text' name='cover' onChange={this.onInputChange} />
                        </InputGroup>
                        
                        <InputGroup className='padding'>
                            <InputGroupAddon addonType='prepend'>Place</InputGroupAddon>
                            <Input type='text' name='place' onChange={this.onInputChange} />
                        
                        </InputGroup>

                        <InputGroup className='padding'>
                            <InputGroupAddon addonType='prepend'>Category</InputGroupAddon>
                            <Input type='text' name='category' onChange={this.onInputChange} />
                        </InputGroup>          
                    </Col>
                </Row>
                <br />
                <div className='date'>
                    <DatePicker showTimeSelect selected={startDate} dateFormat='MMMM d, yyyy h:mm aa' onChange={this.updateDate('start')} timeFormat='HH:mm' />
                    <DatePicker showTimeSelect selected={endDate} dateFormat='MMMM d, yyyy h:mm aa' onChange={this.updateDate('end')} timeFormat='HH:mm' />
                </div>
                <Button onClick={this.submit}>Submit</Button>

            </Container>
        );
    }
}
