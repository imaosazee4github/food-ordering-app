import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Header} from '../components/Header';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Carts from '../pages/Carts';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Payment from '../pages/PaymentSucess';

const Navigation = () => {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/carts' element={<Carts />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/payment' element={<Payment />} />
                </Routes>

        </BrowserRouter>
    )
}

export default Navigation;