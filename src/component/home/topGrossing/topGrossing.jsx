import React , {useRef , useState} from 'react';
import './topGrossing.css';
import myImg2 from '../../../images/1549599042_1582029365__750-5442.jpg'
import myImg from '../../../images/download.jpg'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {MdKeyboardArrowLeft} from 'react-icons/md'


const TopGrossing = () => {
    const groupUnactiveElem = useRef(0);
    const groupActiveElem = useRef(0);

    function changeGroup1(){
        groupUnactiveElem.current.className = 'topGrossing-groups-list-active-item';
        groupActiveElem.current.className = 'topGrossing-groups-list-item';
        
    }
    function changeGroup2(){
        groupUnactiveElem.current.className = 'topGrossing-groups-list-item';
        groupActiveElem.current.className = 'topGrossing-groups-list-active-item';         
    }

    const[products , setproducts] = useState([{id: 1,name: 'عروسک بچه دختر مدل warm baby', model: 'کد G۰۱۳۱', price: 581000, img: myImg },{id: 2,name: 'عروسک بچه دختر مدل warm baby', model: 'کد G۰۱۳۱', price: 582000, img:myImg2 },{id: 3,name: 'عروسک بچه دختر مدل warm baby', model: 'کد G۰۱۳۱', price: 583000, img:myImg },{id: 4,name: 'عروسک بچه دختر مدل warm baby', model: 'کد G۰۱۳۱', price: 584000, img:myImg2 },{id: 5,name: 'عروسک بچه دختر مدل warm baby', model: 'کد G۰۱۳۱', price: 585000, img:myImg },{id: 6,name: 'عروسک بچه دختر مدل warm baby', model: 'کد G۰۱۳۱', price: 586000, img:myImg2 }]);
    let allProducts = [];

    
    return ( 
        <>
            <div className="topGrossing-container">
            <button className='topGrossing-btn-l' onClick={prev}><MdKeyboardArrowLeft/></button>
            <button className='topGrossing-btn-r' onClick={next}><MdKeyboardArrowRight/></button>
                <div className="topGrossing-title">
                    <h1>پرفروش ترین ها</h1>
                </div>
                <div className="topGrossing-groups">
                    <ul className='topGrossing-groups-list list-unstyled'>
                        <li className='topGrossing-groups-list-item' onClick={changeGroup1} ref={groupUnactiveElem}>لباس عروسکی</li>
                        <li className='topGrossing-groups-list-active-item' onClick={changeGroup2} ref={groupActiveElem}>عروسک</li>
                    </ul>
                </div>
                <div className='topGrossing-products'>
                    <ul className='topGrossing-products-list list-unstyled'>
                        {
                            productGenerator()                 
                        }
                    </ul>
                </div>
                <button className='topGrossing-more-btn' onClick={()=> document.location.pathname = 'products'}>مشاهده بیشتر <MdKeyboardArrowLeft/></button>
            </div>
        </>
    );

    function productGenerator() {
        allProducts = [];
        for(let index=0; index<products.length; index++){
            if((products.length/4)-1 >= index | index >= (products.length - ((products.length/4)))){
                allProducts.push(
                    <>
                        <li className="topGrossing-products-list-item topGrossing-products-list-item-opacity">
                            <div className="topGrossing-item">
                                <div className="topGrossing-item-img">
                                    <img src={products[index].img} alt="" />
                                    <div className='discount-percent'>20%</div>
                                </div>
                                <div className="topGrossing-items-title">
                                    <div className='row'>
                                        <h5 className='col-12'>{products[index].name}</h5>
                                        <h5 className='col-12'>{products[index].model}</h5>
                                    </div>
                                </div>
                                <div className="topGrossing-items-price">
                                    <p><span className='before-topGrossing'>{products[index].price} </span><span className="after-topGrossing"> 564,000 </span> تومان</p>
                                </div>
                            </div>
                        </li>                    
                    </>
                )
            }else{
                allProducts.push(
                    <>
                        <li className="topGrossing-products-list-item">
                            <div className="topGrossing-item">
                                <div className="topGrossing-item-img">
                                    <img src={products[index].img} alt="" />
                                    <div className='discount-percent'>20%</div>
                                </div>
                                <div className="topGrossing-items-title">
                                    <div className='row'>
                                        <h5 className='col-12'>{products[index].name}</h5>
                                        <h5 className='col-12'>{products[index].model}</h5>
                                    </div>
                                </div>
                                <div className="topGrossing-items-price">
                                    <p><span className='before-topGrossing'>{products[index].price} </span><span className="after-topGrossing"> 564,000 </span> تومان</p>
                                </div>
                            </div>
                        </li>
                    </>
                )
            }
        }
            return allProducts;
    }

    function next() {
        let productsCopy = [...products]; //importent :-(
        let lastProduct = productsCopy.splice(-1);
        productsCopy.unshift(lastProduct[0]);
        setproducts(productsCopy);
    }

    function prev(){
        let productsCopy = [...products]; //importent :-(
        let firstProduct = productsCopy.splice(0,1);
        productsCopy.push(firstProduct[0]);
        setproducts(productsCopy);
    }

}
    
