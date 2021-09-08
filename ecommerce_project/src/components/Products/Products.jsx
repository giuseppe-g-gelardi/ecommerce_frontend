import "./Products.css"
import React from 'react'

function Products() {
    return (
        <div>
            <div class="container">
                <div class = "row">
                    <div class="product col-md-2">
                        <div class="image"></div>
                        <div class="name">tACO</div>
                    </div>
                    <div class="product-description col-md-2">
                        <div class="description">laknfkanwef jf fapwiojfajif  apoifhjapoifj f apoihfpoiahf pf pfohapfoih fapio pfhioah fp</div>
                    </div>
                    <div class="other-info col-md-2">
                        <div class="category">mex</div>
                        <div class="price">5000</div>
                    </div>
                    <div class="addToCart col-md-2">
                        <button onClick="Add To Cart">Add To Cart</button>
                    </div>
                    <div class="cancel col-md-2">
                        <button onClick="cancelAdd">Cancel</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Products;
