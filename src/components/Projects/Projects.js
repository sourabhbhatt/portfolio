import React, { useEffect } from 'react'
import './Projects.scss'
import { gsap, Power3 } from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger)



export default function Projects({ projects }) {

    // var projects = [
    //     { title: 'Store To Door Driver', description: 'This is a mobile application interface designed to chat with other users over internet', link: '', github: '', imgPaths: ['Projects/1.png'], technologies: ['Firebase', 'React Native'], languages: ['JavaScript', 'CSS'] },
    //     // { title: 'Store To Door User', description: 'This is a web app developed for Heart in Hills organization', link: '', github: '', imgPaths: ['Projects/2.png'], technologies: ['Firebase', 'Angular 8'], languages: ['TypeScript', 'HTML', 'CSS'] },
    //     // { title: 'AndGo', description: 'This is a web app developed for Heart in Hills organization', link: '', github: '', imgPaths: ['Projects/2.png'], technologies: ['Firebase', 'Angular 8'], languages: ['TypeScript', 'HTML', 'CSS'] },
    //     { title: 'Portfolio', description: "The source code of this Website/Portfolio", link: '', github: '', imgPaths: ['Projects/3.png'], technologies: ['Firebase', 'ReactJS', 'GSAP'], languages: ['JavaScript', 'HTML', 'CSS'] },
    // ]

    useEffect(() => {
        AnimateHeading();
        SkewPerScrollVelocity();
    }, [])

    const SkewPerScrollVelocity = () => {
        let proxy = { skew: 0 },
            skewSetter = gsap.quickSetter(".card", "skewY", "deg"),
            clamp = gsap.utils.clamp(-20, 20);

        ScrollTrigger.create({
            onUpdate: (self) => {
                let skew = clamp(self.getVelocity() / -300);
                if (Math.abs(skew) > Math.abs(proxy.skew)) {
                    proxy.skew = skew;
                    gsap.to(proxy, { skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew) });
                }
            }
        });

        gsap.set(".card", { transformOrigin: "center center", force3D: true });

    }

    const AnimateHeading = () => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.projects-container',
                start: 'top+=100 bottom',
                toggleActions: 'restart none none reset'
            }
        })
            .fromTo('.projects-heading', 1, { y: -50 }, { opacity: 1, y: 0, ease: Power3.easeOut })
            .to('.projects-underline', 0.8, { width: '80%', ease: Power3.easeOut })
    }

    const concatStringArray = (list) => {
        let result = '';
        list.forEach((entry, index) => {
            if (index !== list.length - 1)
                result += entry + ', ';
            else
                result += entry;
        });
        return result;
    }

    const handleRedirects = (link) => {
        window.open(link, '_blank')
        return null;
    }

    return (
        <div>
            {!!projects ? (
                <div className='projects-container'>
                    <h4 className='projects-heading'>PROJECTS<div className='projects-underline'></div></h4>
                    <div className="cards-group">
                        {projects.map((project, index) => {
                            return (
                                <div className="card" key={index}>
                                    <div className='img-top-container'>
                                        <div className='overlay' >{project.description}</div>
                                        <div className='overlay overlay2'>Hover or Click for short description </div>
                                        <img src={require('../../Assets/' + project.imgPaths[0])} className="card-img-top" alt=' ' />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title" title={project.title}>{project.title}</h5>
                                        <div>
                                            <button type="button" className="btn btn-outline-secondary btn-block" disabled={!project.github} onClick={() => handleRedirects(project.github)}>
                                                <i className="fab fa-github"></i> {!project.github ? "Confidential source code " : "Source Code on GitHub"}
                                            </button>
                                            <button type="button" className="btn btn-outline-success btn-block" disabled={!project.link} onClick={() => handleRedirects(project.link)}>
                                                <i className="fas fa-external-link-alt"></i> {!project.link ? "No Site to visit" : "Visit Site"}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted"><b>Technologies:</b> <span style={{ color: '#1976D2' }}>{concatStringArray(project.technologies)}</span></small><br />
                                        <small className="text-muted"><b>Languages:</b> <span style={{ color: '#1976D2' }}>{concatStringArray(project.languages)}</span></small>
                                    </div>
                                </div>
                            );
                        })
                        }
                    </div>
                </div >
            ) : (
                <div className="error">
                    <h3>No such detail could be found...</h3>
                    <Link to="/" className="btn-primary">Back to Home </Link>
                </div>
            )}
        </div>
    )
}


// for hotizontal Scrolll :)
{/* <ScrollMenu
    arrowLeft={<div style={{ fontSize: "30px", position: 'fixed', left: 0 }}>{" < "}</div>}
    arrowRight={<div style={{ fontSize: "30px", position: 'fixed', right: 0 }}>{" > "}</div>}
    alignOnResize={true}
    data={projects.map((project, index) => { }))
/> */}