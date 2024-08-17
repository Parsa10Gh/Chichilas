import React , {Component} from 'react';
import Slider from './slider/slider';
import SiteIntroduction from './siteIntroduction/siteIntroduction';
import Popular from './popular/popular';
import Discount from './discount/discount';
import TopGrossing from './topGrossing/topGrossing';
import Services from './services/services';
import About from './about/about';
import Journal from './jouranl/journal';


const Home = () => {
    return ( 
        <>
            <Slider/>
            <SiteIntroduction/>
            <Popular/>
            <Discount/>
            <TopGrossing/>
            <Services/>
            <About/>
            <Journal/>
        </>
     );
}
 
export default Home;