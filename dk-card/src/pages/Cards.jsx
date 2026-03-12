import React from 'react'

function Cards({ img, price, name }) {
    return (
        <>
            <div class="card">
                <img src={img} alt="" />
                <p class="category">{name}</p>

                <h3 class="price">₹{price}</h3>

                <button>Add To Cart</button>
            </div>
        </>
    )
}

export default Cards