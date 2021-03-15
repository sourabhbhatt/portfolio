import React, { useEffect } from 'react'
import './AboutMe.scss'
import { gsap, Bounce, Power3 } from "gsap";
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

export default function AboutMe() {

    useEffect(() => {

        AnimateHeading();
        AnimateContainer();
    })

    const AnimateHeading = () => {
        gsap.timeline()
            .from('.heading', { opacity: 0, y: -10, duration: 1, ease: Bounce.easeOut, delay: 1 })
    }

    const AnimateContainer = () => {
        gsap.timeline({ scrollTrigger: { trigger: '.container', start: '+=100 bottom' } })
            .from('.container', { opacity: 0, y: -50, duration: 0.6, ease: Power3.easeOut, delay: 1 })
            .to('.aboutme-text', { opacity: 1, duration: 1, height: 'auto', scaleY: 1, ease: Power3.easeOut })

        gsap.timeline({ scrollTrigger: { trigger: '.heading', start: 'center top+=40%', toggleActions: 'play pause resume reverse' } })
            .to('.hand-wave', { top: '-5em', opacity: 1, ease: Bounce.easeOut })


    }

    return (
        <div className='aboutme'>
            <span className='heading-container'>
                <h3 className='heading'>About Me</h3>
                </span>
            <div className='container'>
                <img src={require('../../Assets/hand-wave.png')} className='hand-wave' alt=" "/>
                {/* <p className='aboutme-text'>"A passionate developer, always keen to learn what is new in the developers community, with a slight inclination towards front-end (because afterall reality is what you see <span aria-label='jsx-a11y/accessible-emoji' role='img'>😉</span>)"</p> */}
                <p className='aboutme-text'>"With a strong foundation in computer science, i am passionat about web design and development, and interested in mobile app development. As i grow as a developer, I hope to Write clean, readable code that can be used by other and leveraged to create beautiful software. <span aria-label='jsx-a11y/accessible-emoji' role='img'>🙂</span>)"</p>
            </div>
        </div>
    )
}
