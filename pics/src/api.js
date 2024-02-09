import axios from 'axios';

const searchImages = async (term) => {
    const response  = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: `Client-ID qZh0dE36f3F488mdn_TlF_Zi6CwTq8kMgOLRjvq8zoQ`
        },
        params: {
            query: term
        }
    });

    return response.data.results;
};

export default searchImages;