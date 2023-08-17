import './Button.css';

const Button = ({buttonText, onclick, customClass, prefix})=>{
    return(
        <div className={`flex absolute-center button-wrapper ${customClass}`} onClick={onclick}>
            {prefix} {buttonText}

        </div>
    )
}
export default Button;