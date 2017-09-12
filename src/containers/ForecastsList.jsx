import React from 'react';
import { connect } from 'react-redux';

import Chart from '../components/Chart'


class ForecastsList extends React.Component{

    constructor(){
        super();
        this.renderForecast = this.renderForecast.bind(this);
    }

    convertKelvinToCelcius(temp){
        return Math.round(temp - 273.15);
    }

    renderForecast(forecast){

        const temperatureList = forecast.list.map(x => x.main.temp).map(this.convertKelvinToCelcius);
        const pressureList = forecast.list.map(x => x.main.pressure);
        const humidityList = forecast.list.map(x => x.main.humidity);

        return (
            <div className="row city-row" key={forecast.city.id}>
                <div className="col-sm-3">{forecast.city.name}</div>
                {/* <div className="col-sm-3">{this.convertKelvinToCelcius(forecast.list[0].main.temp)} C</div>
                <div className="col-sm-3">{Math.round(forecast.list[0].main.pressure)}</div>
                <div className="col-sm-3">{forecast.list[0].main.humidity}</div>  */}


                <div className="col-sm-3">
                    <Chart data={temperatureList} color="red" units="C" transform={this.convertKelvinToCelcius}></Chart>
                </div>
                <div className="col-sm-3">
                    <Chart data={pressureList} color="green" units="hPa"></Chart>
                </div>
                <div className="col-sm-3">
                    <Chart data={humidityList} color="blue" units="%"></Chart>
                </div>
            </div>
        );
    }

    render(){
        console.log("Rendering ForecastsList, cities: ", this.props.forecasts);

        return (
            <div className="container cities">
                <div className="row cities-header">
                    <div className="col-sm-3">City</div>
                    <div className="col-sm-3">Temperature (C)</div>
                    <div className="col-sm-3">Pressure (hPa)</div>
                    <div className="col-sm-3">Humidity (%)</div>
                </div>
                {this.props.forecasts.map(this.renderForecast)}
            </div>
        );
    }
}

function mapStateToProps({forecasts}){
    return {forecasts};
}
export default connect(mapStateToProps)(ForecastsList);