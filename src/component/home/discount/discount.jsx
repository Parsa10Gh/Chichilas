import React , {useState} from 'react';
import './discount.css';
import myImg from '../../../images/download.jpg'
import myImg2 from '../../../images/1549599042_1582029365__750-5442.jpg'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import {BiCopy} from 'react-icons/bi'

const Discount = () => {
    const [second,setSecond] = useState(6);
    const [minute,setMinute] = useState(1);
    const [hour,setHour] = useState(14);
    const [day,setDay] = useState(2);
    return ( 
        <>
            <div className='container-fluid discount-container'>
                <div className='row discount-row'>
                    <div className="col-xl-6 col-12 title-discount-col">
                        <div className='title-discount'>
                            <h1>تخفیف های ویژه</h1>
                            <h1>چیچیلاسی</h1>
                        </div>
                    </div>
                    <div className="col-xl-6 col-12 timer-discount-col">
                        <div className='timer-discount'>
                            {
                                deadline()
                            }
                            <div className="second">
                                <p className='num-discount'>{second}</p>
                                <p className='text-discount'>ثانیه</p>
                            </div><span>:</span>
                            <div className="minute">
                                <p className='num-discount'>{minute}</p>
                                <p className='text-discount'>دقیقه</p>
                            </div><span>:</span>
                            <div className="hour">
                                <p className='num-discount'>{hour}</p>
                                <p className='text-discount'>ساعت</p>
                            </div><span>:</span>
                            <div className="day">
                                <p className='num-discount'>{day}</p>
                                <p className='text-discount'>روز</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid discounted-items-container'>
            <button className='discount-btn-l'><MdKeyboardArrowLeft/></button>
            <button className='discount-btn-r'><MdKeyboardArrowRight/></button>
                {/* <div className="row discounted-items-row"> */}
                    {/* <div className="col-lg-3 col-6 discounted-item-col"> */}
                        <div className="discounted-item">
                            <div className="discounted-item-img">
                                <img src={myImg2} alt="" />
                                <div className='discount-percent'>20%</div>
                            </div>
                            <div className="discounted-items-title">
                                <div className='row'>
                                    <h5 className='col-12'>عروسک بچه دختر مدل warm baby</h5>
                                    <h5 className='col-12'>کد G۰۱۳۱</h5>
                               </div>
                            </div>
                            <div className="discounted-items-price">
                                <p><span className='before-discount'>584,000 </span><span className="after-discount"> 564,000 </span> تومان</p>
                            </div>
                        </div>
                    {/* </div> */}
                    {/* <div className="col-lg-3 col-6 discounted-item-col"> */}
                        <div className="discounted-item">
                            <div className="discounted-item-img">
                                <img src={myImg2} alt="" />
                                <div className='discount-percent'>20%</div>
                            </div>
                            <div className="discounted-items-title">
                               <div className='row'>
                                    <h5 className='col-12'>عروسک بچه دختر مدل warm baby</h5>
                                    <h5 className='col-12'>کد G۰۱۳۱</h5>
                               </div>
                            </div>
                            <div className="discounted-items-price">
                                <p><span className='before-discount'>584,000 </span><span className="after-discount"> 564,000 </span> تومان</p>
                            </div>
                        </div>
                    {/* </div> */}
                    {/* <div className="col-3 discounted-item-col hide"> */}
                        <div className="discounted-item">
                            <div className="discounted-item-img">
                                <img src={myImg2} alt="" />
                                <div className='discount-percent'>20%</div>
                            </div>
                            <div className="discounted-items-title">
                                <div className='row'>
                                    <h5 className='col-12'>عروسک بچه دختر مدل warm baby</h5>
                                    <h5 className='col-12'>کد G۰۱۳۱</h5>
                                </div>
                            </div>
                            <div className="discounted-items-price">
                                <p><span className='before-discount'>584,000 </span><span className="after-discount"> 564,000 </span> تومان</p>
                            </div>
                        </div>
                    {/* </div> */}
                    {/* <div className="col-3 discounted-item-col hide"> */}
                        <div className="discounted-item">
                            <div className="discounted-item-img">
                                <img src={myImg2} alt="" />
                                <div className='discount-percent'>20%</div>
                            </div>
                            <div className="discounted-items-title">
                                <div className='row'>
                                    <h5 className='col-12'>عروسک بچه دختر مدل warm baby</h5>
                                    <h5 className='col-12'>کد G۰۱۳۱</h5>
                                </div>
                            </div>
                            <div className="discounted-items-price">
                                <p><span className='before-discount'> 584,000 </span><span className="after-discount"> 564,000</span> تومان</p>
                            </div>
                        </div>
                    {/* </div> */}
                {/* </div> */}
            </div>

            <div className="container-fluid discount-card-container">
                <div className="discountCard-container">
                    <div className="row discount-card-row">
                        <div className="col-xl-8 col-12">
                            <div className="row about-discount-card">
                                <div className="col-xl-5 about-discount-card-col">
                                    <h5 className='discount-card-title'>۱۰٪ تخفیف</h5>
                                </div>
                                <div className="col-xl-7 about-discount-card-col">
                                    <div className="discount-card-text">
                                        <p>برای اولین خرید شما کنارتون هستیم و میتونین ۱۰٪ تخفیف روی همه محصولات ما برخوردار بشین</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-12">
                            <div className="discount-code-container">
                                <div className='discount-code-box'>
                                    <div className="discount-code">Firstpromocode</div>
                                    <div className="copy-discount-code">کپی<BiCopy/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    function deadline() {
        setTimeout(() => {
            setSecond(second - 1);
            if(second == 0){
                setMinute(minute - 1)
                setSecond(59)
            }
            if(minute == 0 & second == 0){
                setHour(hour - 1)
                setMinute(59)
            }
            if(hour == 0 & minute == 0 & second == 0){
                setDay(day - 1)
                setHour(23)
            }
        },1000)
    }
}
 
export default Discount;
