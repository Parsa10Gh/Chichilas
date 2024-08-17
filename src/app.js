import React , {Component} from 'react';
import {Route , Routes , Navigate} from 'react-router-dom';
import Footer from './component/footer/footer';
import Home from './component/home/home';
import Navbar from './component/navbar/navbar';
import Products from './component/products/products';
class App extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <Navbar/>
                <Routes>
                    <Route path='/home' element={<Navigate replace to="/"/>}/>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/products' element={<Products/>}/>
                </Routes>
                <Footer/>
            </>
        );
    }
}
 
 
export default App;