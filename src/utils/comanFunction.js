export const setLocalData = (title, value) => {
    localStorage.setItem(title, JSON.stringify(value));
}

export const getLocalData = (title) => {
    const values = JSON.parse(localStorage.getItem(title));
    return values;
}

export const decodeBase64Url = (url) => {
     const [header, data] = url.split(',');
    // Decode the data from Base64.
    const decodedData = atob(data);
    // Create a new Blob object from the decoded data.
    const blob = new Blob([decodedData], { type: header });
    // // Create a new URL object from the Blob object.
    const decodedUrl = URL.createObjectURL(blob);
    // Return the decoded URL.
    return decodedUrl;
}