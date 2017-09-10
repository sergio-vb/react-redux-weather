import React from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesBars, SparklinesLine } from 'react-sparklines';


class ForecastsList extends React.Component{

    constructor(){
        super();
        this.renderForecast = this.renderForecast.bind(this);
    }

    convertKelvinToCelcius(temp){
        return Math.round(temp - 273.15);
    }

    renderForecast(forecast){
        return (
            <div className="row" key={forecast.city.id}>
                <div className="col-sm-3">{forecast.city.name}</div>
                <div className="col-sm-3">{this.convertKelvinToCelcius(forecast.list[0].main.temp)} C</div>
                <div className="col-sm-3">{Math.round(forecast.list[0].main.pressure)}</div>
                {/* <div className="col-sm-3">{forecast.list[0].main.humidity}</div> */}
                <div className="col-sm-3">
                    <Sparklines data={[5, 10, 5, 20, 8, 17, 5, 43, 57, 20]} width={100} height={20} margin={5}>
                        <SparklinesLine color="blue" />
                    </Sparklines>
                </div>
                
            </div>
        );
    }

    render(){
        console.log("Rendering ForecastsList, cities: ", this.props.forecasts);

        return (
            <div className="container cities">
                <div className="row bg-primary">
                    <div className="col-sm-3">City</div>
                    <div className="col-sm-3">Temperature</div>
                    <div className="col-sm-3">Pressure</div>
                    <div className="col-sm-3">Humidity</div>
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