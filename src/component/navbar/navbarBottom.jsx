import React , {useRef} from 'react';
import './navbarBottom.css'
import {AiOutlineInstagram} from 'react-icons/ai';
import {TbBrandTelegram} from 'react-icons/tb';
import {FaWhatsapp} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FiTwitter} from 'react-icons/fi';
import {BsList} from 'react-icons/bs'


const NavbarBottom = () => {
    const groupsModal = useRef()
    return ( 
        <>
              <div className="container-fluid sec2">
                <div className="row row2">
                    <div className="col-xl-5 col-lg-4 col-6 my-group-col">
                        <div className="socials">
                            <ul className="socials-list">
                                <li className="socials-list-item"><AiOutlineInstagram/></li>
                                <li className="socials-list-item navBottom-hide"><TbBrandTelegram/></li>
                                <li className="socials-list-item"><FaWhatsapp/></li>
                                <li className="socials-list-item navBottom-hide"><FaLinkedin/></li>
                                <li className="socials-list-item navBottom-hide"><FiTwitter/></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-8 col-6 my-group-col">
                        <div className="nav-groups">
                            <ul className="groups-list navBottom-hide">
                                <li className="groups-list-item" onClick={()=> document.location.pathname = 'products'}>عروسک</li>
                                <li className="groups-list-item" onClick={()=> document.location.pathname = 'products'}>لباس شخصیت کارتونی</li>
                                <li className="groups-list-item" onClick={()=> document.location.pathname = 'products'}>عروسک دست ساز</li>
                                <li className="groups-list-item" onClick={()=> document.location.pathname = 'products'}>تم تولد</li>
                                <li className="groups-list-item" onClick={()=> document.location.pathname = 'products'}>جا کلیدی عروسکی</li>
                            </ul>
                            <div className="all-groups" onMouseEnter={openGroups} onMouseLeave={closeGroups}><span><BsList/></span>دسته بندی ها</div>
                        </div>
                    </div>
                </div>
                <div className="groups-modal" onMouseEnter={openGroups} onMouseLeave={closeGroups} ref={groupsModal}>
                    <ul className='groups-modal-list'>
                        <li className="groups-modal-list-item" onClick={()=> document.location.pathname = 'products'}>عروسک</li>
                        <li className="groups-modal-list-item" onClick={()=> document.location.pathname = 'products'}>لباس شخصیت کارتونی</li>
                        <li className="groups-modal-list-item" onClick={()=> document.location.pathname = 'products'}>عروسک دست ساز</li>
                        <li className="groups-modal-list-item" onClick={()=> document.location.pathname = 'products'}>تم تولد</li>
                        <li className="groups-modal-list-item" onClick={()=> document.location.pathname = 'products'}>جا کلیدی عروسکی</li>
                    </ul>
                </div>
            </div>
        </>
     );

    function openGroups(){
        // console.log('sssss');
        // document.body.style.filter = 'opacity(0.75)';
        groupsModal.current.style.display = 'flex';
        groupsModal.current.style.filter = 'opacity(1)';

    }
    function closeGroups(){
        // console.log('sssss');
        // document.body.style.filter = 'opacity(1)';
        groupsModal.current.style.display = 'none';

    }
}
 
export default NavbarBottom;