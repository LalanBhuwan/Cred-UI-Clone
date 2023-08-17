
import { useEffect, useRef, useState } from "react";
import "./productShowcase.css";

const ProductShowcase = ()=>{
    const [showAnimation, setShowAnimation] = useState(false); // for intersection observer

    const ref = useRef(null);

// intersectionObserver take two parameter one is callback fn and another is some option

    const toggleAnimation = (e)=>{
        if(e[0].isIntersecting){
            setShowAnimation(true)
        }
        
    }

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    }
    

    useEffect(()=>{
        const observer = new IntersectionObserver(toggleAnimation, options);
        if(!showAnimation){
            if(ref.current){
                observer.observe(ref.current);
            }
        }
        return ()=>{
            if(ref.current){
                observer.observe(ref.current);
            }

        }

    });

    return(
        <div className={`product-showcase  ${showAnimation ? "scale-up-bottom" : ""}`} ref={ref}>
            {showAnimation && (<div className="showcase-wrapper ">
            <img className="showcase-ui showcase-mockup-1" src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-2.png" alt="showcase-img"/>
            <img className="showcase-ui showcase-mockup-2" src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-1.png" alt="showcase-img"/>
            <img className="showcase-ui showcase-mockup-3" src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-center.png" alt="showcase-img"/>
            <img className="showcase-ui showcase-mockup-4" src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-1.png" alt="showcase-img"/>
            <img className="showcase-ui showcase-mockup-5" src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-2.png" alt="showcase-img"/>
            
            </div>)}
        </div>
    );
}
export default ProductShowcase;