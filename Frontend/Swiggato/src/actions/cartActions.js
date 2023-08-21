export const addToCart = (food) => (dispatch, getState)=>{

    var cartItem = {
        _id : food._id,
        name : food.name,
        category : food.category,
        img : food.img,
        price : food.price
    }    

    console.log("cartAction : "+cartItem);

    dispatch({type:"ADD_TO_CART", payload:cartItem})

    const cartItems = getState().cartReducer.cartItems

    localStorage.setItem('cartItems', JSON.stringify(cartItems))

}