import React from 'react'

function Cards({ img, price, name,category}) {
    return (
        <>
            <div class="card">
                <img src={img} alt="" />
                <h2>{name}</h2>
                <p class="category">{category}</p>

                <h3 class="price">₹{price}</h3>

                <button>Add To Cart</button>
            </div>
        </>
    )
}

export default Cards