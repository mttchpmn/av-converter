import React, { Component } from 'react';
import volume from './volume.svg';

class VolumeConverter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            litres: '',
            gallons: '',
            impGallons: ''
        };
    }

    Litres = () => {
        return (
            <div className="Litres dataInput">
                <h3 className="header3">Litres</h3>
                <input type="number" placeholder="L" value={this.state.litres} onChange={event => this.handleInputChange(event, 'litres')} />
            </div>
        );
    };

    Gallons = () => {
        return (
            <div className="Gallons dataInput">
                <h3 className="header3">Gallons</h3>
                <input type="number" placeholder="G" value={this.state.gallons} onChange={event => this.handleInputChange(event, 'gallons')} />
            </div>
        );
    };

    ImpGallons = () => {
        return (
            <div className="ImpGallons dataInput">
                <h3 className="header3">Imperial Gallons</h3>
                <input type="number" placeholder="G" value={this.state.impGallons} onChange={event => this.handleInputChange(event, 'impGallons')} />
            </div>
        );
    };

    handleInputChange(event, type) {
        let num = parseFloat(event.target.value);
        this.setState({ [type]: num });

        const convertMap = {
            gallons: value => {
                this.setState({ 'litres': (num * 3.78541).toFixed(2) });
                this.setState({ 'impGallons': (num / 1.20095).toFixed(2) });
            },
            litres: value => {
                this.setState({ 'gallons': (num / 3.78541).toFixed(2) });
                this.setState({ 'impGallons': (num / 4.54609).toFixed(2) });
            },
            impGallons: value => {
                this.setState({ 'gallons': (num * 1.20095).toFixed(2) });
                this.setState({ 'litres': (num * 4.54609).toFixed(2) });
            }
        };

        convertMap[type].call(this, num);
    }

    componentDidUpdate() {
        console.log('this.state :', this.state);
    }

    render() {
        return (
            <div className="VolumeConverter flexRow">
                <img className="icon volumeIcon" src={volume} />
                <this.Litres />
                <this.Gallons />
                <this.ImpGallons />
            </div>
        );
    }
}

export default VolumeConverter;