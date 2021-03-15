import React, { Component } from 'react';
import defaultBcg from '../Assets/room-1.jpeg';
import Hero from '../ReUsable/Hero';
import Banner from '../ReUsable/Banner';
import { Link } from 'react-router-dom';
import workData from '../workData'
import Projects from '../components/Projects/Projects';
import Loading from '../ReUsable/Loading'

export default class SingleRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            loading: true
        };
    }

    componentDidMount() { setTimeout(() => this.setState({ loading: false }), 1000) }
    render() {
        const { loading } = this.state;
        var data = workData.map(i => { if (i.slug == this.state.slug) return <Projects projects={i.projects} /> })
        return (
            <>
                {loading ? <Loading /> : (<div>
                    {!!data ? data : <div className="error">
                        <h3>No such detail could be found...</h3>
                        <Link to="/" className="btn-primary">Back to Home </Link>
                    </div>}
                </div>
                )}

            </>
        )
    }
}
