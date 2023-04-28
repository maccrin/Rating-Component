import React from "react";
import "./thank.css";
import { Link, Navigate, useLocation } from "react-router-dom";
import Thanks from '../Assets/illustration-thank-you.svg';
const ThankYou = () => {
    const location = useLocation();
    const rating = location.state.rating;
    const back = () => {
        <Navigate to="/" />
    }
    return (
        <div className="thanks-wrapper">
            <img className="thanks-img" src={Thanks} alt="Thanks-Logo" />
            <p className="thanks-text">You select {rating} out of 5</p>
            <h3 className="thanks-header">Thank You!</h3>
            <p className="thanks-para">We appriciate you taking the time to give a rating.
                if you ever need more support don't hesitate to
                get in touch!</p>
            <Link to={`/`}>
                <button className="thanksbutton" onClick={back}>
                    Back To Previous Page
                </button>
            </Link>
        </div>)
}
export default ThankYou