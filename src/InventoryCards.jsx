

const InventoryCards = ({ products, addToCart }) => {
  return (
    <div>
    <div >
      {products.map((product) => (
        <div key={product.id} className="grocers">
          <img src={product.image} alt={product.productName} />
          <h3>{product.productName}</h3>
          <h4>{product.brand}</h4>
          <h5>{product.quantity}</h5>
          <p>Price: {product.price}</p>
         <button onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default InventoryCards;
