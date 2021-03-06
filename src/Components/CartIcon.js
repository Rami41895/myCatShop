import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import "./CartIcon.css";

function CartIcon(Props){
    return <div id="cart-icon">
        <Link to="/cart">
            <i className="fa fa-shopping-cart" style={{color : "rgba(206, 141, 22, 0.822)"}}></i>
            <span className="badge badge-danger">{Props.totalQuantity}</span>
        </Link>
    </div>
}

const mapStateToProps = (state) => {
    console.log(typeof state.cart)
    return {
        totalQuantity: state.cart.reduce((total, item) => total + parseInt(item.quantity), 0),
    };
}

export default connect(mapStateToProps)(CartIcon);