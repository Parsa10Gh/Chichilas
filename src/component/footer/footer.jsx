import React from 'react';
import  './footer-top.css'
import  './footer-below.css'
import logo from '../../images/Logo_site.png'
import {FaWhatsapp} from 'react-icons/fa'
import {AiOutlinePhone} from 'react-icons/ai'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import myLocation from '../../images/location.png'
import {AiOutlineInstagram} from 'react-icons/ai';
import {TbBrandTelegram} from 'react-icons/tb';
import {FaLinkedin} from 'react-icons/fa';
import {FiTwitter} from 'react-icons/fi'
import trustSign from '../../images/trust-sign.jpg'
import sabtSign from '../../images/sign-sabt.jpg'

const Footer = () => {
    return ( 
        <>
            <div className="container-fluid footer-top">
                <div className="row footer-top-row">
                    <div className="col-lg-7 footer-top-logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="col-lg-3 footer-top-contact">
                        <h5>به راهنمایی نیاز دارید؟</h5>
                        <p>میتوانید در واتس‌آپ با ما در ارتباط باشید</p>
                    </div>
                    <div className="col-lg-2 footer-top-number">
                        <p>۰۹۱۹۵۰۸۸۸۰۸ <FaWhatsapp/></p> 
                    </div>
                </div>
            </div>

            <div className="container-fluid footer-below">
                <div className="row footer-below-row">
                    <div className="col-lg-4 footer-below-col">
                        <div className="footer-below-contact">
                            <div className="footer-below-contact-text">
                                <h6>با ما در ارتباط باشید</h6>
                                <p><h5 className='footer-below-icon'><AiOutlinePhone/> </h5><span>تلفن تماس :</span>021-66058922<span> | </span>شنبه تا پنجشنبه  ۹ الی ۱۸</p>
                                <p><h5 className='footer-below-icon'><HiOutlineLocationMarker/> </h5><span>ورودی اول :</span> تهران، سعادت آباد، خ سرو غربی، جنب بانک تجارت، پ 72، برج سروناز، واحد 1</p>
                                <p><h5 className='footer-below-icon'><HiOutlineLocationMarker/> </h5><span>ورودی دوم :</span> تهران، سعادت آباد، بلوار پاکنژاد جنوب، بعد از تقاطع سرو، ک گلها، پ 11، برج سروناز، واحد 1</p>
                            </div>
                            <img src={myLocation} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4 footer-below-col">
                        <div className="footer-below-links">
                            <ul className="footer-below-links-list list-unstyled">
                                <li className="footer-below-links-list-item-title">لینک های مفید </li>
                                <li className="footer-below-links-list-item">خدمات چیچیلاس</li>
                                <li className="footer-below-links-list-item">مجله‌ی چیچیلاس</li>
                                <li className="footer-below-links-list-item">درباره چیچیلاس</li>
                                <li className="footer-below-links-list-item">تماس با چیچیلاس</li>
                            </ul>
                            <ul className="footer-below-links-list list-unstyled">
                                <li className="footer-below-links-list-item-title">لینک های مفید </li>
                                <li className="footer-below-links-list-item">پرفروش‌ترین عروسک‌ها</li>
                                <li className="footer-below-links-list-item">مجله‌ی چیچیلاس</li>
                                <li className="footer-below-links-list-item">درباره چیچیلاس</li>
                                <li className="footer-below-links-list-item">تماس با چیچیلاس</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 footer-below-col">
                        <div className="footer-below-socials">
                            <div className='footer-below-socials-title'>
                                <h6>با ما در ارتباط باشید</h6>
                            </div>
                            <ul className="footer-below-socials-list list-unstyled">
                                <li className="footer-below-socials-list-item"><FiTwitter/></li>
                                <li className="footer-below-socials-list-item"><FaLinkedin/></li>
                                <li className="footer-below-socials-list-item"><FaWhatsapp/></li>
                                <li className="footer-below-socials-list-item"><TbBrandTelegram/></li>
                                <li className="footer-below-socials-list-item"><AiOutlineInstagram/></li>
                            </ul>
                            <div className="footer-below-standards">
                                <img src={sabtSign} alt="" />
                                <img src={trustSign} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container footer-site-discribtion">
                <h5>فروشگاه اینترنتی چیچیلاس</h5>
                <p>{'فروشگاه عروسک چیچیلاس متنوع ترین و به روزترین سایت خرید عروسک در ایران است. شما در این سایت انواع عروسک ها نظیر عروسک پسرانه و عروسک دخترانه را به راحتی پیدا می کنید. با فالو کردن شبکه اجتماعی چیچیلاس در اینستاگرام  از تخفیفات ویژه و محصولات جدید چیچیلاس مطلع شوید. قیمت عروسک ها در فروشگاه عروسک چیچیلاس زیر قیمت بازار است تا با خیالی راحت خرید عروسک را انجام دهید. چیچیلاس انواع عروسک های پولیشی را در طرح ها و سلیقه های مختلف تدارک دیده است. چیچیلاس، دنیای عروسکی تو'}</p>
            </div>
            <div className="footer-below-rights">
                <p>© تمام حقوق مادی و معنوی این سایت متعلق به فروشگاه اینترنتی "چیچیلاس" می باشد. هرگونه کپی برداری از مطالب و محصولات بدون ذکر منبع مطابق ماده 12 قانون جرایم رایانه ای پیگرد قانونی دارد.</p>
            </div>
        </>
     );
}
 
export default Footer;
