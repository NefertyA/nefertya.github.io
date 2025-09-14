import React from 'react'
import "./Cards.css"
import CardItem from "./CardItem"
import { Button } from './Button'

function Cards() {
  return (
    <div className="cards">
      <h1>check out some of my recent projects.</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
                <CardItem 
                src="Website.png"
                text="website portfolio."
                desc="a portfolio website built with React to showcase my projects and experiences."
                path="https://nefertya.github.io/"
                />
                <CardItem 
                src="ExcelImage.jpg"
                text="excel analysis app."
                desc="a console-based app built with C++ that analyzes data across multiple Excel files based on user-defined criteria."
                path="https://github.com/NefertyA/ExcelAnalysis"
                />
                <CardItem 
                src="WeatherApp.png"
                text="weather app."
                desc="a web app built with JS and third-party APIs to provide real-time weather forecasts based on the user's location."
                path="https://github.com/NefertyA/WeatherApp"
                />
            </ul>
        </div>
      </div>
      <h1>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          to='https://github.com/NefertyA'
          target="_blank"
          onClick={console.log('hey')}
        >
          VIEW ALL MY PROJECTS
          </Button>
      </h1>
    </div>
  )
}

export default Cards
