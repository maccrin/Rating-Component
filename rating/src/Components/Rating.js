import { useNavigate, } from "react-router-dom";
import React, { useState } from "react";
import "./rating.css";
import Star from '../Assets/icon-star.svg';

const Rating = () => {
    const [rating, setRating] = useState(0);
    const [active, setActive] = useState(false);
    const navigate = useNavigate();
    const submit = () => {
        navigate('/thanks',
            {
                replcae: true,
                state: { rating: rating }
            })
    }
    return (
        <div className="wrapper">
            <img className="star" src={Star} alt="Star-Logo" />
            <h3 className="header">
                How Did We Do?</h3>
            <p className="text">
                Please let us know how did we with your support
                request.All feedack is appreciated to help us
                improve our offering!
            </p>
            <div className="rating">
                {Array.of(1, 2, 3, 4, 5).map((eachRate) => {
                    return (
                        <button
                            type="button"
                            key={eachRate}
                            className={eachRate === rating ? "off" : eachRate === rating - 1 ? "prev" : "on"}
                            onClick={() => {
                                setActive(true)
                                setRating(eachRate)
                            }}>
                            <span className="eachRate">{eachRate}</span>
                        </button>
                    );
                })}
            </div>
            <button className={active ? "active" : "ratingbutton"} onClick={submit}>
                Submit
            </button>
        </div>)
}
export default Rating