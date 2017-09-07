import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            searchTerm: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        /* Bind event handlers for the render method in the constructor: (Airbnb React Style Guide)
        Why? A bind call in the render path creates a brand new function on every single render.

        A bind call or arrow function in a JSX prop will create a brand new function 
        on every single render. This is bad for performance, as it will result in the
        garbage collector being invoked way more than is necessary.
        Source: 
        https://github.com/airbnb/javascript/tree/master/react#methods
        https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
        */
    }

    onInputChange(event){
        this.setState({
            searchTerm: event.target.value
        });
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.searchTerm);
        this.setState({
            searchTerm: ''
        });
    }

    render(){
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    className="form-control"
                    type="text" 
                    placeholder="Get a five-day forecast for your favorite cities." 
                    value={this.state.searchTerm} 
                    onChange={this.onInputChange} 
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);