
import React from 'react';

const AddCart = ({ cart, handleToDelete }) => {
    console.log(cart);
    return (
        <div className=''>
            {
                cart.map(bottle => <div className='flex items-center gap-4 py-5 '>
                    <img className='w-[150px]' src={bottle.img}></img>
                    <button onClick={() => handleToDelete(bottle.id)} className='px-5 py-3 rounded-md bg-gray-100'>Delete Cart</button>
                </div>)
            }
        </div>
    );
};

export default AddCart;