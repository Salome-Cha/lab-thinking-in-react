import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


class FilterableProductTable extends React.Component {
  
    // We keep to list of products (one when the user type, one when the user don't type).
    state = {
      products: this.props.products.data,
      filteredProducts: this.props.products.data
  }


  handleFilterProducts = (state) => {
    const { searchQuery, productOnStock } = state
    let visibleProducts = [...this.state.products].filter((product) => {   // we always searching on top of products and not filtered products.
       
        return  (product.name.toLowerCase().includes(searchQuery.toLowerCase()) && (productOnStock ? product.stocked === productOnStock : product))
    
    });

    this.setState({
        filteredProducts: visibleProducts
    });
}

    render() {
        return (
        <div>
            <div>
               <SearchBar onFilter={this.handleFilterProducts}/>
            </div>
            <div>
                <ProductTable filteredProducts={this.state.filteredProducts} />
            </div>
        </div>
        )
    }
}

export default FilterableProductTable;