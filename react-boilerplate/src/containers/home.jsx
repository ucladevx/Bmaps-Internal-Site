import React from 'react';
import { Container, Row, Col, Input, Button, InputGroupAddon, InputGroup, Label } from 'reactstrap';
import { API_URL } from '../Config';
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
            street: '',
            startDate: new Date(),
            endDate: new Date(),
            categories: [],
            latitude: 0,
            longitude: 0,
            freeFood: false,
        };
    }

    componentDidMount() {

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

    updateFreeFood = (food) => {
        this.setState({
            freeFood: food[0].checked,
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
        for (let key in this.state) {
            if (this.state[key] === '' && key != 'cover') {
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
                categoryNames.push(this.state.categories[i].name);
            }
        }

        let requestArgs = Object.assign({}, this.state);
        requestArgs.categories = categoryNames;

        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestArgs),
            });
            const data = await res.json();
            if (data.error) {
                alert(data.error);
            } else {
                if (!alert(`Event with id ${data.id} added successfully!`)) {
                    window.location.reload();
                }
            }
            console.log(data);
        } catch (e) {
            console.log(e);
        }

    }

    render() {
        let sortedCategories = ['CAUSE', 'MUSIC', 'FOOD', 'ART', 'NETWORKING', 'WELLNESS', 'MEETUP', 'SPORTS', 'GARDENING',  
            'COMEDY PERFORMANCE', 'FILM', 'THEATER', 'TECH', 'RELIGION', 'PARTY', 'DANCE', 'CONFERENCE'].sort();
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
                            <Input type='textarea' bssize='lg' style={{ height: '222px' }} name='description' onChange={this.onInputChange} />
                        </InputGroup>

                        <InputGroup className='padding'>
                            <InputGroupAddon addonType='prepend'>Cover Image</InputGroupAddon>
                            <Input type='text' name='cover' onChange={this.onInputChange} />
                        </InputGroup>

                    </Col>

                    <Col md='6' className='center'>
                        <InputGroup className='padding'>
                            <InputGroupAddon addonType='prepend'>Place</InputGroupAddon>
                            <Input type='text' name='place' onChange={this.onInputChange} />
                        </InputGroup>

                        <InputGroup className='padding'>
                            <InputGroupAddon addonType='prepend'>Organization</InputGroupAddon>
                            <Input type='text' name='organization' onChange={this.onInputChange} />
                        </InputGroup>

                        <InputGroup className='padding'>
                            <InputGroupAddon addonType='prepend'>Street Address</InputGroupAddon>
                            <Input type='text' name='street' onChange={this.onInputChange} />
                        </InputGroup>

                        <InputGroup className='padding'>
                            <InputGroupAddon addonType='prepend'>Latitude (Between 34.056 and 34.079)</InputGroupAddon>
                            <Input type='text' name='latitude' onChange={this.onInputChange} />
                        </InputGroup>

                        <InputGroup className='padding'>
                            <InputGroupAddon addonType='prepend'>Longitude (Between -118.46 and -118.428)</InputGroupAddon>
                            <Input type='text' name='longitude' onChange={this.onInputChange} />
                        </InputGroup>
                        

                    </Col>
                </Row>
                <div className='center'>
                    <h2>Categories</h2>
                    <Dropdown options={sortedCategories} onChange={this.updateChecks} />
                </div>
                <br />
                <div className='center'>
                    <h2>Filters</h2>
                    <Dropdown options={['FREE FOOD']} onChange={this.updateFreeFood} />
                </div>
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
