import React from 'react'
import { Link } from "react-router-dom"

function CardItem(props) {
  return (
    <>
        <li className="cards__item">
            <a
                className="cards__item__link"
                href={props.path}
                target="_blank"
                rel="noopener noreferrer"
            >
                <figure className="cards__item__pic-wrap">
                    <img src={props.src} alt="Computer Image" className="cards__item__img" />
                </figure>
                <div className="cards__item__info">
                    <div className="cards__item__text">
                        <h5>{props.text}</h5>
                        <p>{props.desc}</p>
                    </div>
                </div>
            </a>
        </li>
    </>
  )
}

export default CardItem
