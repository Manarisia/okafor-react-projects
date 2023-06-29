import { useEffect, useState } from "react";

export default function Services(){
  const [products , setProducts] = useState([]);

  useEffect(() => {
      // Fetch products from https://fakestoreapi.com/products.
      fetch("https://fakestoreapi.com/products")
      .then(res => res.json ())
      .then(data => setProducts(data))
      .catch(error => console.log ("Error is " + error))
  
  }, [])
  
  return <>
  
 <div>
  <h1 className="mt-5 text-center">WHAT WE DO</h1>
  {/* Services starts here */}
  <div className="services d-flex flex-sm-coloum flex-lg-row justify-content-between pt-5">
    <div className="service text-white  ">
    </div>
    <i className="fa fa" />
    <h3>24/7</h3>
    <p>Customer service</p>
    <div className="service text-white" />
    <i className="fa fa" />
    <h3>1000</h3>
    <p>Esteemed Customer</p>
    <div className="service text-white" />
    <i className="fa fa" />
    <h3>300+</h3>
    <p>Completed Deals</p>
    <div className="service text-white" />
    <i className="fa fa" />
    <h3>100%</h3>
    <p>Swift Delivery</p>
  </div>
  {/* Services ends here */}
  <h1 className="mt-5 text-center">PRODUCT GALLERY</h1>
  <section className="d-flex flex-wrap justify-content-center p-1">
   
   
  {products.map(x => {
    
    return <div key={x.id} className="card" style={{width: '18rem'}}>
  <img src= {x.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{x.title}</h5>
    <h5 className= "card-title" > <i className= "fa fa-star text-warning"> </i> {x.rating.rate} {x.rating.count}</h5>
    <p className="card-text">{x.description}</p>
    <a href="#" className="btn btn-primary">${x.price}</a>
  </div>
</div>
   

})} 

   
   
  </section>
</div>

  
  
  </>
}
