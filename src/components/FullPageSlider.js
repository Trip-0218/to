// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import '../Css/FullPageSlider.css';
// import slider1 from "../assests/sl1.png"
// import slider2 from "../assests/sl2.png"
// import slider3 from "../assests/sl3.png"

// const Carousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000, // Adjust the autoplay speed in milliseconds
//   };

//   return (
//     <Slider className='Slider' {...settings}>
//       <div className="slider-item">
//         <div className="text-container">
//           <h2>Nature</h2>
//           <p><i>“A walk in nature walks the soul back home.”🍁</i></p>
//         </div>
//         <div className="image-container">
//           <img src={slider1} alt="Image 1" />
//         </div>
//       </div>

//       <div className="slider-item">
//         <div className="text-container">
//           <h2>Snow</h2>
//           <p><i>“Let the mountains and valleys of Manali steal your heart.”🏂</i></p>
//         </div>
//         <div className="image-container">
//           <img src={slider2} alt="Image 2" />
//         </div>
//       </div>

//       <div className="slider-item">
//         <div className="text-container">
//           <h2>Beach</h2>
//           <p><i>"Goa: Where the sun, sea, and serenity come together."🏖️</i></p>
//         </div>
//         <div className="image-container">
//           <img src={slider3} alt="Image 3" />
//         </div>
//       </div>
//     </Slider>
//   );
// };

// export default Carousel;


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Css/FullPageSlider.css';
import slider1 from "../assests/sl1.png"
import slider2 from "../assests/sl2.png"
import slider3 from "../assests/sl3.png"

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the autoplay speed in milliseconds
  };

  return (
    <Slider className='Slider' {...settings}>
      <div className="slider-item">
        <div className="text-container">
          <h2>WhispersOfNature</h2>
          <p><i>“From the misty hills of the South to the majestic peaks of the North,
             embark on a journey where nature unveils its diverse tales.”🍁</i></p>
        </div>
        <div className="image-container">
          <img src={slider1} alt="Image 1" />
        </div>
      </div>

      <div className="slider-item">
        <div className="text-container">
          <h2>Frozen Dreams</h2>
          <p><i>“Where Snow-Capped Peaks Touch the Sky.”🏂</i></p>
        </div>
        <div className="image-container">
          <img src={slider2} alt="Image 2" />
        </div>
      </div>

      <div className="slider-item">
        <div className="text-container">
          <h2>Sun-Kissed Shores</h2>
          <p><i>"Where Every Wave Tells a Story."🏖</i></p>
        </div>
        <div className="image-container">
          <img src={slider3} alt="Image 3" />
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;