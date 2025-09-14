import React from 'react';
import { Link } from 'react-router-dom';
import './HoverImage.css';

function HoverImage({ imageSrc, hoverHeader, hoverText, link }) {
    return (
        <div className="hover-image-container">
            <Link to={link} style={{ textDecoration: 'none' }}>
                <img src={imageSrc} alt="Descriptive Alt Text" className="hover-image" />
                <div className="hover-header">{hoverHeader}</div> {/* Ensure this is here */}
                <div className="hover-text">{hoverText}</div>
            </Link>
        </div>
    );
}

export default HoverImage;