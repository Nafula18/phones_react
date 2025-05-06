const Carousel = () => {
    return (
      <section class="row" >
        <div class="col-md-12">
          <div class="carousel slide" id="mycarousel" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src="Images/download (6).jpeg" alt="" class="d-block w-100" />
              </div>
  
              <div class="carousel-item">
                <img src="Images/images (1).jpeg" alt="" class="d-block w-100" />
              </div>
  
              <div class="carousel-item">
                <img src="Images/images (10).jpeg" alt="" class="d-block w-100" />
              </div>
            </div>
  
            <a
              href="#mycarousel"
              class="carousel-control-prev"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon"></span>
            </a>
  
            <a
              href="#mycarousel"
              class="carousel-control-next"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon"></span>
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Carousel;