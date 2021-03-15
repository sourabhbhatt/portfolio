import React, { useEffect, useRef, useState } from 'react'
import { gsap, Power3 } from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import './Home.scss'
import Navbar from '../Navbar/Navbar'
import AboutMe from '../AboutMe/AboutMe';
import FirstLook from '../FirstLook/FirstLook';
import Footer from '../Footer/Footer';
import Services from '../../ReUsable/Services';
import FeaturedRooms from '../FeaturedRooms';
import Loading from '../../ReUsable/Loading'

export default function Home() {
    const [loading, setLoading] = useState(true)
    const stot = useRef(null);
    let state = false;

    useEffect(() => {
        AnimateBanner();
        gsap.registerPlugin(ScrollToPlugin)
        TriggerNavAnimations();
        // stotTrigger();
        setTimeout(() => setLoading(false), 1000);
    })

    const stotTrigger = () => {
        if (window.scrollY > 50) stot.current.style.opacity = '1';
        else stot.current.style.opacity = '0';

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50)
                stot.current.style.opacity = '1';
            else
                stot.current.style.opacity = '0';
        })
    }

    const TriggerNavAnimations = () => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '#top',
                start: 'top +=50',
                end: 'top -=50',
                scrub: true,
            }
        })
    }

    const AnimateBanner = () => {
        gsap.from('.banner', { opacity: 0, y: '-2em', duration: 0.5, ease: Power3.easeInOut })
    }

    const ToggleBubble = () => {
        if (state) {
            gsap.to('.cancel_bubble', 0.5, { rotate: '360deg' })
            gsap.to('.bubbleMenu', 0.5, { width: 0, height: 0, delay: 0.25 })
            state = false;
        } else {
            gsap.to('.bubbleMenu', 0.5, { width: '100%', height: '100vh' })
            gsap.to('.cancel_bubble', 0.5, { rotate: '-360deg', delay: -0.25 })
            state = true;
        }
    }

    const handleLinks = (type) => {
        let y = 0;
        if (type === '1') {
            y = document.getElementById('aboutMe').offsetTop;
            gsap.to(window, 0.8, { scrollTo: y - 100, ease: Power3.easeOut })

        }
        else if (type === '2') {
            y = document.getElementById('projects').offsetTop;
            gsap.to(window, 0.8, { scrollTo: y - 80, ease: Power3.easeOut })
        }
        else if (type === '3') {
            y = document.getElementById('contact_me').offsetTop;
            gsap.to(window, 0.8, { scrollTo: y - 80, ease: Power3.easeOut })
        }
        else if (type === '4') {
            let a = document.createElement('a');
            a.href = './Assets/Resume_Sourabh.docx'
            a.download = "Resume_Sourabh.docx"
            a.click()
        }
        else if (type === '5') {
            ToggleBubble();
        }
        else if (type === 'top') {
            gsap.to(window, 0.8, { scrollTo: 0, ease: Power3.easeOut })
        }

    }

    return (
        <>
            {!!loading ? <Loading /> :
                <div style={{ overflowX: 'hidden' }}>
                    {/* <img src={require('../../Assets/bg.jpg')} className='banner' alt="" /> */}

                    <Navbar handleLinks={(type) => handleLinks(type)} />

                    <div id='top' />
                    <div className='trigger-banner'>
                        <FirstLook />
                    </div>
                    <div id='aboutMe' /><AboutMe />
                    <div id='Services' /><Services />
                    <div id='projects' /><FeaturedRooms />
                    <div id='contact_me' /><Footer />
                    <div className='stot' ref={stot}>
                        <button type="button" className="btn btn-outline-primary rounded-circle" title='Go to top'
                            onClick={() => handleLinks('top')} style={{ padding: '5px 7px' }}>
                            <i className="fas fa-chevron-circle-up fa-2x"></i>
                        </button>
                    </div>
                    <div className='bubbleMenu'>
                        <div className='links1'>
                            <div className='link1' onClick={() => handleLinks('5')}><i className="fa fa-times fa-lg cancel_bubble" aria-hidden="true"></i></div>
                            <div onClick={() => { ToggleBubble(); return handleLinks('1') }} className='link1'>About Me</div>
                            <div onClick={() => { ToggleBubble(); return handleLinks('2') }} className='link1'>Projects</div>
                            <div onClick={() => { ToggleBubble(); return handleLinks('3') }} className='link1'>Contact Me</div>
                            <div onClick={() => { ToggleBubble(); return handleLinks('4') }} className='link1'>
                                <a href={require('../../Assets/Resume_Sourabh.docx')} target='_blank' download='Resume'>Resume&nbsp;<i className="fa fa-download" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div >
            } </>
    )
}

