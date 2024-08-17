import React , {useRef, useState} from "react";
import './siteIntroduction.css'
import myVideo from '../../../images/da86e277aca3f43d326448ac8eb683622519203-360p.mp4'
import {FaPlayCircle} from 'react-icons/fa'
import {FaPauseCircle} from 'react-icons/fa'
import {MdKeyboardArrowLeft} from  'react-icons/md'



const SiteIntroduction = () => {
    const [videoStatus,setVideoStatus] = useState("play")
    const videoRef = useRef(null);

    return ( 
            <>
                <div className="container-fluid siteIntro-container">
                    <div className="row m-row">
                        <div className="col-xl-6 col-12 siteIntro-col">
                            <div className="video">
                                <video ref={videoRef}>  <source src={myVideo} /></video>
                                <div className="controlsContainer">
                                    {videoStatus === "play" ? (<FaPlayCircle className="icon" onClick={() => videoHandler(videoStatus)}/>) : (<FaPauseCircle className="icon" onClick={() => videoHandler(videoStatus)}/>) }
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-6 col-12 siteIntro-col">
                            <div className="desc-container">
                                <div className="describtion">
                                    <h3 className="titr-intro">فروشگاه آنلاین عروسک چیچیلاس</h3>
                                    <p className="text">لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی دریب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفراییان برند.</p>
                                    <button className="more">بیشتر بدانید <MdKeyboardArrowLeft/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    );

    function videoHandler(control) {
        if (control === "play") {
          videoRef.current.play();
          setVideoStatus("pause")
        } else if (control === "pause") {
          videoRef.current.pause();
          setVideoStatus("play")
        }
        console.log(control);
    }
}
 
export default SiteIntroduction;