import React, { useEffect, useState } from 'react'
import './Footer.scss'
import { gsap, Bounce } from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import * as emailjs from "emailjs-com";

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
    const [sending, setSending] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const AnimateHeading = () => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.footer-container',
                start: 'top+=100 bottom-=50',
                toggleActions: 'restart none none reset'
            }
        })
            .from('.footer-heading', { opacity: 0, y: -10, duration: 1, ease: Bounce.easeOut })
    }

    useEffect(() => {
        AnimateHeading();
    })

    const submitResponse = (e) => {
        e.preventDefault();

        setSending(true);
        let templateParams = {
            from_name: name.trim(),
            from_email: email.trim(),
            to_name: 'Sourabh Bhatt',
            message: message.trim(),
        }
        emailjs.send(
            'service_zflkx0e',
            'template_m9qta6f',
            templateParams,
            'user_yGaKatld0Plmj67MT1uAr'
        ).then(res => {
            console.log(res.text);
            setName('')
            setEmail('')
            setMessage('')
            const alert = document.getElementById('alertSection');
            alert.style.maxHeight = '10em';
            setTimeout(() => {
                alert.style.maxHeight = '0';
            }, 3000);
            setSending(false);
        })
            .catch(err => {
                console.log(err.text);
                alert('Error Occured! Please try again\n' + err.message)
                setSending(false);
            })
    }

    return (
        <div className='footer-container'>
            <span className='heading-container'>
                <h3 className='footer-heading'>Contact Me</h3>
            </span>
            <div className='footer-form'>
                <form className='form' onSubmit={(event) => { submitResponse(event) }}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="name">Name</label><span className='red-star'> *</span>
                            <input type="text" className="form-control" id='name'
                                placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="email">Email</label><span className='red-star'> *</span>
                            <input type="email" className="form-control" id='email' placeholder='Your Email'
                                value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment">Suggestion / Query</label><span className='red-star'> *</span>
                        <textarea type="text" className="form-control" id='comment' placeholder="Your comment"
                            value={message} onChange={(e) => setMessage(e.target.value)} required />
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={sending}>
                        {
                            sending ?
                                <span>
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    <span> Sending...</span>
                                </span>
                                :
                                "Submit"
                        }
                    </button>
                    <div id='alertSection'>
                        <div className="alert alert-success mt-4" role="alert">
                            <b>Response sent successfully!</b>
                        </div>
                    </div>
                </form>

            </div>
            <div className='social-connect'>
                <ul className="social-network social-circle">
                    <li><a href="https://www.facebook.com/sourabh.bhatt.121/" target="_blank" rel="noopener noreferrer" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="https://github.com/sourabhbhatt/" target="_blank" rel="noopener noreferrer" className="icoGit" title="GitHub"><i className="fa fa-github"></i></a></li>
                    <li><a href="https://www.instagram.com/sourabh2222/" target="_blank" rel="noopener noreferrer" className="icoInsta" title="Instagram"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/sourabh-b-399476b0/" target="_blank" rel="noopener noreferrer" className="icoLinkedIn" title="LinkedIn"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="https://www.youtube.com/channel/UCCgn31a72rIeBUttNpn_oWA" target="_blank" rel="noopener noreferrer" className="icoYoutube" title="LinkedIn"><i className="fa fa-youtube"></i></a></li>
                </ul>
            </div>
            <div className="text-center">
                © 2020 Copyright:&nbsp;&nbsp;
                <a href="#" style={{ textDecoration: 'none' }}>SOURABH BHATT</a>
            </div>
        </div>
    )
}
