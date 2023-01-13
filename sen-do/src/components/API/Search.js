import { useState, useRef, useEffect } from 'react'
function Search(props) {

    let { textSearch, setTextSearch } = props;
    let saveText;
    const [suggestName, setSuggestName] = useState([])
    const [dataProduct, setDataProducts] = useState([])
    const [showS, setShowS] = useState(false)

    const onChange = (e) => {
        showSuggest()
        textSearch = e.target.value
        saveText = textSearch
        getNameProducts(textSearch)
    }
    const onBlur = () => {
        setTimeout(() => {
            hideSuggest()
        }, 1000)
    }

    const onFocus = () => {
        setShowS(true)
    }
    const onClick = () => {
        hideSuggest()
        handleSearch(saveText)
    }

    function handleSearch(textSearch) {
        setTextSearch(textSearch)
    }

    function getNameProducts(str) {
        let listItem = dataProduct.filter((item) => {
            const fixStr = str.toLowerCase()
            const fixName = item.name.toLowerCase()
            return fixName.includes(fixStr)
        })
        let listName = listItem.map((item) => {
            return item.name
        })
        setSuggestName(listName)
    }

    function hideSuggest() {
        return document.getElementById("suggestSearch").style = "display: none";
    }
    function showSuggest() {
        return document.getElementById("suggestSearch").style = "display: block";
    }
    useEffect(() => {
    }, [showS])

    function Suggest() {
        return (
            <div id="suggestSearch">
                <ul className="ul-suggestSearch">
                    {suggestName.map((name) => {
                        return (<li onClick={() => {
                            hideSuggest()
                            handleSearch(name)
                        }}>{name}</li>)
                    })
                    }
                </ul>
            </div>
        )
    }
    useEffect(() => {
        fetch('http://localhost:3000/tasks')
            .then(res => res.json())
            .then(data => {
                setDataProducts(data);
            })
    }, [])
    return (
        <>
            <input
                className="header__search-input" placeholder="Tìm kiếm trên Sendo..."
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <div className='header__search-history'>
                <ul className='header__search-history-list'>
                    <li className='header__search-history-item'>
                        <a href='#'> {Suggest()}</a>
                    </li>
                </ul>
            </div>
        </>
    );
}
export default Search;