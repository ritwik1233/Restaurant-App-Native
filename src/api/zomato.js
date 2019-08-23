import axios from 'axios';

import keys from '../keys/keys';

export default axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1',
    headers: {
        'user-key': keys.ZomatoAPIKey
    }
})