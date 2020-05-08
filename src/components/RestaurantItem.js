import React from 'react';
import './RestaurantItem.css';
const RestaurantItem = ({ restaurant, selectRestaurant }) => {

    return (
        <div onClick={() => { selectRestaurant(restaurant) }} className="restaurant-item item">
            <img alt={restaurant.name} src={restaurant.image_url} className="ui medium image" />
            <div className="content restaurant-item">
                <div className="header item">{restaurant.name}</div>
            </div>

        </div>


    )
}

export default RestaurantItem;