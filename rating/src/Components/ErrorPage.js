import React from "react"
import { Link } from "react-router-dom"
import "./error.css";
const Error = () => {
    return (
        <div className="error">
            <Link to={`/`}>
                <h3 className="error-text">Page Doesn't Exist</h3>
            </Link>
        </div>)
}
export default Error