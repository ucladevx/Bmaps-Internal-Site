import React from 'react';
import { Container, Row, Col, Input, Button, InputGroupAddon, InputGroup, Label } from 'reactstrap';
import DatePicker from 'react-datepicker';
import Dropdown from '../components/DropdownMenu';
import './style.css';

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            place: '',
            organization: '',
            cover: '',
            startDate: new Date(),
            endDate: new Date(),
            categories: [],
        };
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    updateChecks = (newCategories) => {
        this.setState({
            categories: newCategories
        });
    }

    updateStartDate = (date) => {
        this.setState({
            startDate: date
        });
    }

    updateEndDate = (date) => {
        this.setState({
            endDate: date
        });
    }

    validate = () => {
        console.log(this.state.startDate);
        for (let key in this.state) {
            if (this.state[key] === '') {
                alert(`${key} cannot be empty!`);
                return false;
            }
        }
        if (this.state.endDate < this.state.startDate) {
            alert('Start date cannot be after end date!');
            return false;
        }
        return true;
    }

    submit = async () => {
        if (!this.validate()) {
            return;
        }

        let categoryNames = [];
        for (let i = 0; i < this.state.categories.length; i++) {
            if (this.state.categories[i].checked) {
                console.log('checked!');
                categoryNames.push(this.state.categories[i].name);
            }
        }

        let requestArgs = Object.assign({}, this.state);
        requestArgs.categories = categoryNames;
        console.log(this.state.startDate);

        const res = await fetch('http://localhost:5000/api/v2/events/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestArgs)
        });

        const data = await res.json();
        console.log(data);
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
                            <Input type='textarea' bssize='lg' style={{ height: '200px' }} name='description' onChange={this.onInputChange} />
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
                            <InputGroupAddon addonType='prepend'>Organization</InputGroupAddon>
                            <Input type='organization' name='organization' onChange={this.onInputChange} />
                        </InputGroup>

                    </Col>
                </Row>
                <div className='center'>
                    <h2>Categories</h2>
                    <Dropdown options={['TECH', 'SPORTS', 'MUSIC', 'FOOD', 'ART', 'CONFERENCE', 'NETWORKING', 'WELLNESS']} onChange={this.updateChecks} />
                </div>
                <br />
                <div className='date'>
                    <div className='date-item'>
                        <Label for='startDate'>Start Date</Label>
                        <DatePicker
                            showTimeSelect
                            selected={startDate}
                            dateFormat='yyyy MMMM d h:mm aa'
                            onChange={this.updateStartDate}
                            timeFormat='HH:mm'
                            id='startDate'
                        />
                    </div>
                    <div className='date-item'>
                        <Label for='endDate'>End Date</Label>
                        <DatePicker
                            showTimeSelect
                            selected={endDate}
                            dateFormat='yyyy MMMM d h:mm aa'
                            onChange={this.updateEndDate}
                            timeFormat='HH:mm'
                            id='endDate'
                        />
                    </div>
                </div>
                <Button onClick={this.submit}>Submit</Button>

            </Container>
        );
    }
}
