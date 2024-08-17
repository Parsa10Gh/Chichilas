import React , {useState,useRef,createRef} from "react";
import './filter.css'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {RiArrowDropUpLine} from 'react-icons/ri'
import Slider from '@mui/material/Slider';
import FormControlLabel from '@mui/material/FormControlLabel';
import IOSSwitch from "./switchButton";


const Filter = (props) => {
    const[allProducts,setAllProducts] = useState([
        {id: 1, name: 'عروسک', items: ['خرسی','دختر بچه','پونی'], isOpen:false},
        {id: 2, name: 'لباس شخصیت های کارتونی', items: ['مردعنکبوتی','بتمن','هالک'], isOpen:false},
        {id: 3, name: 'تم تولد', items: ['صورتی','دختر کفشدوزی','نینجا'], isOpen:false},
        {id: 4, name: 'عروسک دست ساز', items: ['خرسی','دختر بچه','پونی'], isOpen:false},
        {id: 5, name: 'لباس حیوانات عروسکی', items: ['خرس','خرگوش','شیر'], isOpen:false}
    ])

    let productsAry = [];
    let allProductsCopy = [...allProducts]

    let ulElemRefs= React.useRef([]);
    let arrowDownRefs = React.useRef([]);
    let arrowUpRefs = React.useRef([]);

    ulElemRefs.current = allProductsCopy.map((_, i) => ulElemRefs.current[i] = createRef());
    arrowDownRefs.current = allProductsCopy.map((_, i) => arrowDownRefs.current[i] = createRef());
    arrowUpRefs.current = allProductsCopy.map((_, i) => arrowUpRefs.current[i] = createRef());

    
    productsAry = allProductsCopy.map((product,i)=> {
        let productContent = [];
        productContent = product.items.map((item)=>{
            return (<li>{item}</li>)
        })
 
        return (<>
            <li className="filter-group-list-item" onClick={() => showContent(product.id)}>
                <div className="filter-group-item-title">{product.name}<div ref={arrowDownRefs.current[i]} className="filter-group-item-title-downIcon"><RiArrowDropDownLine/></div><div ref={arrowUpRefs.current[i]} className="filter-group-item-title-upIcon"><RiArrowDropUpLine/></div></div>
                <ul ref={ulElemRefs.current[i]} className="filter-group-item-contents">
                    {productContent}
                </ul>
            </li>
        </>)
    })

    const[colors,setColors] = useState([{colorName: 'زرد',theColor: 'yellow'},{colorName: 'آبی',theColor: 'blue'},{colorName: 'مشکی',theColor: 'black'},
    {colorName: 'قرمز',theColor: 'red'},{colorName: 'سبز',theColor: 'green'},{colorName: 'صورتی',theColor: 'pink'},{colorName: 'سفید',theColor: 'white'},
    {colorName: 'بنفش',theColor: 'purple'}])

    let colorsAry = colors.map((color) => {
        return(
            <>
                <li className="filter-color-list-item">
                    <div className="filter-color-item-info">
                        <div className="filter-color-item-colorBox" style={{backgroundColor: color.theColor}}></div>
                        {color.colorName}
                    </div>
                    <input type={"checkbox"}></input>
                </li>
            </>
        )
    });

    const filterColorUl = useRef(0);
    const [filterColorIsOpen,setFilterColorIsOpen] = useState(false);
    const filterColorUpArrow = useRef(0);
    const filterColorDownArrow = useRef(0);

    const filterSizeUl = useRef(0);
    const [filterSizeIsOpen,setFilterSizeIsOpen] = useState(false);
    const filterSizeUpArrow = useRef(0);
    const filterSizeDownArrow = useRef(0);

    const filterPriceDiv = useRef(0);
    const [filterPriceIsOpen,setFilterPriceIsOpen] = useState(false);
    const filterPriceUpArrow = useRef(0);
    const filterPriceDownArrow = useRef(0);
    
    function valuetext(value) {
        return `${value}°C`;
    };
      
    const [priceValue, setPriceValue] = React.useState([0, 60]);
      
    const handleChange = (event, newValue) => {
        setPriceValue(newValue);
    };


    return ( 
        <>
            <div className="filter-group">
                <h6>دسته بندی ها</h6>
                <ul className="filter-group-list list-unstyled">
                    {productsAry}
                </ul>
            </div>

            <div className="filter-color">
                <div className="filter-color-title" onClick={showColors}>
                    <h5>فیلتر بر اساس رنگ</h5>
                    <div className="filter-color-item-title-downIcon" ref={filterColorDownArrow}><RiArrowDropDownLine/></div>
                    {/*OR*/}
                    <div className="filter-color-item-title-upIcon"  ref={filterColorUpArrow}><RiArrowDropUpLine/></div>
                </div>
                <ul className="filter-color-list" ref={filterColorUl}>
                    {colorsAry}
                </ul>
            </div>

            <div className="filter-size">
                <div className="filter-size-title" onClick={showSizes}>
                    <h5>فیلتر بر اساس ارتفاع عروسک</h5>
                    <div className="filter-size-item-title-downIcon" ref={filterSizeDownArrow}><RiArrowDropDownLine/></div>
                    {/*OR*/}
                    <div className="filter-size-item-title-upIcon"  ref={filterSizeUpArrow}><RiArrowDropUpLine/></div>
                </div>
                <ul className="filter-size-list" ref={filterSizeUl}>
                    <li className="filter-size-list-item"><h6>سایز بزرگ</h6><input type={"checkbox"}></input></li>
                    <li className="filter-size-list-item"><h6>سایز متوسط</h6><input type={"checkbox"}></input></li>
                    <li className="filter-size-list-item"><h6>سایز کوچک</h6><input type={"checkbox"}></input></li>
                </ul>
            </div>

            <div className="filter-price">
                <div className="filter-price-title" onClick={showPrices}>
                    <h5>فیلتر بر اساس قیمت</h5>
                    <div className="filter-price-item-title-downIcon" ref={filterPriceDownArrow}><RiArrowDropDownLine/></div>
                    {/*OR*/}
                    <div className="filter-price-item-title-upIcon"  ref={filterPriceUpArrow}><RiArrowDropUpLine/></div>
                </div>
                <div className="filter-price-wantedPrice" ref={filterPriceDiv}>
                    {/* <input type="range" /> */}
                    <Slider getAriaLabel={() => 'Temperature range'} value={priceValue} onChange={handleChange} valueLabelDisplay={priceValue} getAriaValueText={valuetext}/>
                </div>
            </div>

            <div className="filter-specialOffer">
                <h6>فقط پیشنهاد های ویژه</h6>
                <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}/>
            </div>
        </>
    );

    function showContent(productId){
        console.log(ulElemRefs);
        props.setActiveFilter(allProducts[productId-1].name);
        // console.log(props.activeFilter);
        if(allProducts[productId-1].isOpen){
            ulElemRefs.current[productId-1].current.style.display = 'none';
            allProductsCopy[productId-1].isOpen = false;
            setAllProducts(allProductsCopy);
            arrowDownRefs.current[productId-1].current.style.display = 'flex';
            arrowUpRefs.current[productId-1].current.style.display = 'none';

        }else{
            ulElemRefs.current[productId-1].current.style.display = 'block';
            allProductsCopy[productId-1].isOpen = true;
            setAllProducts(allProductsCopy);
            arrowDownRefs.current[productId-1].current.style.display = 'none';
            arrowUpRefs.current[productId-1].current.style.display = 'flex';
        }
    }

    function showColors(){
        // console.log(props);
        if(filterColorIsOpen){
            setFilterColorIsOpen(false);
            filterColorUl.current.style.display = 'none';

            filterColorDownArrow.current.style.display = 'flex';
            filterColorUpArrow.current.style.display = 'none'
        }else{
            setFilterColorIsOpen(true);
            filterColorUl.current.style.display = 'block';

            filterColorUpArrow.current.style.display = 'flex'
            filterColorDownArrow.current.style.display = 'none';
        }
    }
    function showSizes(){
        // console.log(props);
        if(filterSizeIsOpen){
            setFilterSizeIsOpen(false);
            filterSizeUl.current.style.display = 'none';

            filterSizeDownArrow.current.style.display = 'flex';
            filterSizeUpArrow.current.style.display = 'none'
        }else{
            setFilterSizeIsOpen(true);
            filterSizeUl.current.style.display = 'block';

            filterSizeUpArrow.current.style.display = 'flex'
            filterSizeDownArrow.current.style.display = 'none';
        }
    }

    function showPrices(){
        if(filterPriceIsOpen){
            setFilterPriceIsOpen(false);
            filterPriceDiv.current.style.display = 'none';

            filterPriceDownArrow.current.style.display = 'flex';
            filterPriceUpArrow.current.style.display = 'none'
        }else{
            setFilterPriceIsOpen(true);
            filterPriceDiv.current.style.display = 'block';

            filterPriceUpArrow.current.style.display = 'flex'
            filterPriceDownArrow.current.style.display = 'none';
        }
    }
}
 
export default Filter;