import React , {useRef , useState} from 'react';
import './services.css';
import myImg from '../../../images/5184209.png'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {MdKeyboardArrowLeft} from 'react-icons/md'

const Services = () => {
    return ( 
        <>
            <div className="services-container">
                <div className="services-header">
                    <div className="services-header-title">
                        <h1>خدمات چیچیلاس</h1>
                    </div>
                    <div className="services-btn">
                        <button className='services-btn-r'><MdKeyboardArrowRight/></button>
                        <button className='services-btn-l'><MdKeyboardArrowLeft/></button>
                    </div>
                </div>
                <div className="container services-body">
                    <div className='row'>
                        <div className="col-lg-12 services-body-col">
                            <div className="services-body-img">
                                <img src={myImg} alt="" />
                            </div>
                            <div className="services-body-text">
                                <h2>آموزش عروسک سازی</h2>
                                <p>لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی دریب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفراییان برند.</p>
                                <button>مشاهده محصولات <MdKeyboardArrowLeft/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Services;