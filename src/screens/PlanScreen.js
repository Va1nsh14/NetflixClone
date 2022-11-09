// import React, { useEffect, useState } from 'react'
// import db from '../firebase';
import "./PlanScreen.css"

function PlanScreen() {
//     const [products,setProducts]=useState([]);
//     useEffect(()=>{
//      db.collection("products")
//      .where("active","==",true)
//      .get().then((querySnapshot)=>{
//          const products = {};
//          querySnapshot.forEach(async productDoc=>{
//              products [productDoc.id]=productDoc.data();
//              const priceSnap=await productDoc.ref.collection
//              ("price").get();
//              priceSnap.docs.forEach((price)=>{
//                products[productDoc.id].prices={
//                    priceId:price.id,
//                    priceData:price.data(),
//                };
//              });
//          });
//          setProducts[products];
//         });
//     },[])
//       console.log(products)
//   return (
//     <div className="planScreen">
     
//     </div>
//   )
return (
  <>
    <div className="planScreen__plan">
      <div classname="planScreen__info">
        <h4>Premium</h4>
        <h5>4K+HDR</h5>
      </div>
      <button>
        {" "}
        <a
          className="Plan__link"
          href="https://www.netflix.com/signup/planform"
 >
          Subscribe
        </a>
      </button>
    </div>
    <div className="planScreen__plan">
      <div classname="planScreen__info">
        <h4>Basics</h4>
        <h5>720p</h5>
      </div>
      <button>
        <a
          className="Plan__link"
          href="https://www.netflix.com/signup/planform"
        >
          Subscribe
        </a>
      </button>
    </div>
    <div className="planScreen__plan">
      <div classname="planScreen__info">
        <h4>Standard</h4>
        <h5>1080p</h5>
      </div>
      <button>
        {" "}
        <a
          className="Plan__link"
          href="https://www.netflix.com/signup/planform"
        >
          Subscribe
        </a>
      </button>
    </div>
  </>
);
}

export default PlanScreen