import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { parallaxImages } from "../constants";

function Intro() {
  //   const [imgUrl, setImgUrl] = useState(null);

  // useEffect(() => {
  //     // const img = new Image()
  //     // img.src = src
  //     // img.onload = () => setImgUrl(src)
  //     // }, [src])
  //     // return imgUrl;
  //     let parallaxImageArr = parallaxImages.map((img)=>{
  //         let imgObj = new Image()
  //         imgObj.src = `./assets/parallax/${img.image}`
  //         imgObj.onload = () => setImgUrl(imgObj.src)
  //         return {
  //             ...img,
  //             imgObj
  //         }
  //     })
  // }),[]
  // }

  return (
    <div className="intro-cointainer w-full h-full bg-red-600 py-0 relative overflow-hidden">
      <Parallax
        pages={1}
        style={{ top: "0", left: "0" }}
        className="overflow-hidden"
      >
        {parallaxImages
          .filter((img) => img.show)
          .slice(0, 1)
          .map((img) => (
            <ParallaxLayer offset={0} speed={2.5} key={img.id}>
              <div
                className="parallax w-full h-full object-cover bg-cover bg-bottom-center"
                style={{
                  backgroundImage: `url(./assets/parallax/bg2up.jpeg)`,
                  //   backgroundImage: `url(./assets/parallax/${img.image})`,
                }}
              ></div>
            </ParallaxLayer>
          ))}
      </Parallax>
    </div>
  );
}

export default Intro;
