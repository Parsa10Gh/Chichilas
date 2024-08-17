import React from "react";
import './popular.css'
import bearImg from '../../../images/download.jpg'
import ponyImg from '../../../images/1549599042_1582029365__750-5442.jpg'


const Popular = () => {
    return ( 
        <>
            <div className="container-fluid">
                <div className="row my-row">
                    <div className="col-12 popular-col">
                        <h2 className="titr-popular">دسته بندی های محبوب</h2>
                    </div>
                    <div className="col-xl-2 col-4 my-col">
                        <div className="popular-item"  onClick={()=> document.location.pathname = 'products'}>
                            <div className="item-image">
                                <img src={bearImg} alt="" />
                            </div>
                            <div className="item-title">
                                <p>عروسک خرس بزرگ</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-4 my-col">
                        <div className="popular-item" onClick={()=> document.location.pathname = 'products'}>
                            <div className="item-image">
                                <img src={ponyImg} alt="" />
                            </div>
                            <div className="item-title">
                                <p>عروسک های عاشقانه</p>                
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-4 my-col">
                        <div className="popular-item" onClick={()=> document.location.pathname = 'products'}>
                            <div className="item-image">
                                <img src={bearImg} alt="" />
                            </div>
                            <div className="item-title">
                                <p>شخصیت های کارتونی </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-4 my-col">
                        <div className="popular-item" onClick={()=> document.location.pathname = 'products'}>
                            <div className="item-image">
                                <img src={ponyImg} alt="" />
                            </div>
                            <div className="item-title">
                                <p>عروسک های بالشی </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-4 my-col">
                        <div className="popular-item" onClick={()=> document.location.pathname = 'products'}>
                            <div className="item-image">
                                <img src={bearImg} alt="" />
                            </div>
                            <div className="item-title">
                                <p>عروسک های باربی</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-4 my-col">
                        <div className="popular-item" onClick={()=> document.location.pathname = 'products'}>
                            <div className="item-image">
                                <img src={ponyImg} alt="" />
                            </div>
                            <div className="item-title">
                                <p>عروسک  بچه</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid product-container">
                <div className="products">
                    <div className="toon-clothes" onClick={()=> document.location.pathname = 'products'}><p>لباس شخصیت کارتونی</p></div>
                    <div className="keys" onClick={()=> document.location.pathname = 'products'}><p>جا کلیدی عروسکی</p></div>
                    <div className="theme" onClick={()=> document.location.pathname = 'products'}><p>تم های تولد</p></div>
                    <div className="dolls" onClick={()=> document.location.pathname = 'products'}><p>عروسک</p></div>
                    <div className="hand-dolls" onClick={()=> document.location.pathname = 'products'}><p>عروسک دست ساز</p></div>
                    <div className="animal-clothes" onClick={()=> document.location.pathname = 'products'}><p>لباس حیوانات عروسکی</p></div>
                </div>

            </div>
        </>
     );
}
 
export default Popular;