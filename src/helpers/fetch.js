const ycombinatorApi = 'https://hn.algolia.com/api/v1/search';

export default (query, options = {}) => {
    const apiResponse = fetch(`${ycombinatorApi}${query}`)
        .then(resp => resp);

    return apiResponse;

};
