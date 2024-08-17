import React , {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './navbarTop.css'
import BasketDrawer from './basketDrawer';
import mainlogo from '../../images/Logo_site.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import {CgShoppingBag} from 'react-icons/cg';
import {FiUser} from 'react-icons/fi';
import {FiBell} from 'react-icons/fi';
import { FiSearch } from 'react-icons/fi';


const NavbarTop = () => {
    const [open, setOpen] = useState(false);

    function closeHandler(){
        setOpen(false);
    }

    return ( 
        <>
            <div className="container-fluid navTop-container-lg">
                <div className="row navTop-row">
                    <div className="col-xl-2 col-lg-2 col-3 navTop-col">
                        <div className="navTop-logo">
                            <img src={mainlogo} alt=""/>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-4 col-5 navTop-col">
                        <div className="navTop-search-bar">
                            <button className='navTop-search-btn'><FiSearch/></button><input placeholder="نام محصول خود را در اینجا جستجو کنید ... " type="text"/>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 navTop-contact-col">
                        <div className="navTop-contact">
                            <div className="navTop-contact-icon"><FontAwesomeIcon className='i' icon={faPhoneAlt} /></div>
                            <div className="navTop-contact-text">
                                <h6>021-22356977</h6>
                                <p>از شنبه تا 5 شنبه | 9:30 الی 20</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-4 navTop-col">
                        <div className="navTop-user-profile">
                            <ul className="navTop-user-profile-list">
                                <li className="navTop-user-profile-item"><FiBell/></li>
                                <li className="navTop-user-profile-item" ><FiUser/></li>
                                <li className="navTop-user-profile-item" onClick={() => setOpen(true)}><CgShoppingBag/></li>
                                <BasketDrawer open={open} close={closeHandler}/>
                            </ul>
                            <div className="navTop-user-profile-count">0</div>
                        </div>
                    </div>
                </div>
            </div>
{/* ///////////////////////   width < 992px   ////////////////////// */}
            <div className="container-fluid navTop-container">
                <div className="row navTop-row">
                    <div className="col-xl-2 col-lg-2 col-6 navTop-col">
                        <div className="navTop-logo">
                            <img src={mainlogo} alt=""/>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-6 navTop-col">
                        <div className="navTop-user-profile">
                            <ul className="navTop-user-profile-list">
                                <li className="navTop-user-profile-item"><FiBell/></li>
                                <li className="navTop-user-profile-item"><FiUser/></li>
                                <li className="navTop-user-profile-item" onClick={() => setOpen(true)}><CgShoppingBag/></li>
                            </ul>
                            <div className="navTop-user-profile-count">0</div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-4 col-12 navTop-col">
                        <div className="navTop-search-bar">
                            <button className='navTop-search-btn'><FiSearch/></button><input placeholder="نام محصول خود را در اینجا جستجو کنید ... " type="text"/>
                        </div>
                    </div>
                </div>
            </div>      
        </>
    );

    // function test (){
    //     console.log(document.location);
    //     document.location.pathname = 'test'
    // } 

}
 
export default NavbarTop;