import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css'

const SingleService = (props) => {
    const { _id, name, price, img, description } = props?.service;
    return (
        <div>
            <div className="container">
                <div className="service-div">
                    <img className="image" src={img} alt="" />
                    <div className="room-desc">
                        <h5> {price} </h5>
                        <h5>{name}</h5>
                        <p>{description}</p>

                        <Link to={`/placebook/${_id}`}>
                            <button className="book-now">Book Place</button>
                        </Link>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleService;