import {useRef} from "react";
import sliderButton from "./Image/SliderButton.png";
import "./ImageSlider.css";

export default function ImageSlider() {
    var refVar = useRef();
    var counterRef = useRef(1);

    var buttonImgOneRef = useRef();
    var buttonImgTwoRef = useRef();
    var buttonImgThreeRef = useRef();

    function bannerImageChange() {
        counterRef.current = counterRef.current >= 3 ? 1 : ++counterRef.current;
        refVar.current.style.backgroundImage =
            "url('/src/ImageSlider/Image/" + counterRef.current + ".jpg')";

        if (counterRef.current == 1) {
            buttonImgOneRef.current.style.filter = "invert(0)";
            buttonImgTwoRef.current.style.filter = "invert(1)";
            buttonImgThreeRef.current.style.filter = "invert(1)";
        } else if (counterRef.current == 2) {
            buttonImgOneRef.current.style.filter = "invert(1)";
            buttonImgTwoRef.current.style.filter = "invert(0)";
            buttonImgThreeRef.current.style.filter = "invert(1)";
        } else {
            buttonImgOneRef.current.style.filter = "invert(1)";
            buttonImgTwoRef.current.style.filter = "invert(1)";
            buttonImgThreeRef.current.style.filter = "invert(0)";
        }
    }

    setInterval(bannerImageChange, 10000);

    function bannerImageChangeButtonOneHandler() {
        counterRef.current = 1;
        refVar.current.style.backgroundImage =
            "url('/src/ImageSlider/Image/" + counterRef.current + ".jpg')";
        buttonImgOneRef.current.style.filter = "invert(0)";
        buttonImgTwoRef.current.style.filter = "invert(1)";
        buttonImgThreeRef.current.style.filter = "invert(1)";
    }

    function bannerImageChangeButtonTwoHandler() {
        counterRef.current = 2;
        refVar.current.style.backgroundImage =
            "url('/src/ImageSlider/Image/" + counterRef.current + ".jpg')";
        buttonImgOneRef.current.style.filter = "invert(1)";
        buttonImgTwoRef.current.style.filter = "invert(0)";
        buttonImgThreeRef.current.style.filter = "invert(1)";
    }

    function bannerImageChangeButtonThreeHandler() {
        counterRef.current = 3;
        refVar.current.style.backgroundImage =
            "url('/src/ImageSlider/Image/" + counterRef.current + ".jpg')";
        buttonImgOneRef.current.style.filter = "invert(1)";
        buttonImgTwoRef.current.style.filter = "invert(1)";
        buttonImgThreeRef.current.style.filter = "invert(0)";
    }

    return (
        <>
            <div className="bannerImageSlider" ref={refVar}>
                <div className="imageSelectionButtons">
                    <button onClick={bannerImageChangeButtonOneHandler}>
                        <img ref={buttonImgOneRef} src={sliderButton}/>
                    </button>
                    <button onClick={bannerImageChangeButtonTwoHandler}>
                        <img ref={buttonImgTwoRef} src={sliderButton}/>
                    </button>
                    <button onClick={bannerImageChangeButtonThreeHandler}>
                        <img ref={buttonImgThreeRef} src={sliderButton}/>
                    </button>
                </div>
            </div>
        </>
    );
}
