import React from 'react';
import HoverImage from './HoverImage';
import './HoverImageRow.css';

function HoverImageRow() {
    return (
        <div className="hover-image-row">
            <HoverImage
                imageSrc="ComputerCoding.jpg"
                hoverHeader="i like to code."
                hoverText="and i love storytelling. i hope to make a
                game someday. click to read about some of my recent
                projects."
                link="/portfolio"
            />
            <HoverImage
                imageSrc="Graph.jpg"
                hoverHeader="i like trends."
                hoverText="especially trends in data. and i love to 
                find them by building algoritms. click to check out 
                my experiences with data analysis."
                link="/work-experience"
            />
            <HoverImage
                imageSrc="AboutMeImage.jpg"
                hoverHeader="i like to chat."
                hoverText="want to get in touch? maybe grab a boba
                on the way? click to contact me and i'll be in touch soon."
                link="/contact-me"
            />
        </div>
    );
}

export default HoverImageRow;