import React, { Component} from 'react';

class DistanceConverter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            km: 0,
            nm: 0,
            sm: 0
        };
    }

    Kilometres = () => {
        return (
            <div className="kilometres dataInput">
                <h3 className="header3">Kilometres</h3>
                <input type="number" value={this.state.km} onChange={event => this.handleInputChange(event, 'km')} />
            </div>
        );
    };

    NauticalMiles = () => {
        return (
            <div className="nauticalMiles dataInput">
                <h3 className="header3">Nautical Miles</h3>
                <input type="number" value={this.state.nm} onChange={event => this.handleInputChange(event, 'nm')} />
            </div>
        );
    };

    StatuteMiles = () => {
        return (
            <div className="statuteMiles dataInput">
                <h3 className="header3">Statute Miles</h3>
                <input type="number" value={this.state.sm} onChange={event => this.handleInputChange(event, 'sm')} />
            </div>
        );
    }; 

    handleInputChange(event, type) {
        let num = parseFloat(event.target.value);
        this.setState({[type]: num});

        const convertMap = {
            nm: (value) => {
                this.setState({ 'km': num * 1.825 });
                this.setState({ 'sm': num * 1.15078 });                     
            },
            km: (value) => {
                this.setState({ 'nm': num / 1.825 });
                this.setState({ 'sm': num * 0.621371 });                     
            },
            sm: (value) => {
                this.setState({ 'nm': num * 0.868976 });                     
                this.setState({ 'km': num * 1.60934 });
            }
        };

        convertMap[type].call(this, num);
    }

    componentDidUpdate() {
        console.log('this.state :', this.state);
    }

    render() {
        return(
            <div className="DistanceConverter flexRow">
                <this.Kilometres />
                <this.NauticalMiles />
                <this.StatuteMiles />
            </div>
        );
    }
}

export default DistanceConverter;