import React from 'react';
// import Banner from './Banner';


export default function Hero({ children, hero }) {
  return <header className={hero}> {children} </header>;

}

Hero.defaultProps = {
  hero: "defaultHero"
};