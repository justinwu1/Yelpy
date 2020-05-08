import React from 'react';
import RestaurantItem from './RestaurantItem';

const RestaurantList = ({ restaurants, selectRestaurant }) => {
    const renderedList = restaurants.map(restaurant => {
        return <RestaurantItem key = {restaurant.id}selectRestaurant={selectRestaurant} restaurant={restaurant} />
    });
    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
}
export default RestaurantList;