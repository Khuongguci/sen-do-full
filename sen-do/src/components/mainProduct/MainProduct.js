import Filter from '../API/Filter';
import Product from '../API/Product';
import './MainProduct.css'
import { useState, useEffect } from 'react';
function MainProduct() {
    const [dataProducts, setDataProducts] = useState([])
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/tasks')
            .then(res => res.json())
            .then(data => {
                setDataProducts(data);
                setProducts(data);
            })
    }, [])
    return (
        <div className='main__products'>
            <div className="filter">
                <ul className="filter__title">
                    <li className="filter__title-item">
                        <a href='#' className="filter__title-item--a">Sendo.vn</a>
                    </li>
                    <li className='slash'>/</li>
                    <li className="filter__title-item">
                        <span className="filter__title-item--span">Kết quả tìm kiếm </span>
                    </li>
                </ul>
                <div className='tilter__search'>
                <span className='title__span-name'>giầy thể thao nam</span>
                <span className='title__span'>Tìm thấy hơn 10.000 sản phẩm</span>
                </div>
                <div className='title'>
                </div>
            </div>

            <div className='grid__row main__product'>
                <div className='grid__column-2'>
                    <nav class="product">
                        <Filter products={products} setDataProducts={setDataProducts} dataProducts={dataProducts} />
                    </nav>
                </div>
                <div className='grid__column-10'>
                    <div className='home-filter'>
                        <label for="product-group" className='product-group--name'>Sắp xếp theo:</label>
                        <select className="product-group" id="product-group">

                            <option value="Đề cử" className='product-group--item'>Đề cử</option>
                            <option value="Bán chạy" className='product-group--item'>Bán chạy</option>
                            <option value="Giá thấp" className='product-group--item'>Giá thấp</option>
                            <option value="Giá cao" className='product-group--item'>Giá cao</option>
                            <option value="Lượt yêu thích" className='product-group--item'>Lượt yêu thích</option>
                        </select>
                    </div>
                    <div className='grid__column-2-4'>
                        <Product dataProducts={dataProducts} />
                    </div>

                </div>
            </div>
        </div>
    )
}
export default MainProduct;