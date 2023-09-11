const getCartLocalStorage = () => {
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
        return JSON.parse(storedCart)
    }
    return [];
}

const saveLocalStorage = (cart) => {
    const stringiFied = JSON.stringify(cart)
    localStorage.setItem('cart', stringiFied)
}

const addToLocalStorage = (id) => {
    const cart = getCartLocalStorage()
    cart.push(id)
    saveLocalStorage(cart)
}
const removeFromLS = (id) => {
    const cart = getCartLocalStorage()
    const remaingCart = cart.filter(idx => idx !== id)
    saveLocalStorage(remaingCart)
}
export { addToLocalStorage, getCartLocalStorage, removeFromLS }