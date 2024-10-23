import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { parallaxImages } from "../utils";
import NightSky from "./NightSky";
import Fog from "./Fog";

import "../assets/styles/Intro.css";

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
    <div className="intro-cointainer w-full h-full py-0 relative overflow-hidden">
      <NightSky></NightSky>
      <div className="bg-x bg-mm w-full h-full"></div>
      <div className="bg-x bg-mr w-full h-full"></div>
      <div className="bg-x bg-ml w-full h-full"></div>
      {/* <div className="bg-x bg-4 w-full h-full"></div> */}
      <Fog></Fog>
      <div className="bg-x bg-tb bg-tb-back w-full h-full"></div>
      <div className="bg-x bg-tb bg-tb-front w-[110%] h-full "></div>
      {/* <div className="bg-x bg-tf w-full h-full"></div> */}
      <Parallax
        pages={1}
        style={{ top: "0", left: "0", overflow: "hidden" }}
        className=""
      >
        {parallaxImages
          .filter((img) => img.show)
          .slice(0, 0)
          .map((img) => (
            <ParallaxLayer offset={0} speed={2.5} key={img.id}>
              <div
                className="parallax w-full h-full object-cover bg-cover bg-bottom-center"
                style={{
                  //   backgroundImage: `url(./assets/parallax/bg2up.jpeg)`,
                  backgroundImage: `url(/assets/parallax/${img.image})`,
                }}
              ></div>
            </ParallaxLayer>
          ))}
      </Parallax>
    </div>
  );
}

export default Intro;
