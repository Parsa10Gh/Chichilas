import React , {useState , useEffect , useRef} from 'react';
import './basketDrawer.css'
import Drawer from '@mui/material/Drawer';
import { IoClose } from 'react-icons/io5';
import {GoTrashcan} from 'react-icons/go'
import {IoMdAdd} from 'react-icons/io'
import img1 from '../../images/1549599042_1582029365__750-5442.jpg';
import img2 from '../../images/download.jpg';
import { width } from '@mui/system';

const BasketDrawer = (props) => {
    const [basketProducts,setBasketProducts] = useState([{id: 1, name: 'لباس مرد عنکبوتی', price: 300000 ,img: img1 ,count: 1},{id: 2, name: 'لباس مرد عنکبوتی', price: 245000 ,img: img2, count: 1}])
    const [totalPrice,setTotalPrice] = useState(0);
    const [redBarWidth,setRedBarWidth] = useState(0);
    const [remainingMoney,setRemainingMoney] = useState(0)

    let addedProducts = [...basketProducts]
    let addedProductsCard = []; 
    addedProductsCard = addedProducts.map((product,index) => {

        return (
            <>
                <li className="basket-drawer-products-item">
                    <div className="basket-drawer-products-item-img">
                        <img src={product.img} alt="" />
                    </div>
                    <div className="basket-drawer-products-item-desc">
                        <h6>{product.name}</h6>
                        <div className="basket-drawer-products-item-price">
                            <div className="">
                                <button className='add-product-btn' onClick={() => {countIncrease(index+1)}}><IoMdAdd/></button>
                                <p>{product.count}</p>
                                <button className='delete-product-btn' onClick={() => {countDecrease(index+1)}}><GoTrashcan/></button>
                            </div>
                            <p>{product.price} تومان</p>
                        </div>
                    </div>
                </li>
            </>
        )
    })

    useEffect(() => {
        priceChangeHandler()
    }) 

    function priceChangeHandler(){
        let priceSum = 0;
        basketProducts.forEach((product) => {
            priceSum += (product.price * product.count);
        })
        setTotalPrice(priceSum);

        let redWidth = (totalPrice/500000)*100;
        setRedBarWidth(redWidth);

        let newRemainMoney = 500000 - totalPrice;
        if(newRemainMoney <=0){
            setRemainingMoney(0)
        }else{
            setRemainingMoney(newRemainMoney);
        }
    }

    const redBarDivElem = useRef(null)
    return ( 
        <>
            <Drawer open={props.open} anchor={"left"} onClose={() => props.close()}>
                <div className="basket-drawer">
                    <div className="basket-drawer-header">
                        <h2>سبد خرید من</h2>
                        <button onClick={() => props.close()}><IoClose/></button>
                    </div>
                    <div className="basket-drawer-products">
                        <ul className="basket-drawer-products-list">
                            {addedProductsCard}
                        </ul>
                    </div>
                    <div className="basket-drawer-totalPrice">
                        <div className='basket-drawer-totalPrice-box'>
                            <h6>مجموع سفارش شما:</h6>
                            <p>{totalPrice} تومان</p>
                        </div>
                        <div className="basket-drawer-discount-bar">
                            <div className="basket-drawer-discount-bar-red" style={{width:`${redBarWidth}%`}} ref={redBarDivElem}></div>
                        </div>
                        <div className="basket-drawer-remainingMoney">
                            <h5>{remainingMoney} تومان تا ارسال رایگان</h5>
                        </div>
                        <div className="basket-drawer-btns">
                            <button className='basket-drawer-btns-seeBasket'>مشاهده سبد خرید</button>
                            <button className='basket-drawer-btns-pay'>تسویه حساب</button>
                        </div>
                    </div>
                </div>
            </Drawer>
        </>
    );

    function countIncrease(productId){
        let updatedProducts = [...basketProducts];
        updatedProducts[productId-1].count++;
        setBasketProducts(updatedProducts)
        priceChangeHandler()
    }

    function countDecrease(productId){
        let updatedProducts = [...basketProducts];
        if(updatedProducts[productId-1].count == 1){
            updatedProducts.splice(productId-1,1)
            console.log(updatedProducts);
        }else{
            updatedProducts[productId-1].count--;
        }

        setBasketProducts(updatedProducts);
        priceChangeHandler()
    }
}
 
export default BasketDrawer;