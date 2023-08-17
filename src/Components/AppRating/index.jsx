import Button from "../common/Button/Button";
import "./appRating.css";


const getIosPrefix = ()=>{
    return <img src="	https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png" className="app-rating-icon" alt="ios-button-img"/>
}

const getAnodroidPrefix = ()=>{
    return <img src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png" className="app-rating-icon" alt="android-button-img"/>
}
const AppRating = () =>{
    return(
        <div className="max-width flex app-rating">
            <div className="app-rating-block flex flex-col">
                <div className="flex ">
                   
                    <div className="app-rating-value flex flex-col">4.8
                    
                    <img src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png" className="app-rating-stars" alt="rating-img"/>
                    </div>
                    <div className="app-rating-platform">app<br/>store</div>

                </div>
                <div className="non-mobile">
                    <Button buttonText= "Download the app" customClass="app-rating-button" prefix={getIosPrefix()}/>
                </div>
            </div>
            <div className="app-rating-block flex flex-col">
                <div className="flex ">
                    <div className="app-rating-value flex flex-col">4.7
                    <img src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png" className="app-rating-stars" alt="rating-img"/>
                    </div>
                    <div className="app-rating-platform">play<br/>store</div>

                </div>
                <div className="non-mobile">
                    <Button buttonText= "Download the app" customClass="app-rating-button" prefix={getAnodroidPrefix()}/>
                </div>
            </div>
            <div className="only-mobile">
                <Button buttonText="Download the app"/>

            </div>
        </div>
    )
}
export default AppRating;