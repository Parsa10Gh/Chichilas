import React , {useState , useRef} from "react";
import './products.css'
import Filter from "./filter/filter";
import img1 from '../../images/kaktoos.jpg'
import img2 from '../../images/Capture.jpg'
import img3 from '../../images/0001647_-_500_1.jpeg'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import {GrSort} from 'react-icons/gr'
import {BiFilterAlt} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import { display } from "@mui/system";

const Products = () => {
    const[activeFilter,setActiveFilter] = useState('لباس شخصیت های کارتونی ')

    const[products,setProducts] = useState([
        {name: 'عروسک بچه دختر  مدل warm baby کد G۰۱۳۱', img: img1, price: 564000, discount: false},
        {name: 'عروسک بچه دختر  مدل warm baby کد G۰۱۳۱', img: img2, price: 564000, discount: false},
        {name: 'عروسک بچه دختر  مدل warm baby کد G۰۱۳۱', img: img3, price: 564000, discount: false},
        {name: 'عروسک بچه دختر  مدل warm baby کد G۰۱۳۱', img: img1, price: 564000, discount: true, discountedPrice: 554000},
        {name: 'عروسک بچه دختر  مدل warm baby کد G۰۱۳۱', img: img2, price: 564000, discount: false},
        {name: 'عروسک بچه دختر  مدل warm baby کد G۰۱۳۱', img: img1, price: 564000, discount: false},
        {name: 'عروسک بچه دختر  مدل warm baby کد G۰۱۳۱', img: img3, price: 564000, discount: false},
        {name: 'عروسک بچه دختر  مدل warm baby کد G۰۱۳۱', img: img2, price: 564000, discount: false},
        {name: 'عروسک بچه دختر  مدل warm baby کد G۰۱۳۱', img: img1, price: 564000, discount: true, discountedPrice: 554000},
        {name: 'عروسک بچه دختر  مدل warm baby کد G۰۱۳۱', img: img3, price: 564000, discount: false},
        {name: 'عروسک بچه دختر  مدل warm baby کد G۰۱۳۱', img: img2, price: 564000, discount: false},
        {name: 'عروسک بچه دختر  مدل warm baby کد G۰۱۳۱', img: img3, price: 564000, discount: false},
        {name: 'عروسک بچه دختر  مدل warm baby کد G۰۱۳۱', img: img1, price: 564000, discount: false},
        {name: 'عروسک بچه دختر  مدل warm baby کد G۰۱۳۱', img: img2, price: 564000, discount: false},
        {name: 'عروسک بچه دختر  مدل warm baby کد G۰۱۳۱', img: img3, price: 564000, discount: true, discountedPrice: 554000},
        {name: 'عروسک بچه دختر  مدل warm baby کد G۰۱۳۱', img: img1, price: 564000, discount: false},
        {name: 'عروسک بچه دختر  مدل warm baby کد G۰۱۳۱', img: img2, price: 564000, discount: false},
        {name: 'عروسک بچه دختر  مدل warm baby کد G۰۱۳۱', img: img3, price: 564000, discount: false},
        {name: 'عروسک بچه دختر  مدل warm baby کد G۰۱۳۱', img: img1, price: 564000, discount: false},
        {name: 'عروسک بچه دختر  مدل warm baby کد G۰۱۳۱', img: img2, price: 564000, discount: false},
        {name: 'عروسک بچه دختر  مدل warm baby کد G۰۱۳۱', img: img3, price: 564000, discount: false},
        {name: 'عروسک بچه دختر  مدل warm baby کد G۰۱۳۱', img: img1, price: 564000, discount: false},
        {name: 'عروسک بچه دختر  مدل warm baby کد G۰۱۳۱', img: img2, price: 564000, discount: false},
        {name: 'عروسک بچه دختر  مدل warm baby کد G۰۱۳۱', img: img3, price: 564000, discount: false},
        {name: 'عروسک بچه دختر  مدل warm baby کد G۰۱۳۱', img: img1, price: 564000, discount: false},
        {name: 'عروسک بچه دختر  مدل warm baby کد G۰۱۳۱', img: img2, price: 564000, discount: false},
        {name: 'عروسک بچه دختر  مدل warm baby کد G۰۱۳۱', img: img3, price: 564000, discount: false},
        {name: 'عروسک بچه دختر  مدل warm baby کد G۰۱۳۱', img: img1, price: 564000, discount: false}
    ]);
    
    const [isFilterOn,setIsFilterOn] = useState(false);

    const popularLi = useRef(0);
    const newestLi = useRef(0);
    const cheapestLi = useRef(0);
    const expensiveLi = useRef(0);
    const sortListUl = useRef(0);
    const filterDivElem = useRef(0);


    let productsAry = products.map((product) => {
        return(
            <>
                <div className="col-lg-4 products-allProducts-col">
                    <div className="products-allProducts-card">
                        <img src={product.img} alt="" />
                        <h6>{product.name}</h6>
                        { !product.discount ? (<p className="products-allProducts-card-priceBox"><span className="products-allProducts-card-price">{product.price}</span> تومان</p>) : 
                        (<p className="products-allProducts-card-discountedPriceBox"><span className="products-allProducts-card-beforeDiscountPrice">{product.price}</span> <span className="products-allProducts-card-price">{product.discountedPrice}</span> تومان</p>)}
                    </div>
                </div>
            </>
        )
    })
    return ( 
        <>
            <div className="productsPath">
                <p>صفحه اول </p>
                <div className="productsPath-icon"><MdKeyboardArrowLeft/></div>
                <p>{activeFilter}</p>
            </div>
            <h3 className="products-activeTitle">{activeFilter}</h3>
            <div className="products-container">
                <div className="products-filter" ref={filterDivElem}>
                    <div className="products-filter1400-title" >
                        <h4>فیلتر ها</h4>
                        <span onClick={showFilter}><AiOutlineClose/></span>
                    </div>
                    <Filter activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
                </div>
                <div className="products-allProducts">
                    <div className="products-sort">
                        <div className="products-sort-title">
                            <p><GrSort/> مرتب سازی  بر اساس :</p>
                        </div>
                        <ul className="products-sort-list" ref={sortListUl}>
                            <li className="products-sort-list-activeItem" onClick={switchOrder} ref={popularLi}>پرفروش ترین</li>
                            <li className="products-sort-list-item" onClick={switchOrder} ref={newestLi}>جدید ترین</li>
                            <li className="products-sort-list-item" onClick={switchOrder} ref={cheapestLi}>ارزان ترین</li>
                            <li className="products-sort-list-item" onClick={switchOrder} ref={expensiveLi}>گران ترین</li>
                        </ul>
                    </div>
                    <div className="products-filter-1400px" onClick={showFilter}>
                        <h6><BiFilterAlt/> فیلتر ها</h6>
                    </div> 
                    <div className="row products-allProducts-row">
                        {productsAry}
                    </div>
                </div>
            </div>
        </>
    );

    function showFilter() {
        if(isFilterOn){
            filterDivElem.current.style.display = 'none';
            setIsFilterOn(false);
        }else{
            filterDivElem.current.style.display = 'block';
            setIsFilterOn(true)
        }
    }

    function switchOrder(e){
        // console.log(e.target.className);
        // console.log(sortListUl.current.children[0].className);
        if(e.target.className == 'products-sort-list-item'){
            let allLi = [...sortListUl.current.children]
            // console.log(allLi);
            allLi.map((li) => {
                li.className = 'products-sort-list-item';
            })
            e.target.className = 'products-sort-list-activeItem'
        }else{
            // nothing :)
        }
    }
}
 
export default Products;