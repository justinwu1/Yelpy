import React from 'react';


const RestaurantDetail = ({ restaurant}) => {
    if (!restaurant) {
        return <div></div>
    }

    return (
        <div className="restaurant-detail">
            <div className="ui segment">
                <h4 className="ui header">Name: {restaurant.name}</h4>
                <h4 className="ui header">Review: {restaurant.rating}/5</h4>
                <h4 className="ui header">Review Count: {restaurant.review_count}</h4>
                <h4 className="ui header">Price: {restaurant.price}</h4>
                <h4 className="ui header">Location: {restaurant.location.address1} {restaurant.location.city} {restaurant.location.state} </h4>
                <h4 className="ui header">Phone: {restaurant.phone}</h4>
                <a className="yelp" href={restaurant.url}><i className="yelp icon"></i>Yelp</a>
            </div>

        </div>
    )
}
export default RestaurantDetail;