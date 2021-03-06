import React from 'react';

class SearchBar extends React.Component {

    state = { date: new Date().toISOString().slice(0,10)};

    onInputChange = e =>{
        this.setState({term: e.target.value});
    };

    onFormSubmit = e =>{
        e.preventDefault();
        this.props.onFormSubmit(this.state.date);
    }

    render() {
        return (
            <div className="container">
                <form className="form-group" onSubmit={this.onFormSubmit}>
                <div>
                 <label >Find Flight</label>
                 <input type="date"
                 className="form-control"
                 value={this.state.date}
                 onChange={this.onInputChange}
                 />
                 <input type="submit"/>
                 </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;