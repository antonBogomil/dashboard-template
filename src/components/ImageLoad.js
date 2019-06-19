import React, {useState,useEffect} from 'react';
import Preloader from "./Preloader";

const ImageLoad = ({src, alt}) => {
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{

    },[loaded]);
    return (
        <div>
            {
                <img src={src} alt={alt || src} style={loaded ? {} : {display: 'none'}}
                              onLoad={() => {
                                  setLoaded(true);
                              }}/>
            }
            {
                !loaded && <Preloader size={"small"}/>
            }
        </div>
    );
};

export default ImageLoad;