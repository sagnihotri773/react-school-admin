import API, { postData, BASE_URL } from '../../api/apiRoute'



export const getApiRoute = async (url) => {
    // API.get('/get-categories')
    //     .then((response) => {
    //         console.log("response", response);
    //         setIsLoading(false);
    //         setCategories(response?.data?.data);
    //         setLoadData(true);
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //         setIsLoading(false);
    //         setLoadData(true);
    //     });
    const res = await fetch(BASE_URL+url);
    return res.json();
}