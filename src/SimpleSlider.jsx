
import Slider from "react-slick";
import Kirish from "./assets/kirishrasm.svg"

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container" style={{width:"100%"}}>
      <Slider {...settings}>
        <div>
          <img src={Kirish} alt="image" width={"100%"} />
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>

    </div>


  );
}

export default SimpleSlider;
