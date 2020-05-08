import axios from 'axios';

const KEY = 'C2SV3MOEItIJf1hr7iZln44cRwcSD84yK1BoyU9rrADVc9-rUoqeOP3w431ATTfFTCJVICmEPriFV9F3fdsNQqlpQp-X6BzLUHDQdxqk3Bf8RU7uw8gdmBjUNGxPXnYx';

export default axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: `Bearer ${KEY}`
    },

})