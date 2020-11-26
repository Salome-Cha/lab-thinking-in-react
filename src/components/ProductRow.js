import React from 'react';


class ProductRow extends React.Component {


    // put an if statement here depending on a condition defined in search bar.

    render() {
        return (
                    <div>
                    <tr>
                     <td style={{color: this.props.stocked ? "black": "red"}}> {this.props.name}</td>
                      <td>{this.props.price}</td>
                    </tr>
                    </div>
                )
    }
}


export default ProductRow;

