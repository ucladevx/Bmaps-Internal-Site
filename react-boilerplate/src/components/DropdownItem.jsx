import React from 'react';
import { Label, Input } from 'reactstrap';

export default class DropdownItem extends React.Component {
    constructor() {
        super();
        
    }

    render() {
        return (
            <Label check>
                <Input type='checkbox' onChange={() => this.props.onChange(this.props.id, this.props.option)}/> {this.props.option}
            </Label>
        )
    }
}
