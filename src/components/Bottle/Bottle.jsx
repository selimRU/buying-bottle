import React from 'react';

const Bottle = ({ bottle, handleToCart }) => {
    const { name, img, price } = bottle
    return (
        <div className=' border border-yellow-300 space-y-2 p-4 rounded-md'>
            <img className='w-[250px] mx-auto rounded-md' src={img} alt="" />
            <p>Name: {name}</p>
            <p>Price: {price}</p>
            <button onClick={() => handleToCart(bottle)} className=' bg-yellow-300 px-5 py-3 rounded-md text-white'>Add Cart</button>
        </div>
    );
};

export default Bottle;