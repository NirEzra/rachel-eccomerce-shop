import SimpleImageSlider from "react-simple-image-slider";
import React from 'react'

const images = [
  { src: "img1.jpg" },
  { src: "pictures/img2.jpg" },
  { src: "pictures/img3.jpg" },
 
];

function Slidpic() {



  return (
    <div>
    <SimpleImageSlider
      width={896}
      height={504}
      images={images}
      showBullets={false}
      showNavs={false}
    />
  </div>
  )
}

export default Slidpic



