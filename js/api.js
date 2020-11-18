/* API Trending */
let apiTrending = 'pEo6WXMy7qnbv6QjNIWmRF2ghCLUvM4L';
let apiSearch = 'pEo6WXMy7qnbv6QjNIWmRF2ghCLUvM4L';
let baseApi = 'https://api.giphy.com/v1/gifs/';
/* API Trending */
/*Get Info Api */
const getIfoApi = async (url) => {
    try {
        let response = await fetch(url);
        response = await response.json();
        return response;

    } catch (e) {
        console.log(e);
    }
}
/*Get Info Api */