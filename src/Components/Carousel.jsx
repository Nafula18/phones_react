import { Link } from "react-router-dom";

<section className="row">
<div className="col-md-12">
    <div className="carousel slide" id="mycarousel" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="images/download(6).jpeg" alt="" class="d-block w-100 "/>
            </div>

            <div className="carousel-item">
                <img src="images/images(1).jpeg" alt="" class="d-block w-100"/>
            </div>

            

            <div class="carousel-item">
                <img src="" alt="" class="d-block w-100"/>
            </div>

        </div>
        <Link to="#mycarousel" className="carousel-control-prev" data-bs-slide="prev">
        <span class="carousel-control-prev-icon">

            </span>

        </Link> 
           

        <Link to="#mycarousel" className="carousel-control-next" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
        
        </Link> 
            <span className="carousel-control-next-icon"></span>
        

        <ol class="carousel-indicators">
            <li data-bs-target="#mycarousel" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#mycarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#mycarousel" data-bs-slide-to="2"></li>
        </ol>


    </div>
</div>
</section>
