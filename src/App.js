import React from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import data from './data.json'

class App extends React.Component {

  state = {
    products: data
  }
  
    render () {
          return (
            <div className="App">
              <h1>IronStore</h1>
              <FilterableProductTable products={this.state.products} />
            </div>
          );
    }
}

export default App;



