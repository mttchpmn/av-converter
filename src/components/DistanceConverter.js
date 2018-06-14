import React, { Component} from 'react';
import distance from './distance.svg';

class DistanceConverter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            km: '',
            nm: '',
            sm: ''
        };
    }

    Kilometres = () => {
        return (
            <div className="kilometres dataInput">
                <h3 className="header3">Kilometres</h3>
                <input type="number" placeholder="km" value={this.state.km} onChange={event => this.handleInputChange(event, 'km')} />
            </div>
        );
    };

    NauticalMiles = () => {
        return (
            <div className="nauticalMiles dataInput">
                <h3 className="header3">Nautical Miles</h3>
                <input type="number" placeholder="nm" value={this.state.nm} onChange={event => this.handleInputChange(event, 'nm')} />
            </div>
        );
    };

    StatuteMiles = () => {
        return (
            <div className="statuteMiles dataInput">
                <h3 className="header3">Statute Miles</h3>
                <input type="number" placeholder="sm" value={this.state.sm} onChange={event => this.handleInputChange(event, 'sm')} />
            </div>
        );
    }; 

    handleInputChange(event, type) {
        let num = parseFloat(event.target.value);
        this.setState({[type]: num});

        const convertMap = {
            nm: value => {
                    this.setState({ 'km': (num * 1.825).toFixed(2) });
                    this.setState({ 'sm': (num * 1.15078).toFixed(2) });
                },
            km: value => {
                    this.setState({ 'nm': (num / 1.825).toFixed(2) });
                    this.setState({ 'sm': (num * 0.621371).toFixed(2) });
                },
            sm: value => {
                    this.setState({ 'nm': (num * 0.868976).toFixed(2) });
                    this.setState({ 'km': (num * 1.60934).toFixed(2) });
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
                <img className="icon distanceIcon" src={distance} />
                <this.Kilometres />
                <this.NauticalMiles />
                <this.StatuteMiles />
            </div>
        );
    }
}

export default DistanceConverter;