import React from 'react'
import './NotFound.css'
import { Link } from 'react-router-dom'
import Hero from '../../ReUsable/Hero';

export default function NotFound() {
    return (
        < Hero >
            <div className="mainbox mainbox-primary">
                <div className="err">4</div>
                <i className="far fa-question-circle fa-spin"></i>
                <div className="err2">4</div>
                <div className="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go
                &nbsp;
                    <Link to="/" className="btn-primary"> return Home  </Link>
                &nbsp;
                    and try from there.</p></div>
            </div>
        </Hero>
    )
}
