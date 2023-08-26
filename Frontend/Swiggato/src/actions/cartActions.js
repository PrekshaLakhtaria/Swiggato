export const addToCart = (food, quantity) => (dispatch, getState) => {
  var cartItem = {
    _id: food._id,
    name: food.name,
    category: food.category,
    img: food.img,
    price: food.price,
    quantity: quantity,
    subtotalprice: Number((food.price * quantity).toFixed(2)),
  };

  if (cartItem.quantity > 10) {
    alert("You cannot add more than 10 quantities!!");
  } else {
    if (cartItem.quantity < 1) {
      dispatch({ type: "DELETE_FROM_CART", payload: food });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });
    }
  }

  const cartItems = getState().cartReducer.cartItems;

  console.log("items :", cartItems);

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const deletFromCart = (food) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: food });

  const cartItems = getState().cartReducer.cartItems;

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
