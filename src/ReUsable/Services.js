import React, { Component } from 'react';
import { AiFillAndroid, AiFillApple, AiFillHdd, AiOutlineAlert } from 'react-icons/ai';
import { BsCodeSlash } from 'react-icons/bs';
import Title from './Title'


export default class Services extends Component {
    state = {
        services: [
            {
                icon: <AiFillAndroid />,
                title: "ANDROID DEVELOPMENT",
                info: "I develop Android mobile app's by using React-Native  ",
            },
            {
                icon: <AiFillApple />,
                title: "IOS DEVELOPMENT",
                info: "I develop IOS mobile app's by using React-Native ",
            },
            {
                icon: <BsCodeSlash />,
                title: "WEB DEVELOPMENT ",
                info: "i like to code things valuing component based design patterns, and enjoy bringing ideas in the browser.",
            },
            {
                icon: <AiOutlineAlert />,
                title: "INVOLVEMENT",
                info: "Things I enjoy working with that makes quality of life better, I am currently working as a Front End Developer and Continous Integration using Git, ",
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="WHAT I DO" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article kye={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>;
                    })}
                </div>

            </section>
        );
    }
}
