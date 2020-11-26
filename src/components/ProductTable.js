import React from 'react';
import ProductRow from './ProductRow';

// I need to reverse this to function and this. remove.


function ProductTable(props) {

        return (
            <div>
                <table>
                    <thead>
                    <th>Name</th>
                    <th>Price</th>
                    </thead>
                <tbody>
                {props.filteredProducts.map((product) => {  
                    return (
                         <ProductRow  key ={product.id} {...product}/>
                    )
                    })}
                </tbody>
                </table>
            </div>
        )
    }


export default ProductTable;