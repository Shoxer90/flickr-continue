import axios from 'axios';

import { FLICKR_URI, API_KEY } from "../Config/API";

export const getPhoto = (tag, perPage = 5) => {
    return axios
    .get(`${FLICKR_URI}/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${tag}&per_page=${perPage}&format=json&nojsoncallback=1`);
}
