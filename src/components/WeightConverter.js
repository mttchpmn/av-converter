import React, { Component} from 'react';

class WeightConverter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kg: '',
            lb: ''
        };
    }

    Kilograms = () => {
        return (
            <div className="kilometres dataInput">
                <h3 className="header3">Kilograms</h3>
                <input type="number" placeholder="" value={this.state.kg} onChange={event => this.handleInputChange(event, 'kg')} />
            </div>
        );
    };

    Pounds = () => {
        return (
            <div className="nauticalMiles dataInput">
                <h3 className="header3">Pounds</h3>
                <input type="number" placeholder="" value={this.state.lb} onChange={event => this.handleInputChange(event, 'lb')} />
            </div>
        );
    }; 

    handleInputChange(event, type) {
        let num = parseFloat(event.target.value);
        this.setState({[type]: num});

        const convertMap = {
            lb: value => {
                this.setState({ 'kg': (num / 2.20462).toFixed(2) });
                },
            kg: value => {
                    this.setState({ 'lb': (num * 2.20462).toFixed(2) });
                }
        };

        convertMap[type].call(this, num);
    }

    componentDidUpdate() {
        console.log('this.state :', this.state);
    }

    render() {
        return(
            <div className="WeightConverter flexRow">
                <this.Kilograms />
                <this.Pounds />
            </div>
        );
    }
}

export default WeightConverter;