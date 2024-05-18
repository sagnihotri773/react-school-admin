export const setLocalData = (title, value) => {
    localStorage.setItem(title, JSON.stringify(value));
}

export const getLocalData = (title) => {
    const values = JSON.parse(localStorage.getItem(title));
    return values;
}