export default TopGrossing;

{/* <li className="topGrossing-products-list-item topGrossing-products-list-item-opacity">
<div className="topGrossing-item">
    <div className="topGrossing-item-img">
        <img src={myImg2} alt="" />
        <div className='discount-percent'>20%</div>
    </div>
    <div className="topGrossing-items-title">
        <div className='row'>
            <h5 className='col-12'>{products[1].name}</h5>
            <h5 className='col-12'>{products[1].model}</h5>
        </div>
    </div>
    <div className="topGrossing-items-price">
        <p><span className='before-topGrossing'>{products[1].price} </span><span className="after-topGrossing"> 564,000 </span> تومان</p>
    </div>
</div>
</li>
<li className="topGrossing-products-list-item">
<div className="topGrossing-item">
    <div className="topGrossing-item-img">
        <img src={myImg2} alt="" />
        <div className='discount-percent'>20%</div>
    </div>
    <div className="topGrossing-items-title">
        <div className='row'>
            <h5 className='col-12'>{products[1].name}</h5>
            <h5 className='col-12'>{products[1].model}</h5>
        </div>
    </div>
    <div className="topGrossing-items-price">
        <p><span className='before-topGrossing'>{products[1].price} </span><span className="after-topGrossing"> 564,000 </span> تومان</p>
    </div>
</div>
</li>
<li className="topGrossing-products-list-item">
<div className="topGrossing-item">
    <div className="topGrossing-item-img">
        <img src={myImg2} alt="" />
        <div className='discount-percent'>20%</div>
    </div>
    <div className="topGrossing-items-title">
        <div className='row'>
            <h5 className='col-12'>{products[1].name}</h5>
            <h5 className='col-12'>{products[1].model}</h5>
        </div>
    </div>
    <div className="topGrossing-items-price">
        <p><span className='before-topGrossing'>{products[1].price} </span><span className="after-topGrossing"> 564,000 </span> تومان</p>
    </div>
</div>
</li>
<li className="topGrossing-products-list-item">
<div className="topGrossing-item">
    <div className="topGrossing-item-img">
        <img src={myImg2} alt="" />
        <div className='discount-percent'>20%</div>
    </div>
    <div className="topGrossing-items-title">
        <div className='row'>
            <h5 className='col-12'>{products[1].name}</h5>
            <h5 className='col-12'>{products[1].model}</h5>
        </div>
    </div>
    <div className="topGrossing-items-price">
        <p><span className='before-topGrossing'>{products[1].price} </span><span className="after-topGrossing"> 564,000 </span> تومان</p>
    </div>
</div>
</li>
<li className="topGrossing-products-list-item">
<div className="topGrossing-item">
    <div className="topGrossing-item-img">
        <img src={myImg2} alt="" />
        <div className='discount-percent'>20%</div>
    </div>
    <div className="topGrossing-items-title">
        <div className='row'>
            <h5 className='col-12'>{products[1].name}</h5>
            <h5 className='col-12'>{products[1].model}</h5>
        </div>
    </div>
    <div className="topGrossing-items-price">
        <p><span className='before-topGrossing'>{products[1].price} </span><span className="after-topGrossing"> 564,000 </span> تومان</p>
    </div>
</div>
</li>
<li className="topGrossing-products-list-item topGrossing-products-list-item-opacity">
<div className="topGrossing-item">
    <div className="topGrossing-item-img">
        <img src={myImg2} alt="" />
        <div className='discount-percent'>20%</div>
    </div>
    <div className="topGrossing-items-title">
        <div className='row'>
            <h5 className='col-12'>{products[1].name}</h5>
            <h5 className='col-12'>{products[1].model}</h5>
        </div>
    </div>
    <div className="topGrossing-items-price">
        <p><span className='before-topGrossing'>{products[1].price} </span><span className="after-topGrossing"> 564,000 </span> تومان</p>
    </div>
</div>
</li> */}