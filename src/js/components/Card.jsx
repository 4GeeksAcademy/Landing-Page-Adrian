import React from "react";

const Card = ({ image, title, description }) => {
    return (
        <div className="card" style={{width: "300px"}}>
            <img src={image} class="card-img-top" alt={title} />
            <div className="card-body text-center">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div className="d-flex justify-content-center">	
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default Card;