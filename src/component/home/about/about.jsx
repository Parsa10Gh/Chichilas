import React , {useRef , useState} from 'react';
import './about.css';
import {AiOutlineShop} from 'react-icons/ai'
import {AiOutlineTags} from 'react-icons/ai'
import {AiOutlineCamera} from 'react-icons/ai'
import {MdSupportAgent} from 'react-icons/md'
import {TbTruckDelivery} from 'react-icons/tb'

const About = () => {
    return ( 
        <>
            <div className="container-fluid about-container">
                <div className="about-title">
                    <h1>چرا چیچیلاس ؟</h1>
                </div>
                <div className="about-cards">
                    <ul className="about-cards-list">
                        <li className="about-cards-list-item">
                            <div className="about-cards-list-item-container">
                                <div className="about-card-logo"><AiOutlineShop/></div>
                                <h6>فروش حضوری در تهران</h6>
                                <p>شما میتوانید وارد دنیای عروسکی چیچیلاس شوید و  خریدتون رو در تهران به صورت حضوری از دفتر فروش چیچیلاس انجام دهید</p>
                            </div>
                        </li>
                        <li className="about-cards-list-item">
                            <div className="about-cards-list-item-container">
                                <div className="about-card-logo"><AiOutlineTags/></div>
                                <h6>قیمت رقابتی</h6>
                                <p>چیچیلاس وارد کننده و پخش عمده عروسک های پولیشی و سیلیکونی است، شما می توانید انواع عروسک ها را با نازل ترین قیمت مستقیماً از واردکننده خرید کنید</p>
                            </div>
                        </li>
                        <li className="about-cards-list-item">
                            <div className="about-cards-list-item-container">
                                <div className="about-card-logo"><AiOutlineCamera/></div>
                                <h6>تصاویر واقعی محصولات</h6>
                                <p>تمام تصاویر محصولات چیچیلاس توسط تیم عکاسی مجموعه تصویربرداری و ثبت شده است، و از انتشار عکس های ژورنالی(ادیت شده و غیرواقعی) پرهیز کرده‌ایم</p>    
                            </div>
                        </li>
                        <li className="about-cards-list-item">
                            <div className="about-cards-list-item-container">
                                <div className="about-card-logo"><MdSupportAgent/></div>
                                <h6>پشتیبانی سریع</h6>
                                <p>کارشناسان چیچیلاس در طول فرایند خرید همراه شما هستند تا شما بهترین انتخاب را داشته باشید.</p>
                            </div>
                        </li>
                        <li className="about-cards-list-item">
                            <div className="about-cards-list-item-container">
                                <div className="about-card-logo"><TbTruckDelivery/></div>
                                <h6>ارسال فوق سریع</h6>
                                <p>ارسال سفارشات در همان روز با پیک، پست پیشتاز و تیپاکس در سریعترین زمان</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
     );
}
 
export default About;