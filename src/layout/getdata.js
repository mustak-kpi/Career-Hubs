import { getlocastorage } from "../components/utlites.js/facedb";

const productsloderdata = async () => {

    const data = await fetch ('featuredjobs.json')
    const dataloder = await data.json() 

    const sevcartd = getlocastorage();

    let cart =[]
  for(const id in sevcartd){
      const founddata = dataloder.find(data => data.id === id);
      if(founddata){
          cart.push(founddata)
      }
     
  }
   return {dataloder, cart}
}

export {
    productsloderdata
}
