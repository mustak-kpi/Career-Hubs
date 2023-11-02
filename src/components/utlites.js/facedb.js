import { json } from "react-router-dom";

const addtodata = (id) =>{
    let applaynow = {}

    // get localstroges 
    const getlocatstorg = localStorage.getItem('applay-now');
     
    if(getlocatstorg){
        applaynow = JSON.parse(getlocatstorg) 
    }

    const quantity = applaynow[id]
    if(quantity){
        const newquantity = quantity + 1;
        applaynow[id] = newquantity;
    } 
    else{
        applaynow[id] = 1;
    }


    localStorage.setItem('applay-now', JSON.stringify(applaynow))
}

const getlocationstroge = () =>{
    let applaynow  = {};
    const getlocatstorg = localStorage.getItem('applay-now');
    if(getlocatstorg){
      applaynow = JSON.parse(stroedCart);
    }
    return applaynow
  }
  

export {
    addtodata,
    getlocationstroge,
}