export const addToCart = (food,quantity) => (dispatch, getState)=>{


    var cartItem = {
        _id : food._id,
        name : food.name,
        category : food.category,
        img : food.img,
        price : food.price,
        quanity : quantity,
        subtotalprice : food.price * quantity
        
    }    

    console.log("cartAction : "+cartItem);

    dispatch({type:"ADD_TO_CART", payload:cartItem})

    const cartItems = getState().cartReducer.cartItems

    console.log("items :"+cartItems);

    localStorage.setItem('cartItems', JSON.stringify(cartItems))

}