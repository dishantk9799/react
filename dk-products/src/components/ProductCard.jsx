import React from 'react'

const ProductCard = ({ product, deleteProduct}) => {
    return (
        <div className='border-zinc-200 border-2 rounded-xl shadow-md overflow-hidden'>
            <img src={product.image} alt="error" className='w-full h-60 object-fill' />
            <div className='p-4 flex flex-col gap-2'>
                <h2 className='text-lg text-zinc-100 h-14 overflow-clip'>{product.title}</h2>
                <p className='text-xl font-bold text-green-300'>${product.price}</p>
                <p className='text-sm text-gray-500'>{product.category}</p>
                <button onClick={() => deleteProduct(product.id)} className='mt-2 bg-red-700 text-white py-2 rounded-lg hover:bg-red-800'>Remove</button>
            </div>

        </div>
    )
}

export default ProductCard
