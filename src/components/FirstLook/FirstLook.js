import React, { useEffect, useRef } from 'react'
import './FirstLook.scss'
import { TweenLite, Bounce, gsap } from "gsap"
import { ScrollTrigger } from 'gsap/all'
import profilePhoto from '../../Assets/sam.jpg'
gsap.registerPlugin(ScrollTrigger)

export default function FirstLook() {
    const techs = ['Web Development', 'Front-End Technologies', 'Web Development',];

    const AnimateTexts = () => {

        TweenLite.to('.first-look', 1, { opacity: 1, scale: 1, ease: Bounce.easeOut, delay: 0.5, lazy: true })
    }

    useEffect(() => AnimateTexts())


    return (
        <div className="first-look">
            <img src={profilePhoto} className="FirstLookImage" alt="My Profile Photo" />
            <div className='first-look-container'>
                <span className="text" style={{ fontFamily: 'Dancing Script', }}>Hi,</span ><br />
                <span className="text">  I am Sourabh </span><br />
                <span className="text">Just another <span className="code">{"<CODER/>"}</span></span><br />
                <span className="text">doing</span><br />
                <div style={{ whiteSpace: 'nowrap', lineHeight: '1.3em', fontWeight: 700 }}>
                    {'{ '}
                    <span className="code">Front-End Technologies </span>{' }'}
                </div>
            </div>
        </div>
    )
}
