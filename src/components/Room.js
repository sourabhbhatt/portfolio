import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../Assets/room-1.jpeg';
import PropTypes from 'prop-types';

export default function Room({ room }) {
    const { name, slug, images, price } = room;

    return (
        <article className="room">
            <div className="img-container">
                <img src={images || defaultImg} alt="single room" />
                <div className="price-top">
                    <p>Project</p>
                    <h6> {price}</h6>
                </div>
                <Link to={{ pathname: `/Portfolio/${slug}`, state: "My name is Sourabh bhatt" }} className="btn-primary room-link">Features</Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    );
}

Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
    })
}