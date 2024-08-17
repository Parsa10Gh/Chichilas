import React from 'react';
import './journal.css';
import {MdKeyboardArrowRight} from 'react-icons/md'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import myImg1 from '../../../images/107081378-1656361235570-GettyImages-1225403728_2.jpg'
import myImg2 from '../../../images/ScreenTimeKids-1303302438-770x533-1-650x428.jpg'
import myImg3 from '../../../images/6101036512835-1.jpg'
import myImg4 from '../../../images/portion-kids.jpg'



const Jouranl = () => {
    return ( 
        <>
            <div className="journal-container">
                <div className="journal-header">
                    <div className="journal-header-title">
                        <h1>مجله چیچیلاس</h1>
                    </div>
                    <div className="journal-btn">
                        <button className='journal-btn-r'><MdKeyboardArrowRight/></button>
                        <button className='journal-btn-l'><MdKeyboardArrowLeft/></button>
                    </div>
                </div>
                <div className="journal-cards">
                    <ul className="journal-cards-list list-unstyled">
                        <li className="journal-cards-list-item">
                            <div className="journal-card-container">
                                <div className="journal-item-date">۱۵ خرداد ۱۴۰۱</div>
                                <img src={myImg1} alt=""/>
                                <h3>دنیای اسباب بازی ها</h3>
                                <p>پرطرفدارترین عروسک باربی دخترانه جدید و شیک</p>
                            </div>
                        </li>
                        <li className="journal-cards-list-item">
                            <div className="journal-card-container">
                            <div className="journal-item-date">۱۵ خرداد ۱۴۰۱</div>
                                <img src={myImg2} alt=""/>
                                <h3>دنیای اسباب بازی ها</h3>
                                <p>پرطرفدارترین عروسک باربی دخترانه جدید و شیک</p>
                            </div>
                        </li>
                        <li className="journal-cards-list-item">
                            <div className="journal-card-container">
                                <div className="journal-item-date">۱۵ خرداد ۱۴۰۱</div>
                                <img src={myImg3} alt=""/>
                                <h3>دنیای اسباب بازی ها</h3>
                                <p>پرطرفدارترین عروسک باربی دخترانه جدید و شیک</p>
                            </div>
                        </li>
                        <li className="journal-cards-list-item">
                            <div className="journal-card-container">
                                <div className="journal-item-date">۱۵ خرداد ۱۴۰۱</div>
                                <img src={myImg4} alt=""/>
                                <h3>دنیای اسباب بازی ها</h3>
                                <p>پرطرفدارترین عروسک باربی دخترانه جدید و شیک</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <button className='journal-more-btn'>مقالات بیشتر <MdKeyboardArrowLeft/></button>
            </div>
        </>
     );
}
 
export default Jouranl;