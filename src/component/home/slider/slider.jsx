import React , { useState , useRef}  from "react";
import './slider.css';
import {MdKeyboardArrowRight} from 'react-icons/md'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import background1 from '../../../images/@Wallpaper11261.jpg'
import background2 from '../../../images/@Wallpaper11295.jpg'
import background3 from '../../../images/pngtree-abstract-modern-neon-frame-background-image_339537.jpg'
let index = 0
const Slider = () => {
    const [images,setImages] = useState([background1,background2,background3]);
    let [activeImg,setActiveImg] = useState(images[index]);
    let bullets = []
    images.forEach((img,i) => {
        if(i == index){
            bullets.push(<li key={i} className="active-item"></li>)
        }else{
        bullets.push(<li key={i} className="bullet-list-item"></li>)
        }
    })
    // console.log(index);
    const imgElem = useRef(0);
    return (
        <>
            <div className="slider-container">
                <div className="slider-img-container">
                    {/* {autoSlider()} */}
                    <img ref={imgElem} onAnimationEnd={removeAnime} src={activeImg} alt="" />
                    <div className="slider-rightBtn" onClick={nextImage}><MdKeyboardArrowRight/></div>
                    <div className="slider-leftBtn" onClick={prevImage}><MdKeyboardArrowLeft/></div>
                    <div className="slider-bullet">
                        <ul className="bullet-list">{bullets}</ul>
                    </div>
                </div>
                <div className="slider-baners">
                    <div className="row slider-baners-row">
                        <div className="col-lg-4">
                            <div className="insta-baner"><h6>بنر اینستاگرام</h6></div>
                        </div>
                        <div className="col-lg-8">
                            <div className="doll-group" onClick={() => document.location.pathname = 'products'}><h6>دسته‌بندی عروسک ها</h6></div>
                        </div>
                    </div>
                </div>
            </div> 
        </> 
    );

    function autoSlider(){
        setTimeout(nextImage,6000);
    }

    function removeAnime() {
        // console.log('jjss');
        imgElem.current.style.animation = 'none';
        // console.log(imgElem.current.style.animation);
    }

    function nextImage(){
        setTimeout(() => {
            index++;
            if(index >= images.length){
                index = 0;
            }
            // console.log(index);
            setActiveImg(images[index])
        },1000)
        
        imgElem.current.style.animation = 'moved 2s linear forwards alternate';
        // console.log(imgElem.current.style.animation);
    }
    function prevImage(){
        setTimeout(() => {
            index--;
        if(index < 0){
            index = images.length - 1;
        }
        setActiveImg(images[index])
        },1000)
        imgElem.current.style.animation = 'moved 2s linear forwards alternate';

    }

}
 
export default Slider;



