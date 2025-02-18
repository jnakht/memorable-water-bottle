
const setTheNewItem = (cartArr) => {
    const strArr = JSON.stringify(cartArr);
    localStorage.setItem('cart', strArr);
}
const setToLS = (id) => {
    const cartArr = getFromLS();
    cartArr.push(id);
    // set item
    setTheNewItem(cartArr);
}

const removeFromLS = id => {
    const arr = getFromLS();
    const newArr = arr.filter(idx => idx !== id);
    setTheNewItem(newArr);
}

const getFromLS = () => {
    const valueStr = localStorage.getItem('cart');
    if (valueStr) {
        return JSON.parse(valueStr);
    }
    return [];
}

export {setToLS, getFromLS, removeFromLS};