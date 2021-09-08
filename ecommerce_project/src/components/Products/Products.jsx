import "./Products.css"
import React from 'react'

function Products() {
    return (
        <div>
            <div class="container">
                <div class="product">
                    <div class="image">
                    </div>
                    <div class="name"></div>
                </div>
                <div class="product-description">
                    <div class="description"></div>
                </div>
                <div class="other-info">
                    <div class="category"></div>
                    <div class="price"></div>
                </div>
                <div class="addToCart">
                    <button onClick="Add To Cart">Add To Cart</button>
                </div>
                <div class="cancel"></div>
                <button onClick="cancelAdd">Cancel</button>
            </div>
        </div>
    )
}

export default Products;
