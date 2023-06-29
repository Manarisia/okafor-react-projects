

export default function Carousel(){
return<>
<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQrqlGQrAn95logNgJ8c4JDeGzR8FePoiVWEFY9xCzRQ&s" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://fyf.tac-cdn.net/images/products/large/BF116-11KM.jpg?auto=webp&quality=80&width=590" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://fyf.tac-cdn.net/images/products/small/BF375-11KM.jpg?auto=webp&quality=80&width=295" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>




</>

}