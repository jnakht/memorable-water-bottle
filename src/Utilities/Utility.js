
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

const getFromLS = () => {
    const valueStr = localStorage.getItem('cart');
    if (valueStr) {
        return JSON.parse(valueStr);
    }
    return [];
}

export {setToLS};