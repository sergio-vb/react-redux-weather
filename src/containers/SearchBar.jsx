import React from 'react';

export default class SearchBar extends React.Component{
    render(){
        return (
            <form action="" className="input-group">
                <input type="text" />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </span>
            </form>
        );
    }
}