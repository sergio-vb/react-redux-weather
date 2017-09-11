import React from 'react';
import { Sparklines, SparklinesBars, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


function average(data){
    //Adds up all data values, divides them by length, rounds result
    return Math.round((data.reduce((sum, x) => (sum + x), 0))/data.length);
}

export default function(props){
    return (
        <div>
            <Sparklines data={props.data} width={180} height={120}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)}</div>
        </div>
    );
}