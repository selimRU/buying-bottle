import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import { addToLocalStorage, getCartLocalStorage, removeFromLS } from '../utilities/utilities';
import AddCart from '../AddCart/AddCart';


const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBottles(data)
            })
    }, [])

    useEffect(() => {
        if (bottles.length) {
            const storedCart = getCartLocalStorage()
            console.log(storedCart);
            const savedCart = []
            for (const id of storedCart) {
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id)
                console.log(bottle);
                if (bottle) {
                    savedCart.push(bottle)
                }
            }
            setCart(savedCart)
        }

    }, [bottles])

    const handleToCart = (bottle) => {
        const newCart = [...cart, bottle]
        setCart(newCart)
        addToLocalStorage(bottle.id)
    }

    const handleToDelete = (id) => {
        removeFromLS(id)
        const remainingBottles = cart.filter(bottle => bottle.id !== id)
        setCart(remainingBottles)

    }
    return (
        <div>
            <p>Bottles Length: {bottles.length}</p>
            <AddCart cart={cart} handleToDelete={handleToDelete}></AddCart>
            <div className=' container mx-auto text-center grid md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center'>
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        handleToCart={handleToCart}
                        bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;