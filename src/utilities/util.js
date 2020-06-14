//set cats in local storage
export const setCats = (cats) => localStorage.setItem(cats);

//get cats from local storage
export const getCats = () => localStorage.getItem('cats') || undefined;

//remove cats from local storage
export const removeUserName = () => localStorage.removeItem('cats');