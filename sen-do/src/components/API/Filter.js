import { useState, useEffect } from "react";
import './Filter.css'
import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi";
function formatPrice(pr) {
    if (pr > 10000 && pr < 1000000) return `${pr / 1000}K`
    else if (pr >= 1000000) return `${pr / 1000000}M`
    return pr;
}
function handlePrice(gtprice, ltprice) {
    if (gtprice === -1) return `Trên ${formatPrice(ltprice)}`
    else if (ltprice === -1) return `Dưới ${formatPrice(gtprice)}`
    else if (ltprice !== -1 && gtprice !== -1) return `Từ ${formatPrice(ltprice)} - đến ${formatPrice(gtprice)}`
}

function Filter(props) {
    let { optionsFilter, setOptionsFilter, setDataProducts, dataProducts, products } = props;
    const [hidden, setHidden] = useState(true)
    const [data, setData] = useState([])
    const [listData, setListData] = useState([])
    useEffect(() => {
        fetch('http://localhost:8001/filtersObject')
            .then(res => res.json())
            .then(posts => {
                posts[0].attribute_value.push({
                    "option_id": 100,
                    "option_name": "TP.HCM"
                })
                posts[0].attribute_value.push({
                    "option_id": 101,
                    "option_name": "Hà Nam"
                })
                setData(posts);
            })

    }, [])
    const dataPre = dataProducts;

    const handleShowListOptions = () => {
        setHidden(!hidden);
    }
    return (
        <div className="filter__Scrollbar">
            {
                data.map((filter, id) => {
                    if (!filter.attribute_name) return null;
                    return (
                        <div className={`filter-object`} id={`filter-object-${id}`}>
                            <div className="filter__header">
                                <h3 className="filter-tilter">
                                    {filter.attribute_name}
                                    <button className="btn--toggle">
                                        <button type="button">
                                            <div
                                                id="toggle-btn"
                                                onClick={handleShowListOptions}
                                            >
                                                <TfiAngleUp className={hidden ? " " : "rotate-btn"} />
                                            </div>
                                        </button>
                                    </button>
                                </h3>
                            </div>
                            <div id="wrap-listOption">  
                                {
                                    hidden && filter.attribute_value?.map((option, index) =>
                                    (<>
                                        {
                                            option.option_name ?
                                                <div key={id} className="filter-option " >

                                                    <input onChange={(e) => {
                                                        setDataProducts(products.filter((item) => {
                                                            if (e.target.checked)
                                                                return item.shop.ware_house_region_name === option.option_name

                                                            return products;
                                                        }))
                                                    }
                                                    } type="checkbox" className="checkbox" id={`filter-option-${id}-${index}`}
                                                    />
                                                    <label for={`filter-option-${id}-${index}`} className=" filter-name ">
                                                        {option.option_name}
                                                    </label>
                                                </div>
                                                : null
                                        }
                                        {
                                            option.gtprice ?
                                                <div className="filter-option--price">
                                                    <button className="filter-option--btn"
                                                    >
                                                        {handlePrice(option.ltprice, option.gtprice)}
                                                    </button>
                                                </div>
                                                : null
                                        }
                                        {
                                            option.color_hexRgb ?
                                                <div className="color">
                                                    <div className="filter-color">
                                                        <button className='filter-option-color'
                                                            style={{
                                                                backgroundColor: `#${option.color_hexRgb}`
                                                            }}>
                                                        </button>
                                                    </div>
                                                </div>
                                                : null
                                        }
                                    </>)
                                    )
                                }
                            </div>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Filter;