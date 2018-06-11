import React, { Component} from 'react';

class Converter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            km: '0',
            nm: '0'
        };
    }

    Kilometres = () => {
        return (
            <div className="kilometres">
                <h5>Kilometres</h5>
                <input type="number" value={this.state.km} onChange={event => this.handleInputChange(event, 'km')} />
            </div>
        );
    };

    NauticalMiles = () => {
        return (
            <div className="nauticalMiles">
                <h5>Nautical Miles</h5>
                <input type="number" value={this.state.nm} onChange={event => this.handleInputChange(event, 'nm')} />
            </div>
        );
    }; 

    handleInputChange(event, type) {
        let num = parseFloat(event.target.value);
        // let num = event.target.value;
        this.setState({[type]: num});
        // console.log('this.state :', this.state);
        if (type === 'nm') {
            this.setState({'km': num * 1.825})
        }
    }

    componentDidUpdate() {
        console.log('this.state :', this.state);
    }

    render() {
        return(
            <div className="Converter">
                <this.Kilometres />
                <hr />
                <this.NauticalMiles />
            </div>
        );
    }
}

export default Converter;