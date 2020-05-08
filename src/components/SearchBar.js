import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };
    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    }
    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.searchTerm(this.state.term);
    }
    render() {
        return (

            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">

                    <div className="field">
                        <label >Search for a food</label>
                        <div className="ui medium icon input">
                            <input
                                className="ui input"
                                value={this.state.term}
                                type="text" placeholder="Sushi"
                                onChange={this.onInputChange} />
                            <i className="search icon"></i>
                        </div>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default SearchBar;
