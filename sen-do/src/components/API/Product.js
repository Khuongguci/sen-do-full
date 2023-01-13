import { useState, useEffect } from "react";
import './Product.css';
import { AiFillStar } from "react-icons/ai";
import Search from "./Search";

function formatCash(str) {
    return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + '.')) + prev
    })
}

function Product(props) {
    const { options, textSearch, dataProducts } = props;
    const [dataSearched, setDataSearched] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/tasks')
            .then(res => res.json())
            .then(data => {
                setDataSearched(data)
            })
    }, [])

    return (
        <div className="">
            <div className="group">
                {dataProducts.map(dataProducts =>
                    <div className="product">
                        <div>
                            <img className="product__img" src={dataProducts.image} alt="img" />
                        </div>
                        <div className="product__item">
                            <div className="product__name">
                                <span>{dataProducts.name}</span>
                            </div>
                            <div className="item">
                                <div className="product__item-price">
                                    {!dataProducts.sale_percent ? null :
                                        <div className="item-price">
                                            <span className="item-discount-max">{formatCash( dataProducts.default_price_max)}đ  </span>
                                            <span className="item-discount-percent">-{dataProducts.sale_percent}%</span>
                                        </div>
                                    }
                                    <div className="product__item-price"></div>
                                </div>
                                <div className="item-discount">
                                    <div>
                                        <span className="item-discount-price">{formatCash(dataProducts.sale_price_max)}đ</span>
                                    </div>
                                    <div className="item-pay-text">
                                        <div className="item-pay--later">                                           
                                            <span className="pay--text">{dataProducts.Shop.text}  </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product__item-sold">
                                    <span className="item-sold">{!dataProducts.sold ? null :
                                        "Đã bán" + " " + dataProducts.sold}
                                    </span>
                                </div>
                                <div className="product__item-rate--star">
                                    {!dataProducts.Shop.star ? null :
                                        <div className="item-rated-name">
                                            <span className="item-rated">{dataProducts.Shop.star + "/5"}
                                                <AiFillStar className="item-rate-star" />
                                            </span>
                                            <span className="item-name">{!dataProducts.Shop.ware_house_region_name ? null :
                                                dataProducts.Shop.ware_house_region_name}
                                            </span>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="product-see--more">
                <button className="btn">
                    <span className="item-see--more">Xêm thêm</span>
                </button>
            </div>

        </div>
    )
}
export default Product;