import React from 'react';
import DropdownItem from './DropdownItem';
import './style.css';

export default class DropdownMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        };
    }

    componentWillMount() {
        let initCategories = []
        for (let i = 0; i < this.props.options.length; i++) {
            let obj = {
                checked: false,
                name: this.props.options[i]
            };
            initCategories.push(obj);
        }
        this.setState({
            categories: initCategories
        });
    }

    updateChecks = (id) => {
        let updatedCategories = this.state.categories.slice();
        updatedCategories[id].checked = !updatedCategories[id].checked;
        this.setState({
            categories: updatedCategories
        }, () => this.props.onChange(this.state.categories));
    }

    render() {
        return (
            <div id='dropdown'>
            {
                this.props.options.map((option, index) => <DropdownItem option={option} id={index} onChange={this.updateChecks} />)
            }

            </div>
        )
    }
}