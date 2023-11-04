import { json } from "react-router-dom"

const addtodb = (id) =>{
    let shoppingCart = {};

    // get localStorage itmes
     
    const stroedCart = localStorage.getItem('shopping-cart');
    if(stroedCart){
      shoppingCart = JSON.parse(stroedCart);
    }
  
    // add quantity
    const quantity = shoppingCart[id];
    if(quantity){
      const newQuantity = quantity + 1;
      shoppingCart[id]= newQuantity;
    }
    else{
      shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

const getlocastorage = () =>{
      let shoppingCart = {};

    //   get localStorage itmes 
    const stroedCart = localStorage.getItem('shopping-cart');
    if(stroedCart){
        shoppingCart = JSON.parse(stroedCart)
    } 
    return shoppingCart;
}

export {
    addtodb,
    getlocastorage,
}