import React from 'react';


class SearchBar extends React.Component {
    
    state = {
        searchQuery : '',
        // products: this.props.products.data
        productsOnStock: false
       
    }

  

    handleOnChange = (event) => {;
        this.setState({
            searchQuery: event.target.value,
        }, ()=> {
            this.props.onFilter(this.state);
        })
    }

    handleOnStock = (event) => {
        this.setState({
            productOnStock: !this.state.productOnStock
        },()=> {
            this.props.onFilter(this.state);
        })
    }

    render () {
        return (
            <div>
            <form>
                <input type='text' name="searchQuery" value={this.searchQuery} onChange={this.handleOnChange}/>
            </form>

            <label> Only Show products on stock: </label>
            <input type="checkbox" name="productsOnStock" onChange={this.handleOnStock} checked={this.state.productOnStock}/>
            </div>
        )
    }

}
  

      // onFilter(this.state.search)
/*
    handleChange = (event) => {
        let {name, value, type} = event.target;
        
        if (type === 'checkbox') {
            value = event.target.checked;
        } 

        this.setState({
            [name]:value,
            search: e.target.value,
            products: this.props.products.data,
            filteredProducts: filteringProducts(e)
            })
    }

    state = {
        search: '',
        checked: false,
        products: this.state.products,
        filteredProducts: 
    }
    

    this.setState(
        {
        search: e.target.value
        },
        () => {
            this.props.onFilter(this.state.search)
        }
    )
            
    state = {
        product: this.props.products.data,
        filteredProducts: this.props.products.data
    };


 


    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                   <div>
                    <label>Search</label>
                    <input type="text" name="searchQuery" placeholder="Search" onChange={this.handleChange} value={this.state.search} />
                    </div>

                    <label>Only Show products on stock:</label>
                    <input type="checkbox" name="productsOnStock" onChange={this.handleChange} checked={this.state.productsOnStock}/>

                </form>
            </div>
        )
    }
}
 */
export default SearchBar;