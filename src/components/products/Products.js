import { useEffect, useState } from "react"
import "./Products.css";
import { useDispatch } from "react-redux";
import { addToProducts } from "../../store/actions";

export const Products = () => {
    const [productList, setProductList] = useState([])
    const [listToMap, setListToMap] = useState([])
    const apiUrl = "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    const fetchProducts = async () => {
        const response = await fetch(apiUrl)
        const result = await response.json()
        setProductList(result)
        setListToMap(result)
    }
    const [searchText, setSearchText] = useState("")
    const dispatch = useDispatch();
    useEffect(() => {
        fetchProducts()
    }, [])

    const onSearch = () => {
        setListToMap(productList.filter((item) => {
            return item.name.toLowerCase().includes(searchText.toLocaleLowerCase())
        }))
    }

    const searchTextChange = (val) => {
        setSearchText(val)
    }
    const addToCart = (item) => {
        dispatch(addToProducts(item))
    }

    const handleCheck = e => {
        if (e.target.value === "Polo") {
            e.target.checked ? setListToMap(productList.filter((item) => {
                return item.name.toLowerCase().includes("polo")
            })) : setListToMap(productList)
        }
        if (e.target.value === "Round") {
            e.target.checked ? setListToMap(productList.filter((item) => {
                return item.name.toLowerCase().includes("round")
            })) : setListToMap(productList)
        }
        if (e.target.value === "Hoodie") {
            e.target.checked ? setListToMap(productList.filter((item) => {
                return item.name.toLowerCase().includes("hoodie")
            })) : setListToMap(productList)
        }
    };

    return (
        <>
            <div className="search-box">
                <input value={searchText} onChange={(e) => { searchTextChange(e.target.value) }} className="form-control mr-sm-2" placeholder="Search..." />
                <button className="btn btn-outline-success my-2 my-sm-0" onClick={onSearch}>Search</button>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="filter" style={{ width: "20%", margin: "50px" }}>
                    <b>Type</b><br />
                    <input type="checkbox" id="polo" name="polo" value="Polo" onChange={handleCheck} />
                    <label htmlFor="polo"> Polo</label><br />
                    <input type="checkbox" id="hoodie" name="hoodie" value="Hoodie" onChange={handleCheck} />
                    <label htmlFor="hoodie"> Hoodie</label><br />
                    <input type="checkbox" id="round" name="round" value="Round" onChange={handleCheck} />
                    <label htmlFor="round"> Round</label><br />
                </div>
                <div className="card-group">
                    {listToMap.map((item) => {
                        return (
                            <div className="card" key={item.id}>
                                {item.name}
                                <img alt="product-img" className="card-img-top" src={item.imageURL} />
                                <div style={{ display: "flex", alignItems: "center", marginTop: "10%" }}>
                                    <div style={{ marginLeft: "10%" }}>Rs. {item.price}/-</div>
                                    <div style={{ marginLeft: "10%" }}><button onClick={() => addToCart(item)}>Add to cart</button></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {listToMap.length === 0 && <h2 style={{ textAlign: "center" }}>Opps! No items were found!</h2>}
        </>
    )
}
