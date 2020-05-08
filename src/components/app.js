import React from 'react';
import SearchBar from './SearchBar';
import yelp from '../api/yelp';
import RestaurantList from './RestaurantList';
import RestaurantDetail from './RestaurantDetail';
class App extends React.Component {

    state = {  restaurants: [], selectRestaurant: null, lat: 40.783060, long: -73.971249 };
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude, long: position.coords.longitude })
        );
        this.onSearchSubmit('hotpot');
    }
    onSearchSubmit = async (searchTerm) => {
        const response = await yelp.get(`/search`, {
            params: {
                term: searchTerm,
                latitude: this.state.lat,
                longitude: this.state.long,
                limit: 20
            }
        })
        

        this.setState({
            restaurants: response.data.businesses,
            selectRestaurant: response.data.businesses[0],
        });

    }
    onRestaurantSelect = (restaurant) => {
        this.setState({
            selectRestaurant: restaurant,
        });
    }
    randomPick = (tag) => {
        tag = document.querySelector(".olive");
        const hrefTag = document.createAttribute("href");
        let random = Math.round(Math.random() * 20);
        hrefTag.value = this.state.restaurants[random].url;
        tag.setAttributeNode(hrefTag);
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar searchTerm={this.onSearchSubmit} />
                <a className="ui olive button" target="_blank" onClick={this.randomPick}>Just Pick me a Restaurant!</a>
                <RestaurantDetail restaurant={this.state.selectRestaurant} />
                <RestaurantList selectRestaurant={this.onRestaurantSelect} restaurants={this.state.restaurants} />

            </div>
        )
    }

}
export default App;