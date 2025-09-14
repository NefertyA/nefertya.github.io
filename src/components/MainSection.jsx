import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';

function MainSection() {
  return (
    <div className='main-container'>
      <h1 className='typewriter'>hi, i'm neferty.</h1>
      <p>i'm a second year computer engineering student at the University of Waterloo.</p>
      <div className='Main-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          to='contact-me'
        >
          CONTACT ME
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          download='/Neferty_Amooyan_Resume.pdf'
          target="_blank"
          onClick={console.log('hey')}
        >
          VIEW MY RESUME
        </Button>
      </div>
    </div>
  );
}

export default MainSection;