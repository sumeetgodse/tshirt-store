import { connect } from "react-redux";
import "./Cart.css"
import { useDispatch } from "react-redux";
import { deleteItem } from "../../store/actions";

const Cart = (props) => {
    const dispatch = useDispatch();
    const deleteFromCart = (item) => {
        dispatch(deleteItem(item))
    }
    return (
        <>
            <h2>Shopping Cart</h2>
            <table>
                <tbody>
                    {props.productList.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td className="item-data"><img alt="product-icon" className="cart-img" src={item.imageURL} /></td>
                                <td className="item-data">
                                    <table>
                                        <tbody>
                                            <tr><td className="name-price">{item.name}</td></tr>
                                            <tr><td className="name-price">Rs. {item.price}</td></tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td className="item-data">Qty. {item.count}</td>
                                <td className="item-data"><button onClick={() => { deleteFromCart(item) }}>Delete</button></td>
                            </tr>
                        )
                    })}
                    {props.cartCount !== 0 && <tr style={{ fontSize: "large", fontWeight: "bold" }}><td colSpan={4} >Total Price: Rs. {props.totalPrice}/-</td></tr>}
                    {props.cartCount === 0 && <tr style={{ fontSize: "large", fontWeight: "bold" }}><td colSpan={4} >Opps! Your cart is empty!</td></tr>}
                </tbody>
            </table>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        cartCount: state.cartCountReducer.cartCount,
        productList: state.cartCountReducer.productList,
        totalPrice: state.cartCountReducer.totalPrice
    };
}

export default connect(mapStateToProps)(Cart);