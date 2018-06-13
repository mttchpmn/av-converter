import React, { Component} from 'react';

class TempConverter extends Component {
    constructor(props) {
        super(props);

        this.state= {
            celsius: '',
            fahrenheit: ''
        };
    }

    Celsius = () => {
        return (
            <div className="celsius dataInput">
                <h3 className="header3">Celsius</h3>
                <input type="number" placeholder="" value={this.state.celsius} onChange={event => this.handleInputChange(event, 'celsius')} />
            </div>
        );
    };

    Fahrenheit = () => {
        return (
            <div className="fahrenheit dataInput">
                <h3 className="header3">Fahrenheit</h3>
                <input type="number" placeholder="" value={this.state.fahrenheit} onChange={event => this.handleInputChange(event, 'fahrenheit')} />
            </div>
        );
    };

    handleInputChange (event, type) {
        let num = parseFloat(event.target.value);
        this.setState({ [type]: num });

        const convertMap = {
            celsius: value => { this.setState({ 'fahrenheit': (value * 1.8 + 32).toFixed(1)})},
            fahrenheit: value => { this.setState({ 'celsius': ((value - 32) / 1.8).toFixed(1)})},
        };
        convertMap[type].call(this, num);
    }

    render() {
        return(
            <div className="TempConverter flexRow">
                <this.Celsius />
                <this.Fahrenheit />
            </div>
        );
    }
}

export default TempConverter;