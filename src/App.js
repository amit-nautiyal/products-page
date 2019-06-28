import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { items: [], originalData: [] };
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {
    fetch("https://api.jsonbin.io/b/5cae9a54fb42337645ebcad3")
      .then(response => response.json())
      .then(jsonData => {
        this.setState({ items: jsonData, originalData: jsonData });
      })
      .catch(error => {
        console.error(error);
      });
  }

  handleChange = e => {
    const selectedValue = e.target.value;
    this.setState({ size: selectedValue });
    let items = this.state.originalData;
    let filteredData;
    if (selectedValue === "") {
      filteredData = this.state.originalData;
    } else {
      filteredData = items.filter(function(item) {
        return item.size.includes(selectedValue);
      });
    }
    return this.setState({ items: filteredData });
  };
  render() {
    let items = this.state.items;
    return (
      <div className="page">
        <header className="page__header">
          <h1>Women's tops</h1>
          <select onChange={this.handleChange}>
            <option value="">Filter by size</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </header>
        <div className="container">
          {items.map((item, i) => (
            <Product key={i} product={item} />
          ))}
        </div>
      </div>
    );
  }
}

const Product = props => {
  return (
    <div className="product">
      <div className="product__image">
        <img
          src={`/images/${props.product.productImage}`}
          alt={props.product.productImage}
        />
      </div>
      <div className="product__type">
        {props.product.isSale && (
          <div className="button button-red" type="button">
            Sale
          </div>
        )}
        {props.product.isExclusive && (
          <div className="button button-green" type="button">
            Exclusive
          </div>
        )}
      </div>
      <div className="product__footer">
        <div className="product__name">{props.product.productName}</div>
        <div className="product__price">{props.product.price}</div>
      </div>
    </div>
  );
};

export default App;
