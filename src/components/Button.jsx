import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']

export const Button = ({children, type, onClick, buttonStyle, buttonSize, to, download, target}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    if (download) {
        // Render as <a> for file download
        return (
          <a
            href={download}
            target="_blank"
            rel="noopener noreferrer"
            className='btn-mobile'
          >
            <button
              className={`btn ${checkButtonStyle} ${checkButtonSize}`}
              type={type}
            >
              {children}
            </button>
          </a>
        )
      }
    
      if (to) {
        return (
          <a 
            href={to} 
            target={target}
            rel="noopener noreferrer"
            className='btn-mobile'
            >
            <button
              className={`btn ${checkButtonStyle} ${checkButtonSize}`}
              type={type}
            >
              {children}
            </button>
          </a>
        )
      }
    
      // Default: just a button
      return (
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
      )
};