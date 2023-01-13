import { useState } from 'react';
import { TfiViewGrid } from "react-icons/tfi";
import { CgShoppingBag } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import './Header.css'
import React from 'react';
import Search from './API/Search';
function Header() {
    const [showQr, setShowQr] = useState(false)
    const ShowQR = () => {
        return (
            <div className='header__qr'>
                <img data-src="https://media3.scdn.vn/img2/2018/5_23/R842FO.png" src="https://media3.scdn.vn/img2/2018/5_23/R842FO.png" alt="sendo-qr" class="header__qr-img" />
                <span className='header__qr-img--name'>Quét để tải ứng dụng</span>
            </div>

        )
    }
    const [showName, setShowName] = useState(false)
    const ShowNAME = () => {
        return (
            <ul className='header__navbar-menu'>
                <li className='header__navbar-use--item'>
                    Trung tâm hỗ trợ
                </li>
                <li className='header__navbar-use--item'>
                    Trả hàng hoàn tiền
                </li>
            </ul>
        )
    }
    const [showInput, setShowInput] = useState(false)
    const ShowInput = () => {
        return (
            <ul className='header__navbar--input'>
                <div className='header__navbar-search'>
                    <input type='text' className='header__navbar-search--item' placeholder='Nhập mã đơn hàng' />
                </div>
                <div className='header__navbar-search'>
                    <input type='text' className='header__navbar-search--item' placeholder='Email/Số điện thoại' />
                </div>
                <a href='' className='header__navbar-search--item--name'> Kiểm tra</a>
            </ul>
        )
    }
    const [query,setQuery] = useState("") 
    const [dataProducts, setDataProducts] = useState([])

    return (
        <div className='Header'>
            <div className='header__navbar'>
                <ul className='header__navbar-list'>
                    <li className='header__navbar-item header__navbar-item--has--qr ' onClick={() => setShowQr(!showQr)}>
                        Tải ứng dụng
                        {showQr ? <ShowQR /> : null}
                    </li>
                    <li className='header__navbar-item header__navbar-use ' onClick={() => setShowName(!showName)}>
                        Chăm sóc khách hàng
                        {showName ? <ShowNAME /> : null}
                    </li>
                    <li className='header__navbar-item' onClick={() => setShowInput(!showInput)}>
                        Kiểm tra đơn hàng
                        {showInput ? <ShowInput /> : null}

                    </li>

                </ul>
            </div>
            {/* header with search */}
            <div className='header-with'>
                <div className='header-with-search'>
                    <div className='header__logo'>
                        <span className='header__logo--name'>Sendo</span>
                        <TfiViewGrid className="header__logo--icon" />
                    </div>
                    <div class="header__search">
                        <div class="header__search-input-wrap header__search-select">                                               
                            <Search setDataProducts={setDataProducts} dataProducts={dataProducts} /> 
                            <BiSearch className='header__search-select--icon' />
                            <CgShoppingBag className='header__search-icon--big' />
                            <button className='header__search-use'>
                                <span className='header__search-use-name'>Đăng nhập</span>
                            </button>
                        </div>
                    </div>
                </div>               
            </div>
        </div>
    )
}
export default Header;